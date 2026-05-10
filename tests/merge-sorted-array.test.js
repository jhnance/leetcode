import { merge } from '../arrays/merge-sorted-array'

test('Correctly merges arrays when all elements are positive', () => {
    // all positive
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [1, 2, 3]
    expect(merge(nums1, 3, nums2, 3)).toEqual([1, 1, 2, 2, 3, 3])
})

test('Correctly merges arrays when nums1 contains all negative values', () => {
    const nums1 = [-3, -2, -1, 0, 0, 0]
    const nums2 = [1, 2, 3]
    expect(merge(nums1, 3, nums2, 3)).toEqual([-3, -2, -1, 1, 2, 3])
})

test('Correctly merges arrays when nums1 contains a mix of positive and negative values', () => {
    const nums1 = [-3, -2, 1, 0, 0, 0]
    const nums2 = [1, 2, 3]
    expect(merge(nums1, 3, nums2, 3)).toEqual([-3, -2, 1, 1, 2, 3])
})

test('Correctly merges arrays when both input arrays contain a mix of positive and negative values', () => {
    const nums1 = [-3, -2, 1, 0, 0, 0]
    const nums2 = [-11, -9, 4]
    expect(merge(nums1, 3, nums2, 3)).toEqual([-11, -9, -3, -2, 1, 4])
})

test('Correctly merges arrays when nums1 is longer than nums2', () => {
    const nums1 = [1, 2, 3, 0, 0, 0, 0]
    const nums2 = [-9, -5, -4, -2]
    expect(merge(nums1, 3, nums2, 4)).toEqual([-9, -5, -4, -2, 1, 2, 3])
})

test('Correctly merges arrays when nums2 is longer than nums1', () => {
    const nums1 = [1, 2, 3, 4, 0, 0, 0]
    const nums2 = [-9, -5, -4]
    expect(merge(nums1, 4, nums2, 3)).toEqual([-9, -5, -4, 1, 2, 3, 4])
})

test('Correctly merges arrays when nums2 contains all negative values', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [-3, -2, -1]
    expect(merge(nums1, 3, nums2, 3)).toEqual([-3, -2, -1, 1, 2, 3])
})

test('Merges the arrays in place, using the first input to store the result', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const nums2 = [1, 2, 3]
    const result = merge(nums1, 3, nums2, 3)

    /**
     * We're just asserting referential equality here. Other tests handle
     * the correctness of the result.
     */
    expect(result).toBe(nums1)
})
