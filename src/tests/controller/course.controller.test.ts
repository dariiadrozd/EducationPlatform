import request from "supertest";
import app from '../../app'
import { log } from "console";
let id;

test('post', async () => {
    const res = await request(app).post('/course').send({course:'ts'});

    id = res.body[0].id;
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
})

test('get', async ()=>{
    const res = await request(app).get('/course')
    
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0)
})

test('get/:id', async()=>{
    const res = await request(app).get(`/course/${id}`)

    expect(res.statusCode).toBe(200)
    expect(res.body.length).toBe(1);
})

test('put', async()=>{
    const res = await request(app).put(`/course/${id}`).send({course:'js'})

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
})


test('delete', async()=>{
    const res = await request(app).delete(`/course/${id}`)
    
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1)
})

