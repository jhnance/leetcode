import { longestCommonPrefix } from './longest-common-prefix'

test('Determines the correct prefix', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    expect(longestCommonPrefix(['flower', 'ow', 'blight'])).toBe('')
    expect(longestCommonPrefix(['flower', 'flower', 'flower'])).toBe('flower')
    expect(longestCommonPrefix(['flowery', 'flowers', 'flowers'])).toBe(
        'flower',
    )
    expect(longestCommonPrefix([])).toBe('')
})
