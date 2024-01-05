import { authUser, registrationUser } from '../../service/api.service'
import * as repository from '../../repository/api.repository'
import bcrypt from "bcrypt"


describe('registrationUser', () => {

    test('test registration', async () => {
        const repFunction = jest.spyOn(repository, 'registrationUserDB');
        repFunction.mockResolvedValue([{id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852'}]);

        const mockHash = jest.spyOn(bcrypt, 'hash')
        mockHash.mockResolvedValue('bgw345fgy')
        
        const result = await registrationUser('Darya', 'Drozd', 'drozd.d.rus@gmail.com', '123852');
        
        expect(repFunction).toHaveBeenCalled();
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe(1);
        expect(result[0].name).toBe('Darya');
        expect(result).toEqual([{id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852'}]);
        expect(mockHash).toHaveBeenCalled()
    });
});

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