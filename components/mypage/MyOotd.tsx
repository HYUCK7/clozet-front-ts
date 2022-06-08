import React from 'react'
import style from '@/styles/Table.module.css'

type Props = {
    userName: string
    name: string
}

const MyOotd = (props: Props) => {
    const date = new Date()
  return (
    <>
    <h1 className= {style.h1}>{props.name}님의 OOTD {date.getFullYear()}-{date.getMonth()}-{date.getDate()}</h1>
    <select name='concept' className={style.button}>
        <option value='소개팅'> 소개팅 </option>
        <option value='결혼식'> 결혼식 </option>
        <option value='장례식'> 장례식 </option>
    </select>
    <table className={style.table}>
        <tr>
        <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp" width="200" height="200" alt="My Image"/></td>
        <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520110209_03b059a0.webp" width="200" height="200" alt="My Image"/></td>
        <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520112658_78365a06.webp" width="200" height="200" alt="My Image"/></td>
        </tr>
    </table>
    <button className={style.button}>BEST</button>
    </>
  )
}

export default MyOotd