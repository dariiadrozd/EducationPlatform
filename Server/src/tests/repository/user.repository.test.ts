import { getAllUserDB } from '../../repository/user.repository'

const mClient = {
    query: jest.fn(),
};

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => mClient) };
    return { Pool: jest.fn(() => pool) }
})

afterEach(() => {
    jest.clearAllMocks()
});

describe('getAllUserDB test', () => {
    test('return success', async () => {
        mClient.query.mockResolvedValue({ rows: [{ id: 1, user: 'Darya' }] });
        const result = await getAllUserDB()
        expect(mClient.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, user: 'Darya' }]);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(1);
    })
})