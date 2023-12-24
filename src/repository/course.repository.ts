import pool from '../db'
import { iCourses } from '../interfaces/interfaces'

async function getAllCoursesDB(): Promise<iCourses[]>{
    const client = await pool.connect()
    const sql = 'select * from courses'
    const data = (await client.query(sql)).rows
    return data
}

async function getCoursesByIdDB(id:number): Promise<iCourses[]>{
    const client = await pool.connect()
    const sql = 'select * from courses where id = $1'
    const data = (await client.query(sql,[1])).rows
    return data
}

export {getAllCoursesDB, getCoursesByIdDB}