import { Modal, Input, Select, Button } from 'antd';
import React from 'react';
import { MemberModalType } from '../types';

const roles = ['Admin', 'Member', 'Staff', 'Regular', 'Project', 'Sales'];

export const MemberModal: React.FC<MemberModalType> = ({
  type,
  open,
  data,
  setIsModalOpen,
}) => {
  const title = type === 'add-new' ? 'Add Member' : 'Confirm';
  const [address, setAddress] = React.useState<string>('');
  const [role, setRole] = React.useState<string>('');
  const allRoles = roles && roles.map((role) => ({ value: role, label: role }));

  return (
    <Modal
      title={title}
      open={open}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
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
            onClick={() => setIsModalOpen(false)}
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
              onClick={() => setIsModalOpen(false)}
            >
              confirm
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
