import { useEffect, useState } from "react"

export const HelloWorld = () => {
    const [value, setValue] = useState('')
    const [visible, setVisible] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    const toggle = () => value === 'hello' && setVisible(prev => !prev)
    const onChange = (e) => setValue(e.target.value)

    useEffect(() => {
        setLoading(true)

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setTimeout(() => {
                    setUsers(json)
                    setLoading(false)
                }, 1000)
            })
    }, [])

    return (
        <div>
            <input onChange={onChange} id="search" type="text"/>

            <button onClick={toggle} id="toggle">HELLO WORLD</button>

            {
                visible && (
                    <h1 id="hello">HELLO WORLD</h1>
                )
            }

            {
                loading && (
                    <h1 id="users-loading">Loading...</h1>
                )
            }

            {
                users.length && (
                    <div id="users-list">
                        {
                            users.map((user) => (
                                <div key={user.id}>
                                    { user.name }
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}