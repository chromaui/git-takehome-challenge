import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { app } from './server';
import type { Server } from 'http';

describe('Backend API', () => {
  let server: Server;
  const TEST_PORT = 3002;

  beforeAll(() => {
    // Start server on a different port for testing
    server = app.listen(TEST_PORT);
  });

  afterAll(async () => {
    // Close the server after all tests
    await new Promise<void>((resolve) => {
      server.close(() => resolve());
    });
  });

  describe('GET /health', () => {
    it('should return status 200', async () => {
      const response = await fetch(`http://localhost:${TEST_PORT}/health`);
      expect(response.status).toBe(200);
    });

    it('should return JSON with status ok', async () => {
      const response = await fetch(`http://localhost:${TEST_PORT}/health`);
      const data = await response.json();
      expect(data).toEqual({ status: 'ok' });
    });

    it('should return JSON content type', async () => {
      const response = await fetch(`http://localhost:${TEST_PORT}/health`);
      const contentType = response.headers.get('content-type');
      expect(contentType).toContain('application/json');
    });
  });
});
