import { Member } from './index';

export interface MemberModalType {
  type: 'add-new' | 'confirm' | undefined;
  open: boolean;
  data?: Member;
  address?: string;
  setIsModalOpen: (val: boolean) => void;
}
