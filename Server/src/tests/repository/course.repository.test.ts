import { connect } from 'http2';
import { createCoursesDB, deleteCourseByIdDB, getAllCoursesDB, getCoursesByIdDB, updateCourseDB } from '../../repository/course.repository'
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

describe('test getCoursesByIdDB function', ()=>{
    test('return success', async ()=>{
        mClient.query.mockResolvedValue({rows: [{ id: 1, course: 'TS' }]})
        const result = await getCoursesByIdDB(1)
        expect(result).toEqual([{ id: 1, course: 'TS' }]);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(1);
        expect(result[0].course).toBe('TS');
    })
})

describe('test createCoursesDB function', ()=>{
    test('return success', async ()=>{
        mClient.query.mockResolvedValue({rows: [{ id: 1, course: 'TS' }]})
        const result = await createCoursesDB('TS')
        expect(result).toEqual([{ id: 1, course: 'TS' }]);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(1);
        expect(result[0].course).toBe('TS');
    })
})

describe('test updateCourseDB function', ()=>{
    test('return success', async ()=>{
        mClient.query.mockResolvedValue({rows: [{ id: 2, course: 'JS' }]})
        const result = await updateCourseDB(2,'JS')
        expect(result).toEqual([{ id: 2, course: 'JS' }]);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(2);
        expect(result[0].course).toBe('JS');
    })
})

describe('test deleteCourseByIdDB function', ()=>{
    test('return success', async ()=>{
        mClient.query.mockResolvedValue({rows: [{ id: 2}]})
        const result = await deleteCourseByIdDB(1)
        expect(result).toEqual([{ id: 2}]);
        expect(result.length).toBe(1);
        expect(result[0].id).toBe(2);
    })
})
