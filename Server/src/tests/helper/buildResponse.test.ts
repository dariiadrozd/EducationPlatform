import buildResponse from "../../helper/buildResponse";
import { Response } from 'express';

describe('test buildResponse function', () => {
    test('test success', () => {
        const mResponse: Response = {
            status: jest.fn(),
            send: jest.fn(),
        };
        buildResponse(mResponse, 200, 'success')
        expect(mResponse.status).toHaveBeenCalled();
        expect(mResponse.status).toHaveBeenCalledWith(200)
        expect(mResponse.send).toHaveBeenCalled()
        expect(mResponse.send).toHaveBeenCalledWith('success')
    })
})