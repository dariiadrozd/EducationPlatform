import pool from '../db'
import { iLessons } from '../interfaces/interfaces'

async function getAllLessonsDB(): Promise<iLessons[]> {
    const client = await pool.connect()
    const sql = `select * from lessons`

    const data = (await client.query(sql)).rows
    return data
}

async function createLessonsDB(title: string, course_id: number): Promise<iLessons[]> {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = `insert into lessons(title,course_id) values($1,$2) returning *`
        const data = (await client.query(sql, [title, course_id])).rows;
        await client.query('COMMIT')
        return data
    } catch (error: any) {
        console.log(`createLessons:${error.message}`);
        await client.query('ROLLBACK');
        return []
    }
}

async function getByIdLessonsDB(id: number): Promise<iLessons[]> {
    const client = await pool.connect()

    const sql = `select * from lessons where id=$1`
    const data = (await client.query(sql,[id])).rows; 

    return data
}

async function updateLessonsDB(id:number, title: string, course_id: number): Promise<iLessons[]> {
    const client = await pool.connect()
    try {
        await client.query('BEGIN')
        const sql = `update lessons set title=$1, course_id=$2 where id = $3 returning *`
        const data = (await client.query(sql, [title, course_id, id])).rows;
        await client.query('COMMIT')
        return data
    } catch (error: any) {
        console.log(`updateLessonsDB:${error.message}`);
        await client.query('ROLLBACK');
        return []
    }
}

async function deleteLessonsDB(id: number): Promise<iLessons[]> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const sql = `delete from lessons where id=$1 returning *`;
      const data = (await client.query(sql, [id])).rows;
      await client.query('COMMIT');
      return data;
    } catch (error: any) {
      await client.query('ROLLBACK');
      console.log(`deleteLessonsDB:${error.message}`);
      return [];
    }
    finally {
      client.release();
    }
  }

export { getAllLessonsDB, createLessonsDB, getByIdLessonsDB, updateLessonsDB, deleteLessonsDB }