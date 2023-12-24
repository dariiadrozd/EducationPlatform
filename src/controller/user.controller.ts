import express, { Request, Response } from 'express';
import { getAllUser, getUserById} from '../service/user.service';
import buildResponse from '../helper/buildResponse';

const route = express.Router();

route.get('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await getAllUser();
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

route.get('/:id', async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);
    buildResponse(res, 200, data);
  } catch (error: any) {
    buildResponse(res, 404, error.message);
  }
});

export default route;
