import { validWordAbbreviation } from './valid-word-abbreviation'

test('Fully abbreviated word', () => {
    expect(validWordAbbreviation('abc', '3')).toBe(true)
    expect(validWordAbbreviation('internationalization', 'i12iz4n')).toBe(true)
    expect(validWordAbbreviation('internationalization', 'i5a11o1')).toBe(true)
})

test('Does not allow leading zeros in abbreviations', () => {
    expect(validWordAbbreviation('hi', '02')).toBe(false)
})

test('Partially abbreviated word, correct', () => {
    expect(validWordAbbreviation('abcdef', 'abc2f')).toBe(true)
    expect(validWordAbbreviation('apple', 'a2e')).toBe(false)
})

test('Incorrectly abbreviated word', () => {
    expect(validWordAbbreviation('abcdef', 'abc2def')).toBe(false)
    expect(validWordAbbreviation('apple', 'a2e')).toBe(false)
    expect(validWordAbbreviation('hi', '2i')).toBe(false)
})

test('Abbreviated word is longer than the word itself', () => {
    expect(validWordAbbreviation('abcdef', 'abcdef2')).toBe(false)
})
