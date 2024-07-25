'use server';

import UserRepository from './UserRepository';

export default async function getAllUsers() {
  return UserRepository.getAll();
}
