import style from '@/styles/Table.module.css'
import React from 'react'

type Props = {
    userName: string
    name: string
}

const Ootd = (props: Props) => {
    const date = new Date()
    const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    const dayOfWeek = week[date.getDay()]
  return (<>
  <h1 className={style.h1}>{props.name}님의 오늘의 복장 <br/>
  {date.getFullYear()}-{date.getMonth()}-{date.getDate()} {dayOfWeek}
  </h1>
  <table className={style.table}>
      <tr>
          <td><img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp" width="200" height="200" alt="My Image"/></td>
          <td><img src="https://www.elandrs.com/upload/prd/img/666/600/1905492666_0000001.jpg" width="200" height="200" alt="My Image"/></td>
          <td><img src="https://image.msscdn.net/images/goods_img/20190401/1000343/1000343_3_500.jpg?t=20200414185127" width="200" height="200" alt="My Image"/></td>
      </tr>
  </table>
  <button className={style.button}>옷 추천</button>
  <button className={style.button}>BEST</button>
  </>
    
  )
}

export default Ootd