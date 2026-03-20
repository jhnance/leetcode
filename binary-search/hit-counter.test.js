import { HitCounter } from './hit-counter'

test('Correctly reports 0 when no hits have been registered', () => {
    const hitCounter = new HitCounter()
    expect(hitCounter.getHits(200)).toBe(0)
})

test('Correctly reports the number of hits for a timestamp we have recorded', () => {
    const hitCounter = new HitCounter()
    hitCounter.hit(1)
    hitCounter.hit(2)
    expect(hitCounter.getHits(2)).toBe(2)
})

test('Correctly reports the number of hits for a timestamp we have not recorded', () => {
    const hitCounter = new HitCounter()
    hitCounter.hit(1)
    hitCounter.hit(2)
    expect(hitCounter.getHits(3)).toBe(2)
})
