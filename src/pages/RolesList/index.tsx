import React from 'react';
import { Table, Button, Alert } from 'antd';
import { roleColumns } from '../../configs/tableColumns';
import { RoleModal } from '../../modals/Role.modal';
import { useRoles } from '../../state';

const RoleList = () => {
  const [activeModal, setActiveModal] = React.useState(false);

  const { roles, loading, error } = useRoles();
  const allRoles = roles && roles.map((role) => ({ role }));

  const onCloseModal = () => {
    setActiveModal(false);
  };
  const onAddNew = () => {
    setActiveModal(true);
  };

  return (
    <div className="flex flex-col">
      <Button
        className="w-max ml-auto mr-5 mb-10"
        onClick={onAddNew}
        disabled={error?.status || loading}
      >
        Add New Role
      </Button>
      <RoleModal open={activeModal} setIsModalOpen={onCloseModal} />
      {error && error?.status && (
        <div className="px-5">
          <Alert message={error.message} type="error" />
        </div>
      )}
      {!error?.status && (
        <Table
          columns={roleColumns}
          dataSource={allRoles}
          rowKey="role"
          loading={loading}
        />
      )}
    </div>
  );
};

export default RoleList;
