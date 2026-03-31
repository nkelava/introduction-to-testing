import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

describe('logger', () => {
  describe('development', () => {
    it('logs to the console in development mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Development log.', {
        mode: 'development',
      });

      expect(logSpy).toHaveBeenCalledWith('Development log.');
    });
  });

  describe('production', () => {
    it('should not call console in production mode', () => {
      const logSpy = vi.spyOn(console, 'log');

      log('Production log.', {
        mode: 'production',
      });

      expect(logSpy).not.toHaveBeenCalled();
    });
  });
});
