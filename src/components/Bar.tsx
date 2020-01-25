import React, { useEffect } from 'react'
import '../styles/Bar.scss'

type BarProps = {
    label: string;
    length: number;
    max: number;
    transitionDuration: number;
    rank: number;
}

export const Bar: React.FC<BarProps> = ({ length, label, transitionDuration, max, rank }: BarProps) => {
    const styles: object = {
        transform: `scaleX(${length / max})`,
        transition: `linear ${transitionDuration}ms`,
    }

    useEffect(() => {
        console.log(rank)
    }, [rank])

    return (
        <div className="bar-container">
            <p className="bar-label">{label}</p>
            <div className="bar" style={styles}></div>
            <p>{length}</p>
        </div>
    )
}
