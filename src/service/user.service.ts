import { getAllUserDB, getUserByIdDB} from '../repository/user.repository';
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

export { getAllUser, getUserById}