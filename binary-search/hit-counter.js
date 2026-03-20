export class HitCounter {
    constructor() {
        this.hits = []
    }

    hit(timestamp) {
        this.hits.push(timestamp)
    }

    getHits(timestamp) {
        let left = 0
        let right = this.hits.length - 1
        let target = timestamp - 300

        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2)

            if (this.hits[mid] <= target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        const answer = this.hits.length - left

        /**
         * This is one way of keeping this.hits to a reasonable size.
         *
         * Given the constraints of the problem, we shouldn't be performing
         * a very expensive operation here, so flushing the queue every time
         * we call getHits shouldn't be prohibitively expensive.
         *
         * We could consider other methods like clearing every N times we call
         * getHits, clearing on some timeout, etc.
         */
        this.flushQueue(left)

        return answer
    }

    flushQueue(index) {
        this.hits = this.hits.slice(index)
    }
}
