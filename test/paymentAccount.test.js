import { sumExtraHours, calcDiscounts } from '..';

describe('payment accounts tests', () => {
  it('should return sum of extra hours', () => {
    const expected = 2500;
    const returned = sumExtraHours(2000, 500);
    expect(returned).toBe(expected);
  });

  it('should discount value from salary', () => {
    const expected = 2300;
    const returned = calcDiscounts(2500, 200);
    expect(returned).toBe(expected);
  });
});
