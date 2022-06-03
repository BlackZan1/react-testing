import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../router/AppRouter"

export const renderWithRouter = (component, initialPath = '/') => {
    return render(
        <MemoryRouter initialEntries={[initialPath]}>
            <AppRouter />

            { component }
        </MemoryRouter>
    )
}