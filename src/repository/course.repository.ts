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

async function createCoursesDB(name: string, surname: string, email: string, pwd: string): Promise<iCourses[]>{
    const client = await pool.connect()
    const sql = `insert into courses(name, surname, email, pwd ) values ($1,$2,$3,$4) returning *`

    const data = (await client.query(sql,[name, surname, email, pwd ])).rows
    return data
}

export {getAllCoursesDB, getCoursesByIdDB, createCoursesDB}