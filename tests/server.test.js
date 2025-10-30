const request = require('supertest');
const app = require('../server'); 

describe('GET /', () => {
    it('should return success message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toContain('CI/CD Automation');
    });
});
