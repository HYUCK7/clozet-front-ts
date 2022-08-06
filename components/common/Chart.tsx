import React from 'react'
import Chart from 'react-google-charts'



type Props = {
    dataFormat : any
}

export const options = {
    chart: {
        title: "Clozet의 활동",
        subtitle: "회원 수와 회원들의 활동 - 2022",
    }
}

const convert = (dataFormat : any) => {
    console.log(dataFormat)
    const todata: any[] = []
    const keys = Object.keys(dataFormat[0])
    todata.push(keys)
    
    for(let i = 0; i<dataFormat.length; i++){
    const values = Object.values(dataFormat[i])
    todata.push(values)
    }
return todata
}


const DataChart = ({dataFormat}: Props) => {
  return (
    <div className='container'>
        <Chart
            chartType='Bar'
            width='100%'
            height="600px"
            data={convert(dataFormat)}
            options={options}
        />
            </div>
  )
}

export default DataChart
