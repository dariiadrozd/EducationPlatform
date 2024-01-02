import { createCourses, getAllCourses, getCoursesById, updateCourse } from "../../service/course.service";
import * as repository from '../../repository/course.repository'
import exp from "constants";

describe('getAllCourses', () => {
    test('test1', async () => {
        const repFunction = jest.spyOn(repository, 'getAllCoursesDB')
        repFunction.mockResolvedValue([
            { id: 1, course: 'TS' },
            { id: 2, course: 'JS' },
        ])
        const result = await getAllCourses()

        expect(repFunction).toHaveBeenCalled()
        expect(result[0].id).toBe(1);
        expect(result[1].id).toBe(2);
        expect(result[0].course).toBe('TS');
        expect(result[1].course).toBe('JS');
        expect(result).toEqual([
            { id: 1, course: 'TS' },
            { id: 2, course: 'JS' },
        ])
        expect(result).toHaveLength(2)
    })
    test('test2', async () => {
        const repFunction = jest.spyOn(repository, 'getAllCoursesDB')
        repFunction.mockResolvedValue([])
        try {
            await getAllCourses()
        } catch (error: any) {
            expect(error.message).toBe('data is empty')
        }
    })
})

describe('getCoursesById', () => {
    test('test success', async () => {
        const repFunction = jest.spyOn(repository, 'getCoursesByIdDB')
        repFunction.mockResolvedValue([
            { id: 1, course: 'TS' }
        ]);
        const result = await getCoursesById(1);
        expect(result[0].id).toBe(1);
        expect(repFunction).toHaveBeenCalled();
        expect(result).toHaveLength(1);
        expect(result).toEqual([{ id: 1, course: 'TS' }]);
    })

    test('test error', async () => {
        const repFunction = jest.spyOn(repository, 'getCoursesByIdDB')
        repFunction.mockResolvedValue([])
        try {
            await getCoursesById(2)
        } catch (error: any) {
            expect(error.message).toBe('')
        }
    })
})

describe('createCourses', () => {
    test('test create success', async () => {
        const repFunction = jest.spyOn(repository, 'createCoursesDB')
        repFunction.mockResolvedValue([
            { id: 1, course: 'TS' },
        ])
        const result = await createCourses('TS')
        expect(repFunction).toHaveBeenCalled();
        expect(result[0].course).toBe('TS')
        expect(result).toEqual([{ id: 1, course: 'TS' }])
        expect(result).toHaveLength(1)
    })
    test('test create error', async () => {
        const repFunction = jest.spyOn(repository, 'getAllCoursesDB')
        repFunction.mockResolvedValue([])
        try {
            await createCourses('TS')
        } catch (error: any) {
            expect(error.message).toBe('data is empty')
        }
    })
})

describe('updateCourse',()=>{

    test('test update error', async () => {
        const repFunction = jest.spyOn(repository, 'updateCourseDB')
        repFunction.mockResolvedValue([])
        try {
            await createCourses('TS')
        } catch (error: any) {
            expect(error.message).toBe('data is empty')
        }
    })
})

