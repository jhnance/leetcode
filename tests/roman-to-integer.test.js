import { romanToInt } from '../strings/roman-to-integer'

test('Returns the correct integer (no subtraction)', () => {
    expect(romanToInt('III')).toBe(3)
    expect(romanToInt('XIII')).toBe(13)
    expect(romanToInt('MDCLXVI')).toBe(1666)
})

test('Returns the correct integer (with subtraction)', () => {
    expect(romanToInt('IV')).toBe(4)
    expect(romanToInt('XIV')).toBe(14)
    expect(romanToInt('LIX')).toBe(59)
    expect(romanToInt('XC')).toBe(90)
    expect(romanToInt('CCXC')).toBe(290)
    expect(romanToInt('CDX')).toBe(410)
    expect(romanToInt('CMXIII')).toBe(913)
})
