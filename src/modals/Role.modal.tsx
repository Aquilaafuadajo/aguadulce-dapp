import { Modal, Input, Button } from 'antd';
import React from 'react';

export const RoleModal: React.FC<{
  open: boolean;
  setIsModalOpen: (val: boolean) => void;
}> = ({ open, setIsModalOpen }) => {
  const [role, setRole] = React.useState<string>('');

  return (
    <Modal
      title="Add New Role"
      open={open}
      onCancel={() => setIsModalOpen(false)}
      footer={null}
    >
      <div className="flex flex-col">
        <Input
          placeholder="Role Name"
          className="mb-4"
          onChange={(e) => setRole(e.target.value)}
        />
        <Button
          className="w-max ml-auto mb-10"
          onClick={() => setIsModalOpen(false)}
        >
          Submit
        </Button>
      </div>
    </Modal>
  );
};
