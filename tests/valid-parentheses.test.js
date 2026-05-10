import { isValid } from '../arrays/valid-parentheses'

test('Returns true for a string with matched, nested parens', () => {
    const input = '({[]})'
    const result = isValid(input)
    expect(result).toBe(true)
})

test('Returns true for a string with matched, unnested parens', () => {
    const input = '()[]{}'
    const result = isValid(input)
    expect(result).toBe(true)
})

test('Returns false for a string that contains only opening parens', () => {
    const input = '('
    const result = isValid(input)
    expect(result).toBe(false)
})

test('Returns false for a string that contains only closing parens', () => {
    const input = ')'
    const result = isValid(input)
    expect(result).toBe(false)
})

test('Returns false for a string with mismatched parens', () => {
    const input = '({]})'
    const result = isValid(input)
    expect(result).toBe(false)
})

test('Returns false for an input that begins with a closing paren', () => {
    const input = ']({]})'
    const result = isValid(input)
    expect(result).toBe(false)
})

test('Invalid string throws', () => {
    const input = '({[bla]})'
    expect(() => isValid(input)).toThrowError(
        'Invalid input; it must contain only ["(", "{", "[", "]", "}", ")"]',
    )
})
