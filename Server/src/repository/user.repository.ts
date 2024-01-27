import pool from "../db";
import { iUser } from "../interfaces/interfaces";

async function getAllUserDB(): Promise<iUser[]> {
  const clien = await pool.connect();
  const sql = "select * from users";
  const data = (await clien.query(sql)).rows;
  return data;
}

async function getUserByIdDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();
  const sql = "select * from users where id=$1";
  const data = (await client.query(sql, [id])).rows;
  return data;
}

async function createUserDB(name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const client = await pool.connect()
  try {
    await client.query('BEGIN');

    const sql = `insert into users (name,surname,email,pwd) values ($1,$2,$3,$4) returning *`

    const data = (await client.query(sql, [name, surname, email, pwd])).rows;
    await client.query('COMMIT')
    return data
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`createUserDB: ${error.message}`);

    return [];
  }
}

async function updateUserDB(id: number, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    const sql = `update users set name =$1, surname =$2, email =$3, pwd =$4 where id =$5 returning *`;

    const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;
    await client.query('COMMIT');
    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`updateUserDB: ${error.message}`);

    return [];
  }
}

async function deleteUserDB(id: number): Promise<iUser[]> {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');
    const sql = `delete from users where id = $1 returning *`;
    const data = (await client.query(sql, [id])).rows;
    await client.query('COMMIT');

    return data;
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.log(`deleteUser: ${error.message}`);

    return [];
  }
}

export { getAllUserDB, getUserByIdDB, updateUserDB, deleteUserDB, createUserDB }