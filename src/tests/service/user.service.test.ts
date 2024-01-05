import { } from '../../service/user.service'
import * as repository from '../../repository/user.repository'

describe('getAllUser', () => {
    test('test1 getAllUser function', async () => {
        const repFunction = jest.spyOn(repository, 'getAllUserDB')
        repFunction.mockResolvedValue([{ id: 1, name: 'User1', surname: 'Surname1', email: 'user1@example.com', pwd: 'hashed_password1' },
        { id: 2, name: 'User2', surname: 'Surname2', email: 'user2@example.com', pwd: 'hashed_password2' },
        { id: 2, name: 'User2', surname: 'Surname2', email: 'user2@example.com', pwd: 'hashed_password2' }
        ])
    })
})