import { addStrings } from './add-strings'

test('Adds equal length inputs correctly', () => {
    expect(addStrings('123', '456')).toBe('579')
})

test('Adds unequal length inputs correctly', () => {
    expect(addStrings('23', '456')).toBe('479')
})

test('Adds 0s correctly', () => {
    expect(addStrings('0', '0')).toBe('0')
})

test('Handles carrying correctly', () => {
    expect(addStrings('1', '9')).toBe('10')
    expect(addStrings('999', '999')).toBe('1998')
})
