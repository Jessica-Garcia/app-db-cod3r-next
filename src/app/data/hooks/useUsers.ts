import Backend from '@/backend';
import { User } from '@/core/model/User';
import { useEffect, useState } from 'react';

export default function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<Partial<User> | null>(null);

  const save = async () => {
    if (!user) return;
    await Backend.users.save(user);
    const userList = await Backend.users.get();
    setUsers(userList);
    setUser(null);
  };

  const deleteUser = async () => {
    if (!user || !user.id) return;
    await Backend.users.delete(user.id);
    const userList = await Backend.users.get();
    setUsers(userList);
    setUser(null);
  };

  useEffect(() => {
    Backend.users.get().then(setUsers);
  }, []);

  return {
    users,
    user,
    setUser,
    save,
    deleteUser,
    cancel: () => setUser(null),
    updateUser: (user: Partial<User> | null) => setUser(user),
  };
}
