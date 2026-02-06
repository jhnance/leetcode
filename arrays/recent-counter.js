/**
 * Difficulty: easy
 * Leetcode link:https://leetcode.com/problems/number-of-recent-calls
 *
 * Description
 * -----------
 *
 * You have a `RecentCounter` class that counts the number of recent requests
 * within a certain timeframe.
 *
 * Implement the `RecentCounter` class:
 *
 * `new RecentCounter()` initializes the counter with zero recent requests
 *
 * `ping(t)` adds a new request at time `t`, where `t` represents some time in
 * milliseconds, and returns the number of requests that have happened in the past
 * 3000 milliseconds (including the new request). Specifically, return the number
 * of requests that have happened in the inclusive range [t - 3000, t].
 *
 * It is guaranteed that every call to `ping` uses a strictly larger value of `t`
 * than the previous call.
 *
 * Examples
 * --------
 * (Note, these are not actually array inputs and outputs, just collections of
 * distinct inputs and outputs grouped together.)
 * Input:
 * [`new RecentCounter()`, `ping(1)`, `ping(100)`, `ping(3001)`, `ping(3002)`]
 * Output:
 * [undefined, 1, 2, 3, 3]
 *
 * Complexity
 * ----------
 *
 * Time: O(1)
 * In the worst case, you evict every entry in the list as you add the latest.
 * However, there's an upper limit on the size of this list which also caps the
 * maximum number of iterations you would perform to evict old entries, considering
 * the fact that every subsequent call to `ping` is guaranteed to use a larger value
 * for the timestamp. Your list will never have more than 3000 elements in it, therefore
 * you'll never iterate more than 3000 times.
 *
 * Space: O(1)
 * In the worst case, you store as many timestamps as you ping, but—as stated
 * above—there is an upper bound on this. No matter how many operations you perform,
 * you'll never store more than 3000 timestamps at once.
 */
export class RecentCounter {
    constructor() {
        this.list = null
    }

    ping(t) {
        if (!this.list) {
            this.list = new LinkedList(t)
        } else {
            this.list.add(t)
        }

        return this.list.getSize()
    }

    getSize() {
        return this.list.getSize()
    }
}

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.size = 1
    }

    add(value) {
        this.tail.next = new Node(value)
        this.tail = this.tail.next
        this.size++

        this.clearOlderEntries(value - 3000)
    }

    clearOlderEntries(value) {
        let current = this.head
        while (current.value < value) {
            current = current.next
            this.head = current
            this.size--
        }
    }

    getSize() {
        return this.size
    }
}
