import { getUserByEmailDB, registrationUserDB } from '../../repository/api.repository'

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

describe('test getUserByEmailDB function', () => {
    test('return success', async () => {
        mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }] });
        const result = await getUserByEmailDB('drozd.d.rus@gmail.com');
        expect(mClient.query).toHaveBeenCalled();
        expect(result[0].id).toBe(1);
        expect(result[0].name).toBe('Darya');
        expect(result[0].surname).toBe('Drozd')
        expect(result[0].email).toBe('drozd.d.rus@gmail.com');
        expect(result[0].pwd).toBe('123852');
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }])
    })
})

describe('test registrationUserDB function', () => {
    test('return success', async () => {
        mClient.query.mockResolvedValue({ rows: [{ id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }] });
        const result = await registrationUserDB('Darya', 'Drozd', 'drozd.d.rus@gmail.com', '123852');
        expect(mClient.query).toHaveBeenCalled();
        expect(result[0].id).toBe(1);
        expect(result[0].name).toBe('Darya');
        expect(result[0].surname).toBe('Drozd')
        expect(result[0].email).toBe('drozd.d.rus@gmail.com');
        expect(result[0].pwd).toBe('123852');
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: 1, name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' }])
    })
})