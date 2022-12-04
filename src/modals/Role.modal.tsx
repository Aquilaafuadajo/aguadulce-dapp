import { Modal, Input, Button, message } from 'antd';
import React from 'react';
import { addRole } from '../services';
import { useRoles } from '../state';

export const RoleModal: React.FC<{
  open: boolean;
  setIsModalOpen: (val: boolean) => void;
}> = ({ open, setIsModalOpen }) => {
  const [role, setRole] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const { roles, setRoles } = useRoles();
  const [messageApi, contextHolder] = message.useMessage();

  const onAddRole = async () => {
    try {
      if (roles?.includes(role)) {
        messageApi.open({
          type: 'error',
          content: 'Role already exists',
        });
        return;
      }
      setLoading(true);
      await addRole(role);
      setRoles([...roles, role]);
      setLoading(false);
      setIsModalOpen(false);
      messageApi.open({
        type: 'success',
        content: 'Role added successfully',
      });
    } catch (err) {
      messageApi.open({
        type: 'error',
        content: 'An error occured',
      });
      console.log(err);
      setLoading(false);
    }
  };
  return (
    <Modal
      title="Add New Role"
      open={open}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      {contextHolder}
      <div className="flex flex-col">
        <Input
          placeholder="Role Name"
          className="mb-4"
          onChange={(e) => setRole(e.target.value)}
        />
        <Button
          className="w-max ml-auto mb-10"
          loading={loading}
          onClick={onAddRole}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};
