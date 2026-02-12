import { intToRoman } from './integer-to-roman'

test('Correctly converts integers to their roman numeral representations', () => {
    expect(intToRoman(1000)).toBe('M')
    expect(intToRoman(2000)).toBe('MM')
    expect(intToRoman(3000)).toBe('MMM')
    expect(intToRoman(3555)).toBe('MMMDLV')
    expect(intToRoman(3556)).toBe('MMMDLVI')
    expect(intToRoman(3756)).toBe('MMMDCCLVI')
    expect(intToRoman(3888)).toBe('MMMDCCCLXXXVIII')
    expect(intToRoman(3949)).toBe('MMMCMXLIX')
    expect(intToRoman(982)).toBe('CMLXXXII')
})

test('Does not attempt to correctly handle cases outside the given constraints', () => {
    expect(intToRoman(4000)).toBe('MMMM')
})
