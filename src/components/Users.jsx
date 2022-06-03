import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const Users = () => {
    const [data, setData] = useState([])
    const nav = useNavigate()

    useEffect(() => {
        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        
            setData(res)
        })();
    }, [])

    return (
        <main data-testid='users-page'>
            {
                data.map((item) => (
                    <div 
                        data-testid='users-item' 
                        key={item.id}
                        onClick={() => nav(`/users/${item.id}`)}
                    >
                        <p>{ item.id }</p>

                        <p>{ item.fullName }</p>
                    </div>
                ))
            }
        </main>
    )
}