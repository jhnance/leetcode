import { ListNode, mergeTwoLists } from '../linked-list/merge-two-sorted-lists'

function listToArray(list) {
    const output = []

    while (list?.val) {
        output.push(list.val)
        list = list.next
    }

    return output
}

test('Correctly merges two lists with all positive values', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const output = new ListNode(
        1,
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))),
        ),
    )
    expect(listToArray(mergeTwoLists(list1, list2))).toEqual(
        listToArray(output),
    )
})

test('Correctly merges two lists with all negative values', () => {
    const list1 = new ListNode(-4, new ListNode(-2, new ListNode(-1)))
    const list2 = new ListNode(-4, new ListNode(-3, new ListNode(-1)))
    const output = new ListNode(
        -4,
        new ListNode(
            -4,
            new ListNode(
                -3,
                new ListNode(-2, new ListNode(-1, new ListNode(-1))),
            ),
        ),
    )
    expect(listToArray(mergeTwoLists(list1, list2))).toEqual(
        listToArray(output),
    )
})

test('Correctly merges two lists with a mix of positive and negative values', () => {
    const list1 = new ListNode(-1, new ListNode(2, new ListNode(4)))
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
    const output = new ListNode(
        -1,
        new ListNode(
            1,
            new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))),
        ),
    )

    expect(listToArray(mergeTwoLists(list1, list2))).toEqual(
        listToArray(output),
    )
})

test('Correctly merges two lists of unequal length', () => {
    const list1 = new ListNode(1)
    const list2 = new ListNode(1, new ListNode(2))
    expect(listToArray(mergeTwoLists(list1, list2))).toEqual([1, 1, 2])
})

test('Correctly merges a filled list with an empty list', () => {
    const list1 = new ListNode(1)
    const list2 = null
    expect(listToArray(mergeTwoLists(list1, list2))).toEqual([1])
})

test('Correctly merges two empty lists', () => {
    const list1 = new ListNode()
    const list2 = new ListNode()
    expect(listToArray(mergeTwoLists(list1, list2))).toEqual([])
})
