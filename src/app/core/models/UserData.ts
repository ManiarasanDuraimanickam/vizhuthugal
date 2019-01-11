import { Memberinfo } from './MemberInfo';

export interface UserData {
    _id: string;
    _rev: string;
    type: string;
    data: Memberinfo[];
  }
