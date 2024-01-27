import { authUser, registrationUser } from '../../service/api.service'
import * as repository from '../../repository/api.repository'
import bcrypt from "bcrypt"


describe('authUser', () => {
    test('autharisation function test', async () => {
        const repFunction = jest.spyOn(repository, 'getUserByEmailDB');
        repFunction.mockResolvedValue([])
        try {
            await authUser('drozd.d.rus@gmail.com', '123852')
        } catch (error: any) {
            expect(error.message).toBe('email is not found')
        }
    })

    test('authorization function test2', async () => {
        const repFunction = jest.spyOn(repository, 'getUserByEmailDB');
        repFunction.mockResolvedValue([]);

        try {
            await authUser('drozd.d.rus@gmail.com', '34567890');
        } catch (error: any) {
            expect(error.message).toBe('email is not found');
        }
        expect(repFunction).toHaveBeenCalledWith('drozd.d.rus@gmail.com');
    });

})