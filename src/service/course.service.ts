import { getAllCoursesDB, getCoursesByIdDB } from "../repository/course.repository";
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

export { getAllCourses, getCoursesById }