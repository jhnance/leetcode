import { minRemoveToMakeValid } from '../strings/minimum-remove-valid-parens'

test('Returns the empty string for a completely invalid input', () => {
    expect(minRemoveToMakeValid('))((')).toBe('')
})

test('Returns the input string if it is completely valid', () => {
    const input = '()'
    expect(minRemoveToMakeValid(input)).toBe(input)
})

test('Removes the appropriate number of invalid parentheses', () => {
    expect(minRemoveToMakeValid('lee(t)code)')).toBe('lee(t)code')
    expect(minRemoveToMakeValid('lee(t)code)(')).toBe('lee(t)code')
})
