'use client';
import Pagina from '@/app/components/template/Pagina';
import Title from '@/app/components/template/Title';
import UserForm from '@/app/components/user/UserForm';
import UserList from '@/app/components/user/UserList';
import useUsers from '@/app/data/hooks/useUsers';

import { IconPlus, IconUser } from '@tabler/icons-react';

export default function Page() {
  const { users, user, save, deleteUser, cancel, updateUser } = useUsers();

  return (
    <Pagina className="flex flex-col gap-10">
      <Title title="Usuários" subtitle="Cadastro de usuários" icon={IconUser} />

      {user ? (
        <UserForm
          user={user}
          onChange={updateUser}
          onCancel={cancel}
          onSave={save}
          onDelete={deleteUser}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="flex items-center bg-blue-500 px-4 py-2 rounded-md gap-2"
              onClick={() => updateUser({})}
            >
              <IconPlus size={20} />
              <span>Novo Usuário</span>
            </button>
          </div>
          <UserList users={users} onclick={updateUser} />
        </>
      )}
    </Pagina>
  );
}
