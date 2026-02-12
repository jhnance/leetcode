/**
 * Difficulty: easy
 * Leetcode link: https://leetcode.com/problems/merge-two-sorted-lists
 *
 * Description
 * -----------
 *
 * You are given the heads of two sorted linked lists: `list1` and `list2`.
 *
 * Merge the two lists into one sorted list. The list should be made by splicing
 * together the nodes of the first two lists.
 *
 * Return the head of the merged linked list.
 *
 * Examples
 * --------
 *
 * Input: `list1` = [1, 2, 4], `list2` = [1, 3, 4]
 * Output: [1, 1, 2, 3, 4]
 *
 * Input: `list1` = [], `list2` = []
 * Output: []
 *
 * Input: `list1` = [], `list2` = [0]
 * Output: [0]
 *
 * Constraints
 * -----------
 *
 * * The number of nodes in both lists is in the range [0, 50].
 * * -100 <= Node.val <= 100
 * * Both `list1` and `list2` are sorted in non-decreasing order.
 *
 * Complexity
 * ----------
 *
 * Time: O(n)
 * We visit each of the nodes in each list exactly one time, performing
 * constant-time operations each time.
 *
 * Space: O(1)
 * We only allocate pointers.
 */

export function ListNode(val = null, next = null) {
    this.val = val
    this.next = next
}

export function mergeTwoLists(list1, list2) {
    // sentinel node
    const prehead = new ListNode(-1)
    let prev = prehead

    while (list1 && list2) {
        if (list1.val < list2.val) {
            prev.next = list1
            list1 = list1.next
        } else {
            prev.next = list2
            list2 = list2.next
        }
        prev = prev.next
    }

    if (!list1) {
        prev.next = list2
    } else {
        prev.next = list1
    }

    return prehead.next
}
