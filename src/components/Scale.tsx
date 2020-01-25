import React from 'react'
import '../styles/Scale.scss'

type Props = {
    max: number;
    ticks: number;
}

export const Scale: React.FC<Props> = (props: Props) => {
    const ticks = Array(props.ticks).fill(0)
    const max = Math.ceil(props.max / 10) * 10
    return (
        <div className="scale">
            {ticks.map((tick, index) => (
                <i key={index}>{Math.round((index / props.ticks) * max)}</i>
            ))}
        </div>
    )
}
