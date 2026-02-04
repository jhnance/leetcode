import { validPalindrome } from './valid-palindrome-ii'

test('Returns true for a palindrome', () => {
    expect(validPalindrome('aba')).toBe(true)
})

test('Returns true for a string that can be made into a palindrome by removing one character', () => {
    expect(validPalindrome('abca')).toBe(true)
    expect(validPalindrome('abbbb')).toBe(true)
})

test('Returns false for a string that is not currently a palindrome, and cannot be made into one by removing one character', () => {
    expect(validPalindrome('xyza')).toBe(false)
    expect(validPalindrome('xyz')).toBe(false)
    expect(validPalindrome('xyyyz')).toBe(false)
    expect(validPalindrome('xyazyyx')).toBe(false)
})
