'use client';
import Pagina from '@/app/components/template/Pagina';
import Title from '@/app/components/template/Title';
import UserForm from '@/app/components/user/UserForm';
import UserList from '@/app/components/user/UserList';
import Backend from '@/backend';
import { User } from '@/core/model/User';
import { IconPlus, IconUser } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export default function Page() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<Partial<User> | null>(null);

  const save = async () => {
    if (!user) return;
    await Backend.users.save(user);
    const userList = await Backend.users.get();
    setUsers(userList);
    setUser(null);
  };

  useEffect(() => {
    Backend.users.get().then(setUsers);
  }, []);

  return (
    <Pagina className="flex flex-col gap-10">
      <Title title="Usuários" subtitle="Cadastro de usuários" icon={IconUser} />

      {user ? (
        <UserForm
          user={user}
          onChange={setUser}
          onCancel={() => setUser(null)}
          onSave={save}
        />
      ) : (
        <>
          <div className="flex justify-end">
            <button
              className="flex items-center bg-blue-500 px-4 py-2 rounded-md gap-2"
              onClick={() => setUser({})}
            >
              <IconPlus size={20} />
              <span>Novo Usuário</span>
            </button>
          </div>
          <UserList users={users} onclick={setUser} />
        </>
      )}
    </Pagina>
  );
}
