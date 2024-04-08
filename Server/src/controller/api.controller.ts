import express, { Request, Response } from 'express';
import buildResponse from "../helper/buildResponse";
import { registrationUser, authUser } from '../service/api.service'
import createToken from '../helper/jwt'


const route = express.Router();

route.post('/reg', async (req: Request, res: Response) => {
    try {
        const { name, surname, email, pwd } = req.body
        const data = await registrationUser(name, surname, email, pwd)
        buildResponse(res, 200, data)
    } catch (error: any) {
        buildResponse(res, 404, error.message)
    }
})

route.post('/auth', async (req: Request, res: Response) => {
    try {
        const { email, pwd } = req.body;
        const data = await authUser(email, pwd);
        const token = createToken(data);
        res.cookie('Bearer', token, {
            httpOnly: false,
            secure: true,
        });
        buildResponse(res, 200, data);
    } catch (error: any) {
        buildResponse(res, 404, error.message);
    }
});

export default route;


