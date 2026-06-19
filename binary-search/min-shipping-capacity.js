/**
 * Link: https://www.hellointerview.com/learn/code/binary-search/minimum-shipping-capacity
 */
function minimumShippingCapacity(
    quantities,
    weights,
    maxBoxes,
    maxWeightPerBox,
) {
    function countBoxes(capacity) {
        let numBoxes = 0

        for (let i = 0; i < quantities.length; i++) {
            let remaining = quantities[i]
            while (remaining > 0) {
                const itemsPerBox = Math.min(
                    capacity,
                    Math.floor(maxWeightPerBox / weights[i]),
                    remaining,
                )

                remaining -= itemsPerBox
                numBoxes++
            }
        }

        return numBoxes
    }

    let min = 1
    let max = Math.max(...quantities)

    while (min < max) {
        const capacity = min + Math.floor((max - min) / 2)
        if (countBoxes(capacity) < maxBoxes) {
            max = capacity
        } else {
            min = capacity + 1
        }
    }

    return min
}
