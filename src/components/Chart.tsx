import React, { ChangeEvent, useEffect, useState, useCallback } from 'react'
import * as Hooks from 'react-utils/Hooks'
import { Bar } from './Bar'
import { BAR_DATA, DATA } from '../assets/constants'
import { Scale } from './Scale'
import '../styles/Chart.scss'

const INIT_DELAY = 1
const MS_PER_SECOND = 1000

type ChartProps = {}

export const Chart: React.FC<ChartProps> = () => {
    const time = Hooks.useNumber(0)
    const tempo = Hooks.useNumber(INIT_DELAY)
    const [barData, setBarData] = useState<DATA[]>([{ label: '', data: [], rank: 1 }])
    const [maxValues, setMaxValues] = useState<number[]>([])

    const delay = MS_PER_SECOND / tempo.value

    Hooks.useInterval(() => {
        time.value < 100 ? time.increase() : time.setNumber(0)
    }, delay)

    const getMaxValuesPerTimestep = useCallback(() => {
        const flatData = barData.map(data => data.data)
        const maxVal = flatData.reduceRight((r, a) => r.map((b, i) => (b && Math.max(b, a[i])) || 0))
        setMaxValues(maxVal)
    }, [barData])

    useEffect(() => {
        setBarData(BAR_DATA)
        getMaxValuesPerTimestep()
    }, [getMaxValuesPerTimestep])

    return (
        <div className="chart">
            <Scale max={maxValues[time.value]} ticks={10} />
            <div className="chart-container">
                {barData.map(bar => (
                    <Bar
                        rank={bar.rank}
                        key={bar.label}
                        length={bar.data[time.value]}
                        transitionDuration={delay}
                        label={bar.label}
                        max={maxValues[time.value]}
                    />
                ))}
            </div>
            <input
                type="range"
                min={1}
                max={10}
                value={tempo.value}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                    tempo.setNumber(e.target.value)
                }}
            />
            <p>{time.value}</p>
        </div>
    )
}
