import style from '@/styles/Table.module.css'
import React from 'react'

type Props = {
    userName: string
    name: string
}
const date = new Date()
    const week = ['일요일','월요일','화요일','수요일','목요일','금요일','토요일']
    const dayOfWeek = week[date.getDay()]
const Recommand = (props: Props) => {
    return(
        <>
        <h1 className={style.h1}>{props.name}님의 오늘의 복장 <br/>
        {date.getFullYear()}-{date.getMonth()}-{date.getDate()} {dayOfWeek}
        </h1>
        <div className = "row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.elandrs.com/upload/prd/img/666/600/1905492666_0000001.jpg" className="card-img-top" alt="..."></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src= "https://image.msscdn.net/images/goods_img/20190401/1000343/1000343_3_500.jpg?t=20200414185127" className="card-img-top" width="300" height="400" alt="My Image"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  
  /*return (<>
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
    
  )*/
}

export default Recommand