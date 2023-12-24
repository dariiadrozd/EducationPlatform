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

export { getAllUserDB, getUserByIdDB}