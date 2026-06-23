class MinStack {
    constructor() {
        this.stack = []
        this.mins = []
    }

    push(val) {
        this.stack.push(val)
        this.mins.push(Math.min(this.mins.at(-1) ?? Infinity, val))
    }

    pop() {
        const popped = this.stack.pop()
        this.mins.pop()
        return popped
    }

    top() {
        return this.stack.at(-1)
    }

    getMin() {
        return this.mins.at(-1)
    }
}
