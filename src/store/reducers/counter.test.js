import CounterReducer, { decrement, increment } from './counter'

describe('Counter Reducer', () => {
    test('Must increment', () => {
        expect(CounterReducer({ value: 0 }, increment())).toEqual({ value: 1 })
    })

    test('Must decrement', () => {
        expect(CounterReducer({ value: 0 }, decrement())).toEqual({ value: -1 })
    })

    test('Must work with empty state', () => {
        expect(CounterReducer(undefined, increment())).toEqual({ value: 1 })
        expect(CounterReducer(undefined, decrement())).toEqual({ value: -1 })
    })
})