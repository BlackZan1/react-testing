import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Content } from './Content'

describe('Content component', () => {
  test('Must render link learn react after clicking on button', async () => {
    render(
      <Content />
    )

    expect(screen.queryByText(/learn react/i)).toBeNull()

    const btn = await screen.findByTestId('app-btn')

    fireEvent.click(btn)
  
    expect(screen.queryByText(/learn react/i)).toBeInTheDocument()

    fireEvent.click(btn)

    expect(screen.queryByText(/learn react/i)).toBeNull()
  })

  test('Must fill element by text after changing input', async () => {
    render(
      <Content />
    )

    const input = await screen.findByTestId('app-input')

    expect(screen.queryByTestId('app-value')).toContainHTML('')

    // fireEvent.change(input, {
    //   target: {
    //     value: '123123'
    //   }
    // })

    userEvent.type(input, '123123')

    expect(screen.queryByTestId('app-value')).toContainHTML('123123')
    expect(screen.queryByTestId('app-value')).toMatchSnapshot()
  })
})
