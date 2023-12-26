import express, { Request, Response } from "express";
import { } from '../service/course.service'
import buildResponse from "../helper/buildResponse";
import { getAllCourses, getCoursesById, createCourses } from "../service/course.service";

const route = express.Router()

route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllCourses()
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const data = await getCoursesById(id)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, surname, email, pwd  } = req.body
        const data = await createCourses(name, surname, email, pwd )
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

export default route