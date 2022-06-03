import { getCounterValue } from "./getCounterValue"

describe('getCounterValue', () => {
    test('Must return 0 with empty state', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('Must return value with filled state', () => {
        expect(getCounterValue({ 
            counter: { 
                value: 10 
            } 
        })).toBe(10)
    })
})