import request from "supertest";
import app from '../../app';

test('reg', async () => {
  try {
    const res = await request(app).post('/api').send({ name: 'Darya', surname: 'Drozd', email: 'drozd.d.rus@gmail.com', pwd: '123852' });

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  } catch (error: any) {
    expect(error.message).toBeTruthy();
  }
});

test('auth', async () => {
  try {
    const res = await request(app).post('/api').send({ email: 'drozd.d.rus@gmail.com', pwd: '123852' });

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  } catch (error: any) {
    expect(error.message).toBeTruthy();
  }

})