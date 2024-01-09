import {} from '../../repository/api.repository'

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

