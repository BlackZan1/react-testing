import { useState } from 'react'

// assets
import logo from './logo.svg'

export const Content = () => {
    const [clicked, setClicked] = useState(false)
    const [value, setValue] = useState('')

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <button 
                    data-testid='app-btn' 
                    onClick={() => setClicked(!clicked)}
                >
                    Click me
                </button>

                {
                    clicked && (
                    <a
                        className='App-link'
                        href='https://reactjs.org'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Learn React
                    </a>
                    )
                }
            </header>

            <div>
                <h1>
                    <code data-testid='app-value'>
                    { value }
                    </code>
                </h1>

                <input 
                    data-testid='app-input' 
                    onChange={(ev) => setValue(ev.currentTarget.value)}
                />
            </div>      
        </div>
    )
}