import React from 'react';
import { Table, Button } from 'antd';
import { memberColumns } from '../../configs/tableColumns';
import { MemberModalType } from '../../types/modal.type';
import { Member } from '../../types';
import { MemberModal } from '../../modals/Member.modal';

const data: Member[] = [
  {
    address: '0x05dA05930d5E80b32209083CC5F94B7eF277c000',
    role: 'Admin',
    active: true,
    activation_time: '30-11-2022',
  },
  {
    address: '0x19539C9fEC0bcdC91D7B23A006A9279fF2a72233',
    role: 'Staff',
    active: false,
    activation_time: '30-11-2022',
  },
  {
    address: '0x9F80321c824b087Ae1d66c024DB483eF945B9Ceb',
    role: 'Regular',
    active: true,
    activation_time: '30-11-2022',
  },
];

const MemberList = () => {
  const [activeModal, setActiveModal] = React.useState<
    Omit<MemberModalType, 'setIsModalOpen'>
  >({ open: false, type: undefined, data: undefined });

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
      <Button className="w-max ml-auto mr-5 mb-10" onClick={onAddNew}>
        Add Member
      </Button>
      <MemberModal
        open={activeModal?.open}
        type={activeModal?.type}
        data={activeModal.data}
        setIsModalOpen={onCloseModal}
      />
      <Table
        columns={memberColumns({
          toggleStatus,
        })}
        dataSource={data}
        rowKey="address"
      />
    </div>
  );
};

export default MemberList;
