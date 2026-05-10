import { firstBadVersion } from '../arrays/first-bad-version'

test('Identifies the correct version', () => {
    let check = firstBadVersion((n) => {
        return n >= 3
    })
    expect(check(5)).toBe(3)

    check = firstBadVersion((n) => {
        return n >= 1
    })
    expect(check(1)).toBe(1)
})
