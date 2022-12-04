import { Modal, Input, Select, Button, message } from 'antd';
import React from 'react';
import { addMember, toggleRoleStatus, windowObj } from '../services';
import { useMembers, useRoles } from '../state';
import { MemberModalType } from '../types';

// const roles = ['Admin', 'Member', 'Staff', 'Regular', 'Project', 'Sales'];

export const MemberModal: React.FC<MemberModalType> = ({
  type,
  open,
  data,
  setIsModalOpen,
}) => {
  const title = type === 'add-new' ? 'Add Member' : 'Confirm';
  const [address, setAddress] = React.useState<string>('');
  const [role, setRole] = React.useState<string>('');
  const [loading, setLoading] = React.useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const { roles } = useRoles();
  const { refetch, members } = useMembers();
  const allRoles = roles && roles.map((role) => ({ value: role, label: role }));

  const onAddMember = async () => {
    try {
      const roleId = roles.indexOf(role);
      const exists = members?.findIndex((member) => member.address === address);
      if (address.toLowerCase() === windowObj.addressAccount) {
        messageApi.open({
          type: 'error',
          content: 'Cannot assign role to owner address',
        });
        return;
      }
      if (exists >= 0) {
        messageApi.open({
          type: 'error',
          content: 'Member already exists',
        });
        return;
      }
      setLoading(true);
      await addMember(address, roleId);
      setLoading(false);
      messageApi.open({
        type: 'success',
        content: 'Member added successfully',
      });
      await refetch();
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const onToggleStatus = async () => {
    try {
      setLoading(true);
      await toggleRoleStatus(address, data?.active as boolean);
      console.log('success');
      setLoading(false);
      await refetch();
      setIsModalOpen(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  return (
    <Modal
      title={title}
      open={open}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      {contextHolder}
      {type === 'add-new' && (
        <div className="flex flex-col">
          <Input
            placeholder="Address"
            className="mb-4"
            onChange={(e) => setAddress(e.target.value)}
          />
          <Select
            className="mb-4"
            placeholder="Select Role"
            options={allRoles}
            value={role}
            onChange={(value) => setRole(value)}
          />
          <Button
            className="w-max ml-auto mb-10"
            loading={loading}
            onClick={onAddMember}
          >
            Submit
          </Button>
        </div>
      )}
      {type === 'confirm' && (
        <div className="flex flex-col">
          <p>Are you sure you want to update member status?</p>
          <div className="flex w-max ml-auto mt-10 mb-5">
            <Button
              className="w-max ml-auto mr-4"
              onClick={() => setIsModalOpen(false)}
            >
              cancel
            </Button>
            <Button
              className="w-max ml-auto"
              onClick={onToggleStatus}
              loading={loading}
            >
              confirm
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
