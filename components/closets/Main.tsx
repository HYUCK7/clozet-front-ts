import React, { useState } from 'react'
import style from '@/styles/Table.module.css'
import { Props } from '@/pages/closets/main'

const Main: React.FC<Props> = ({info, onChange }: Props) => {
  

  return (
    <div>
    <h1 className={style.h1}>
      {info.nickname}님의 옷을 보여주세요!
    </h1>
    <div className="input-group p-5">
      <input onChange={onChange} type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload"/>
      <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">
        <h5>등록</h5>
      </button>
    </div>
    </div>
  )
}
export default Main