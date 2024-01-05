import { deleteUser, getAllUser, getUserById, updateUser } from '../../service/user.service'
import * as repository from '../../repository/user.repository'
import exp from 'constants'

describe('getAllUser', () => {
    test('test1 getAllUser function', async () => {
        const repFunction = jest.spyOn(repository, 'getAllUserDB')
        repFunction.mockResolvedValue([
            { id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' },
            { id: 2, name: 'Artur', surname: 'Svguoqe', email: 'artursvn@gmail.com', pwd: '4567894' }
        ])
        const result = await getAllUser()

        expect(repFunction).toHaveBeenCalled()
        expect(result[0].id).toBe(1);
        expect(result[1].id).toBe(2);
        expect(result).toEqual([
            { id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' },
            { id: 2, name: 'Artur', surname: 'Svguoqe', email: 'artursvn@gmail.com', pwd: '4567894' }
        ])
        expect(result).toHaveLength(2)
    })
    test('test2 getAllUser function', async () => {
        const repFunction = jest.spyOn(repository, 'getAllUserDB')
        repFunction.mockResolvedValue([])
        try {
            await getAllUser();
        } catch (error: any) {
            expect(error.message).toBe('error')
        }
    })
})

describe('getUserById', () => {
    test('test getUserById function success', async () => {
        const repFunction = jest.spyOn(repository, 'getUserByIdDB')
        repFunction.mockResolvedValue([
            { id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }
        ])
        const result = await getUserById(1);
        expect(result[0].id).toBe(1);
        expect(repFunction).toHaveBeenCalled()
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }])
    })

    test('test error', async () => {
        const repFunction = jest.spyOn(repository, 'getUserByIdDB')
        repFunction.mockResolvedValue([])
        try {
            await getUserById(2)
        } catch (error: any) {
            expect(error.message).toBe('')
        }
    })

    describe('updateUser', () => {

        test('test updateUser function', async () => {
            const repFunction = jest.spyOn(repository, 'updateUserDB')
            repFunction.mockResolvedValue([])
            try {
                await updateUser(1, 'Darya', 'Drozd', 'darya@gmail.com', '1238552')
            } catch (error: any) {
                expect(repFunction).toHaveBeenCalled();
                expect(error.message).toBe('error')
            }
        })
    })
})

describe('deleteUser', () => {

    test('test deleteUser function', async () => {
        const repFunction = jest.spyOn(repository, 'deleteUserDB')
        repFunction.mockResolvedValue([
            { id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }
        ])
        const result = await deleteUser(1)
        expect(result[0].id).toBe(1)
        expect(repFunction).toHaveBeenCalled()
        expect(result).toHaveLength(1)
        expect(result).toEqual([{ id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }])
    })
})