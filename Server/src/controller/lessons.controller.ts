import express, { Request, Response } from 'express'
import buildResponse from '../helper/buildResponse'
import { getAllLessons, createLessons, getByIdLessons, updateLessons, deleteLessons } from '../service/lesson.service';

const route = express.Router();
route.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await getAllLessons()
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, course_id } = req.body
        const data = await createLessons(title, course_id)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const data = await getByIdLessons(id)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { title, course_id } = req.body;
        const data = await updateLessons(id, title, course_id);

        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

route.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
      const { id } = req.params;
      const data = await deleteLessons(id);
  
      buildResponse(res, 200, data);
    } catch (error: any) {
      buildResponse(res, 404, error.message);
    }
  });

export default route