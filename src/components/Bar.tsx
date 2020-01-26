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
    const styles = {
        bar: {
            transform: `scaleX(${length / max})`,
            transition: `linear ${transitionDuration}ms`,
        },
        container: {
            transform: '',
            transition: `linear ${transitionDuration}ms`,
        },
    }

    const [style, setStyle] = useState(styles)
    const prevRank = usePrevious(rank)

    useEffect(() => {
        if (prevRank && prevRank !== rank) {
            const difference = prevRank - rank
            const temp = JSON.parse(JSON.stringify(style))
            temp.container.transform = `translateY(${difference * 100}%)`
            setStyle(temp)
            setTimeout(() => {
                setStyle(styles)
            }, transitionDuration)
        }
    }, [rank, prevRank, style])

    return (
        <div className="bar-container" style={style.container}>
            <p className="bar-label">{label}</p>
            <div className="bar" style={style.bar}></div>
            <p>{length}</p>
        </div>
    )
}
