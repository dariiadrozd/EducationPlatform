import { connect } from 'http2';
import { getAllCoursesDB } from '../../repository/course.repository'
import exp from 'constants';

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

describe('test getAllCoursesDB function', () => {
    test('should return success', async () => {
        mClient.query.mockResolvedValue({ rows: [{ id: 1, course: 'TS' }] });
        const result = await getAllCoursesDB();
        expect(mClient.query).toHaveBeenCalled();
        expect(result).toEqual([{ id: 1, course: 'TS' }]);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(1);
        expect(result[0].course).toBe('TS');
    });
})