import { getAllLessonsDB, createLessonsDB, getByIdLessonsDB, updateLessonsDB, deleteLessonsDB } from "../repository/lessons.repository"
import { iLessons } from '../interfaces/interfaces'

async function getAllLessons(): Promise<iLessons[]> {
    const data = await getAllLessonsDB()
    if (!data.length) throw new Error('method get empty')
    return data
}

async function createLessons(title:string, course_id:number): Promise<iLessons[]> {
    const data = await createLessonsDB(title, course_id)
    if (!data.length) throw new Error('method post empty')
    return data
}

async function getByIdLessons(id:number): Promise<iLessons[]>{
    const data = await getByIdLessonsDB(id)
if(!data.length) throw new Error('method get by id is empty')
return data
}

async function updateLessons(id:number, title:string, course_id:number): Promise<iLessons[]>{
    const data = await updateLessonsDB(id, title, course_id)
if(!data.length) throw new Error('method update is empty')
return data
}

async function deleteLessons(id: number): Promise<iLessons[]> {
    const data = await deleteLessonsDB(id);
    if (!data.length) throw new Error('data is empty');
    return data;
}

export { getAllLessons, createLessons, getByIdLessons, updateLessons, deleteLessons }