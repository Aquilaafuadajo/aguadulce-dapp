import { Tag, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Member } from '../types';
import { formatTime } from '../utils';

interface ColumnActions {
  toggleStatus: (address: string, status: boolean) => void;
}

export const memberColumns: (actions: ColumnActions) => ColumnsType<Member> = ({
  toggleStatus,
}) => [
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Status',
    dataIndex: 'active',
    key: 'active',
    render: (status) => (
      <Tag color={status ? 'green' : 'volcano'}>
        {status ? 'Active' : 'In-Active'}
      </Tag>
    ),
  },
  {
    title: 'Activation Time',
    dataIndex: 'activation_time',
    key: 'activation_time',
    render: (value) => {
      const d = new Date(Number(value));
      return formatTime(d);
    },
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (row, val) => (
      <Button
        onClick={() => toggleStatus(val.address, !val.active)}
        type="link"
      >
        {val.active ? 'De-activate' : 'Activate'}
      </Button>
    ),
  },
];

export const roleColumns = [
  {
    title: 'Role Name',
    dataIndex: 'role',
    key: 'role',
  },
];
