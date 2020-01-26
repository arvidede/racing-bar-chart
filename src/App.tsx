import React, { useEffect, useState } from 'react'
import { Chart } from './components'
import './styles/App.scss'

type AppProps = {}

const App: React.FC<AppProps> = props => {
    const [color, setColor] = useState(['#616161', '#9bc5c3'])

    // const fetchColors = (): Promise<void> =>
    //     fetch('http://uigradients.com/gradients.json')
    //         .then(res => res.json())
    //         .then(res => setColor(res[Math.floor(res.length * Math.random())].colors))

    // useEffect(() => {
    //     fetchColors()
    // }, [])

    const background = `linear-gradient(290deg, ${color[0]},${color[1]})`

    return (
        <div className="App" style={{ background }}>
            <Chart />
        </div>
    )
}

export default App
