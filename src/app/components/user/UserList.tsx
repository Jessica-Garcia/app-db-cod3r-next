import UserRow from './UserRow';
import { User } from '@/core/model/User';
import { users } from '../../data/constants/users';

export interface UserListProps {
  users: User[];
  onclick: (user: User) => void;
}

export default function UserList(props: UserListProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.users.map((user: User) => {
        return <UserRow key={user.id} user={user} onClick={props.onclick} />;
      })}
    </div>
  );
}
