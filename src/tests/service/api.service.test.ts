import {registrationUser} from '../../service/api.service'
import * as repository from '../../repository/api.repository'

describe('registrationUser', () => {
    test('test registration function', async () => {
        const repFunction = jest.spyOn(repository, 'registrationUserDB');
        repFunction.mockResolvedValue([
            { id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }
        ]);
        const res = await registrationUser('Darya', 'Drozd', 'drozd.d.rus@gmail.com', '123852');

        expect(res).toEqual([
            { id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }
        ]);
        expect(repFunction).toHaveBeenCalled();
    });

    test('test registration 2', async () => {
        const repFunction = jest.spyOn(repository, 'registrationUserDB');
        repFunction.mockResolvedValue([]);

        try {
            await registrationUser('Darya', 'Drozd', 'drozd.d.rus@gmail.com', '123852');
        } catch (error: any) {
            expect(error.message).toBe('user already exists');
        }
    });
});