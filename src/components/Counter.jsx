import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../store/reducers/counter"
import { getCounterValue } from "../store/reducers/selectors/getCounterValue"

export const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(getCounterValue)

    const onIncrement = () => {
        dispatch(increment())
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid='counter-value'>
                { value }
            </h1>

            <button 
                data-testid='counter-plus'
                onClick={onIncrement}
            >
                +
            </button>

            <button 
                data-testid='counter-minus'
                onClick={onDecrement}
            >
                -
            </button>
        </div>
    )
}