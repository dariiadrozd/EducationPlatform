import { getAllCoursesDB, getCoursesByIdDB, createCoursesDB } from "../repository/course.repository";
import { iCourses } from "../interfaces/interfaces";

async function getAllCourses(): Promise <iCourses[]>{
    const data = await getAllCoursesDB()
    if(!data.length) throw new Error('data is empty')
    return data;
}

async function getCoursesById(id:number): Promise<iCourses[]>{
    const data = await getCoursesByIdDB(id)
    if(!data.length) throw new Error('')
    return data
}

async function createCourses(name: string, surname: string, email: string, pwd: string): Promise<iCourses[]>{
    const data = await createCoursesDB(name, surname, email, pwd )
    if(!DataTransfer.length) throw new Error ('data is empty')
    return data
}

export { getAllCourses, getCoursesById, createCourses }