import React, { useEffect, useState } from 'react'
import { usePrevious } from 'react-utils/Hooks'
import '../styles/Bar.scss'

type BarProps = {
    label: string;
    length: number;
    max: number;
    transitionDuration: number;
    rank: number;
}

export const Bar: React.FC<BarProps> = ({ length, label, transitionDuration, max, rank }: BarProps) => {
    const barStyle = {
        transform: `scaleX(${length / max})`,
        transition: `linear ${transitionDuration}ms`,
    }

    const containerStyle = {
        transform: '',
        transition: '',
    }

    const [style, setStyle] = useState(containerStyle)
    const prevRank = usePrevious(rank)

    useEffect(() => {
        if (prevRank !== rank) {
            setStyle({ transition: `linear ${transitionDuration}ms`, transform: `translateY(${rank * 100}%)` })
        }
    }, [rank, prevRank, style, transitionDuration])

    return (
        <div className="bar-container" style={style}>
            <p className="bar-label">{label}</p>
            <div className="bar" style={barStyle}></div>
            <p>{length}</p>
        </div>
    )
}
