import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { renderWithRouter } from "../tests/renderWithRouter"
import { Navbar } from "./Navbar"

describe('Navbar component', () => {
    test('Testing main link', () => {
        renderWithRouter(<Navbar />)

        const link = screen.queryByTestId('main-link')

        expect(link).toBeInTheDocument()

        userEvent.click(link)

        expect(screen.queryByTestId('main-page')).toBeInTheDocument()
    })

    test('Testing about link', () => {
        renderWithRouter(<Navbar />)

        const link = screen.queryByTestId('about-link')

        expect(link).toBeInTheDocument()

        userEvent.click(link)

        expect(screen.queryByTestId('about-page')).toBeInTheDocument()
    })

    test('Testing users link', () => {
        renderWithRouter(<Navbar />)

        const link = screen.queryByTestId('users-link')

        expect(link).toBeInTheDocument()

        userEvent.click(link)

        expect(screen.queryByTestId('users-page')).toBeInTheDocument()
    })
})