import React, { useState } from 'react'
import Chart from 'react-google-charts'


type Props = {}

export interface Info{
    year: string,
    user: number,
    article: number
}

export const dataFormat = [
    { year: '2019', user: 460, article: 250 },
    { year: '2020', user: 300, article: 1120},
    { year: '2021', user: 500, article: 1000 },
]

export const options = {
    chart: {
        title: "회사 성과표",
        subtitle: "매출, 비용, 이익: 2018-2021년도",
    }
}

const valueK = () => {
    //const [data, setData] = useState(dataFormat);
    let values = []
    for (let i = 0; i < dataFormat.length; i++) {
        values[i] = Object.values(dataFormat[i])
    }
    console.log(`values : ${JSON.stringify(values)}`)
    return values
}

const convert = () => {
    let data : any[] = []
    const keys = Object.keys(data[0])
    data.push(keys)

    for(let i = 0; i < 3; i++) {
        const index = valueK()[i]
        data.push(index)
        console.log(data)
    }
    return data
}


const DataChart = (props: Props) => {
  return (
    <div>
        <p>Chart</p>
        <Chart
            chartType='Bar'
            width='70%'
            height="400px"
            data={valueK()}
            options={options}
        />

    </div>
  )
}

export default DataChart