import { getAllCoursesDB, getCoursesByIdDB, createCoursesDB, deleteCourseByIdDB, updateCourseDB } from "../repository/course.repository";
import { iCourses } from "../interfaces/interfaces";

async function getAllCourses(): Promise<iCourses[]> {
    const data = await getAllCoursesDB()
    if (!data.length) throw new Error('data is empty')
    return data;
}

async function getCoursesById(id: number): Promise<iCourses[]> {
    const data = await getCoursesByIdDB(id)
    if (!data.length) throw new Error('')
    return data
}

async function createCourses(course: string): Promise<iCourses[]> {
    const data = await createCoursesDB(course)
    if (!data.length) throw new Error('data is empty')
    return data
}

async function updateCourse(id: number, course: string): Promise<iCourses[]> {
    const data = await updateCourseDB(id, course);
    if (!data.length) throw new Error('data is empty');
    return data;
}

async function deleteCourseById(id: number): Promise<iCourses[]> {
    const data = await deleteCourseByIdDB(id);
    if (!data.length) throw new Error('data is empty');
    return data;
}

export { getAllCourses, getCoursesById, createCourses, deleteCourseById, updateCourse }