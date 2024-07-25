import { User } from '@/core/model/User';
import Image from 'next/image';

export interface UserRowProps {
  user: User;
  onClick?: (user: User) => void;
}
export default function UserRow(props: UserRowProps) {
  return (
    <div
      className="flex bg-zinc-900 p-4 rounded-md items-center gap-5 cursor-pointer"
      onClick={() => props.onClick?.(props.user)}
    >
      <Image
        src="https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={80}
        height={80}
        className="rounded-full"
        alt="Avatar"
      />
      <div className="flex flex-col ">
        <span className="text-xl font-black">{props.user.name}</span>
        <span className="text-sm text-zinc-400">{props.user.email}</span>
      </div>
    </div>
  );
}
