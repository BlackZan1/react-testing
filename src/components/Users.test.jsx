import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Users } from './Users'
import axios from 'axios'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { UserPage } from '../pages/User'
import { renderWithRouter } from '../tests/renderWithRouter'

jest.mock('axios')

describe('Users component', () => {
    const resData = [
        {
            'id': 1,
            'fullName': 'Nazar Saaliev'
        },
        {
            'id': 2,
            'fullName': 'Nazar Saaliev'
        },
        {
            'id': 3,
            'fullName': 'Nazar Saaliev'
        }
    ]

    beforeEach(() => {
        axios.get.mockReturnValue(resData)
    })

    afterEach(() => {
        jest.clearAllMocks()
    })

    test('Must got data from request', async () => {
        renderWithRouter(null, '/users')

        expect(axios.get).toBeCalledTimes(1)

        const usersItems = await screen.findAllByTestId('users-item')

        expect(usersItems.length).toBe(3)

        // screen.debug()
    })

    test('Must redirect to details page', async () => {
        renderWithRouter(null, '/users')

        const usersItems = await screen.findAllByTestId('users-item')

        expect(usersItems.length).toBe(3)

        userEvent.click(usersItems[0])

        expect(screen.queryByTestId('user-details')).toBeInTheDocument()
    })
})