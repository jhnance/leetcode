import { RecentCounter } from './number-of-recent-calls'

test('Returns the expected outputs', () => {
    const outputs = []
    const inputs = [1, 100, 3001, 3002]

    const counter = new RecentCounter()
    for (let input of inputs) {
        const output = counter.ping(input)
        outputs.push(output)
    }

    expect(outputs).toEqual([1, 2, 3, 3])
})

test('Evicts entries when they fall outside the range', () => {
    const counter = new RecentCounter()

    counter.ping(1)
    expect(counter.getSize()).toBe(1)

    counter.ping(100)
    expect(counter.getSize()).toBe(2)

    counter.ping(3001)
    expect(counter.getSize()).toBe(3)

    counter.ping(3002)
    expect(counter.getSize()).toBe(3)
})
