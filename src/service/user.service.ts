import { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB} from '../repository/user.repository';
import { iUser } from '../interfaces/interfaces';

async function getAllUser(): Promise<iUser[]> {
  const data = await getAllUserDB();
  if (!data.length) throw new Error('');
  return data;
}

async function getUserById(id: number): Promise<iUser[]> {
  const data = await getUserByIdDB(id);
  if (!data.length) throw new Error('');
  return data;
}

async function updateUser(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const data = await updateUserDB(id, name, surname, email, pwd);
  if (!data.length) throw new Error('error');

  return data;
}

async function deleteUser(id: number): Promise<iUser[]> {
  const data = await deleteUserDB(id);
  if (!data.length) throw new Error('error');

  return data;
}

export { getAllUser, getUserById, updateUser, deleteUser}