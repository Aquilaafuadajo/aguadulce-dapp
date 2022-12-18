import { Modal, Input, Button, message } from 'antd';
import React from 'react';
import { addRole } from '../services';
import { useRoles } from '../state';
import { getRPCErrorMessage } from '../utils';

export const RoleModal: React.FC<{
  open: boolean;
  setIsModalOpen: (val: boolean) => void;
}> = ({ open, setIsModalOpen }) => {
  const [role, setRole] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const { roles, setRoles } = useRoles();
  const [messageApi, contextHolder] = message.useMessage();

  const onAddRole = async () => {
    if (!role) {
      messageApi.open({
        type: 'error',
        content: 'Please enter a role',
      });
      return;
    }
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
      setRole('');
      setIsModalOpen(false);
      messageApi.open({
        type: 'success',
        content: 'Role added successfully',
      });
    } catch (err) {
      const message = getRPCErrorMessage(err);
      messageApi.open({
        type: 'error',
        content: message,
      });
      setLoading(false);
    }
  };
  return (
    <Modal
      title="Add New Role"
      open={open}
      maskClosable={false}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      {contextHolder}
      <div className="flex flex-col">
        <Input
          placeholder="Role Name"
          className="mb-4"
          value={role}
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
