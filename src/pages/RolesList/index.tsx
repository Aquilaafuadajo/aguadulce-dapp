import React from 'react';
import { Table, Button } from 'antd';
import { roleColumns } from '../../configs/tableColumns';
import { RoleModal } from '../../modals/Role.modal';

const data: { role: string }[] = [
  {
    role: 'Admin',
  },
  {
    role: 'Staff',
  },
  {
    role: 'Regular',
  },
];

const RoleList = () => {
  const [activeModal, setActiveModal] = React.useState(false);

  const onCloseModal = () => {
    setActiveModal(false);
  };
  const onAddNew = () => {
    setActiveModal(true);
  };

  return (
    <div className="flex flex-col">
      <Button className="w-max ml-auto mr-5 mb-10" onClick={onAddNew}>
        Add New Role
      </Button>
      <RoleModal open={activeModal} setIsModalOpen={onCloseModal} />
      <Table columns={roleColumns} dataSource={data} rowKey="role" />
    </div>
  );
};

export default RoleList;
