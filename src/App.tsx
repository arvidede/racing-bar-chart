import React from 'react'
import { Chart } from './components'
import './styles/App.scss'

type AppProps = {}

const App: React.FC<AppProps> = props => {
    return (
        <div className='App'>
            <Chart />
        </div>
    )
}

export default App
