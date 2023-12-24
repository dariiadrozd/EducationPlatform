import bcrypt from "bcrypt"
import { registrationUserDB, getUserByEmailDB } from "../repository/api.repository";
import { iUser } from '../interfaces/interfaces'


async function registrationUser(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const foundUser = await getUserByEmailDB(email)
    if (foundUser.length) throw new Error('user already exsist')
    const salt = 10;
    const hashPwd = await bcrypt.hash(pwd, salt)
    const data = await registrationUserDB(name, surname, email, hashPwd)
    if (!data.length) throw new Error('no data')

    return data
}

async function authUser(email: string, pwd: string): Promise<iUser[]> {
    const user = await getUserByEmailDB(email)
    if(!user.length) throw new Error('email is not found')
    if(!(await bcrypt.comare(pwd,user[0].pwd))) throw new Error('error');
    return user
}

export { registrationUser, authUser }