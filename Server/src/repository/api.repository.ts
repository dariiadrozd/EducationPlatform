import pool from '../db'
import { iUser } from '../interfaces/interfaces';

async function getUserByEmailDB(email: string): Promise<iUser[]> {
    
    const client = await pool.connect();

    const sql = `select * from users where email = $1`

    return (await client.query(sql, [email])).rows
}

async function registrationUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
    const client = await pool.connect();
    try {
        await client.query('BEGIN')
        const sql = `insert into users (name,surname,email,pwd) values
        ($1, $2, $3, $4) returning *`
        const data = (await client.query(sql, [name, surname, email, pwd])).rows
        await client.query('COMMIT')

        return data
    } catch (error: any) {
        await client.query('ROLLBACK')
        console.log(`registrationUser:${error.message}`);

        return []
    }
    finally {
        client.release();
      }
}

export { getUserByEmailDB, registrationUserDB }