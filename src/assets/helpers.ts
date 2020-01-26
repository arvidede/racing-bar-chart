import { DATA } from './constants'

export function getRanks(data: DATA[]): DATA[] {
    const T = data[0].data.length
    for (let t = 0; t < T; t++) {
        data.sort((a, b) => b.data[t] - a.data[t])
        data.forEach((obj, i) => {
            obj.rank.push(i)
        })
    }
    return data
}

// export function sortData(data: DATA[], t: number): DATA[] {}
