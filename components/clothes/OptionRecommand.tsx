import React from 'react'
import style from '@/styles/Table.module.css'

type Props = {
    userName: string
    name: string
}
const date = new Date()
const OptionRecommand: React.FC<Props> = (props: Props) => {
  return (
    <>
    <h1 className= {style.h1}>{props.name}님의 OOTD {date.getFullYear()}-{date.getMonth()}-{date.getDate()}</h1>
  <div className="container-sm">
    
  <div className='row'>
  <select className=" form-select form-select-lg my-5" vertical-align = "middle">
      <option selected>특별한 날이라면 선택해보세요!</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div className='col-sm-4'>
      <div className="card bg-dark text-white ">
       <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp"  className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
  </div>
  </div>
  <div className='col-sm-4'>
  <div className="card bg-dark text-white">
    <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp"  className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
  </div>
  </div>
  <div className='col-sm-4'>
  <div className="card bg-dark text-white">
    <img src="https://cdnweb01.wikitree.co.kr/webdata/editor/202005/20/img_20200520104404_7911aad7.webp"  className="card-img" alt="..."/>
  <div className="card-img-overlay">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text">Last updated 3 mins ago</p>
  </div>
  </div>
  </div>
    <button className="btn btn-outline-secondary my-5"><h5>BEST 목록에 추가</h5></button>
    </div>
    </div>
    </>
  )
}

export default OptionRecommand