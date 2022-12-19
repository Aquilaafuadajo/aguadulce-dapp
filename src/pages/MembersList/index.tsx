import React from 'react';
import { Table, Button, Alert } from 'antd';
import { memberColumns } from '../../configs/tableColumns';
import { MemberModalType } from '../../types/modal.type';
import { MemberModal } from '../../modals/Member.modal';
import { useMembers } from '../../state';

const MemberList = () => {
  const [activeModal, setActiveModal] = React.useState<
    Omit<MemberModalType, 'setIsModalOpen'>
  >({ open: false, type: undefined, data: undefined });

  const { members, loading, error } = useMembers();

  const onCloseModal = () => {
    setActiveModal({
      data: undefined,
      open: false,
      type: undefined,
    });
  };
  const onAddNew = () => {
    setActiveModal({
      type: 'add-new',
      open: true,
    });
  };
  const toggleStatus = (address: string, status: boolean) => {
    setActiveModal({
      type: 'confirm',
      open: true,
      data: {
        address,
        active: status,
      },
    });
  };
  return (
    <div className="flex flex-col">
      <Button
        className="w-max ml-auto mr-5 mb-10"
        onClick={onAddNew}
        disabled={error?.status || loading}
      >
        Add Member
      </Button>
      <MemberModal
        open={activeModal?.open}
        type={activeModal?.type}
        data={activeModal.data}
        setIsModalOpen={onCloseModal}
      />
      {error && error?.status && (
        <div className="px-5">
          <Alert message={error?.message} type="error" />
        </div>
      )}
      {!error?.status && (
        <Table
          data-testid="members-table"
          columns={memberColumns({
            toggleStatus,
          })}
          loading={loading}
          dataSource={members}
          rowKey="address"
        />
      )}
    </div>
  );
};

export default MemberList;
