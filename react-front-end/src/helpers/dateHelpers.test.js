import { formatDate, currentDate, formatDateToISO } from './dateHelpers';
import { beforeEach } from '@testing-library/react';

describe('formatDate', () => {
  const dateStr = "2021-04-22T07:00:00.000Z";
  it('returns a string', () => {
    const result = formatDate(dateStr);
    expect(typeof result).toBe('string');
  });

  it('returns the first three letter of the week day name', () => {
    const dateStr = "2021-04-22T07:00:00.000Z";
    const result = formatDate(dateStr);
    expect(result).toEqual(expect.stringContaining('Thu'));
  });

  it('returns the first three letter of the month name', () => {
    const dateStr = "2021-04-22T07:00:00.000Z";
    const result = formatDate(dateStr);
    expect(result).toEqual(expect.stringContaining('Apr'));
  });

  it('returns the two digit day of the month', () => {
    const dateStr = "2021-04-22T07:00:00.000Z";
    const result = formatDate(dateStr);
    expect(result).toEqual(expect.stringContaining('22'));
  });

  it('returns the four digit year', () => {
    const dateStr = "2021-04-22T07:00:00.000Z";
    const result = formatDate(dateStr);
    expect(result).toEqual(expect.stringContaining('2021'));
  });

  it('does not return the timezone string', () => {
    const dateStr = "2021-04-22T07:00:00.000Z";
    const result = formatDate(dateStr);
    expect(result).toEqual(expect.not.stringContaining('T07:00:00.000Z'));
  });

  it('does not return the original date string', () => {
    const dateStr = "2021-04-22T07:00:00.000Z";
    const result = formatDate(dateStr);
    expect(result).toEqual(expect.not.stringContaining('2021-04-22T07:00:00.000Z'));
  });
});
