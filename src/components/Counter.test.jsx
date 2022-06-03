import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Counter } from "./Counter"
import { Provider } from 'react-redux'
import { createReduxStore } from "../store/store"
import { renderWithRedux } from "../tests/renderWithRedux"

describe('Counter', () => {
    test('Must increment value', () => {
        const { getByTestId } = renderWithRedux(<Counter />, { counter: { value: 10 } })

        const incrementBtn = getByTestId('counter-plus')

        expect(getByTestId('counter-value')).toHaveTextContent('10')

        userEvent.click(incrementBtn)

        expect(getByTestId('counter-value')).toHaveTextContent('11')
    })

    test('Must decrement value', () => {
        const { getByTestId } = renderWithRedux(<Counter />, { counter: { value: 10 } })

        const decrementBtn = getByTestId('counter-minus')

        expect(getByTestId('counter-value')).toHaveTextContent('10')

        userEvent.click(decrementBtn)

        expect(getByTestId('counter-value')).toHaveTextContent('9')
    })
})