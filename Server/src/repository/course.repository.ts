import pool from '../db'
import { iCourses } from '../interfaces/interfaces'

async function getAllCoursesDB(): Promise<iCourses[]> {
    const client = await pool.connect()
    const sql = 'select * from courses'
    const data = (await client.query(sql)).rows
    return data
}

async function getCoursesByIdDB(id: number): Promise<iCourses[]> {
    const client = await pool.connect()
    const sql = 'select * from courses where id = $1'
    const data = (await client.query(sql, [1])).rows
    return data
}

async function createCoursesDB(course: string): Promise<iCourses[]> {
    const client = await pool.connect()
    const sql = `insert into courses(course) values ($1) returning *`

    const data = (await client.query(sql, [course])).rows
    return data
}
async function updateCourseDB(id: number, course: string): Promise<iCourses[]> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const sql = 'update courses set course=$1 where id=$2 returning*';
      const data = (await client.query(sql, [course, id])).rows;
      await client.query('COMMIT');
      return data;
    } catch (error: any) {
      await client.query('ROLLBACK');
      console.log(`updateCourseDB:${error.message}`);
      return [];
    }
  }
  
  async function deleteCourseByIdDB(id: number): Promise<iCourses[]> {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const sql = `delete from courses where id=$1 returning *`;
      const data = (await client.query(sql, [id])).rows;
      await client.query('COMMIT');
      return data;
    } catch (error: any) {
      await client.query('ROLLBACK');
      console.log(`deleteCourseByIdDB:${error.message}`);
      return [];
    }
    finally {
      client.release();
    }
  }
  

export { getAllCoursesDB, getCoursesByIdDB, createCoursesDB, updateCourseDB, deleteCourseByIdDB }