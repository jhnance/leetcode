import { isPalindrome } from './valid-palindrome'

test('Returns true for valid palindromes', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
})

test('Returns false for strings that do not contain valid palindromes', () => {
    expect(isPalindrome(':racecars:')).toBe(false)
    expect(isPalindrome(':racezcar:')).toBe(false)
})

test('Returns true for the empty string', () => {
    expect(isPalindrome('')).toBe(true)
    expect(isPalindrome(' ')).toBe(true)
    expect(isPalindrome(' :  ')).toBe(true)
})
