import React, {useEffect, useState} from 'react';
import './App.css';

type PropsType={
    body: string
    id: number
    title: string
    userId: number
}

function App() {
        const [state, setState] = useState<PropsType[]>( [])

        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts').
            then(response => response.json()).
            then(json => setState(json))
        }, [])
        const clearAll = () => {
            setState([])
        }
        const getData = () => {
            fetch('https://jsonplaceholder.typicode.com/posts').
            then(response => response.json()).
            then(json => setState(json))
        }
    return (
        <div className="App">
            <button onClick={clearAll}>Clear all</button>
            <button onClick={getData}>Get data</button>
            <ul>
                {state.map((el) => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span>{el.userId}</span>
                            <span>{el.title}</span>
                        </li>
                    )})
                }
            </ul>


        </div>
    );
}

export default App;
