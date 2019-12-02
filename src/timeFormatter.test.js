import { timeFormatter } from './timeFormatter';

describe('When formatting time', () => {

  it('should return 00:00 for 0', () => {
    expect(timeFormatter(0)).toBe('00:00');
  });

  it('should return 00:59 for 59', () => {
    expect(timeFormatter(10)).toBe('00:10');
  });

  it('should return 01:00 for 60', () => {
    expect(timeFormatter(60)).toBe('01:00');
  });

});