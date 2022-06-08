import React from 'react'
import style from '@/styles/Comp.module.css'

type Props = {
    userName: string
    name: string 
}

const AddCloset = (props: Props) => {
  return (
    <div>
        <h1 className={style.h1}>{props.userName}님</h1><br/>
        <h1 className={style.h1}>
            <a href='/closet/add'>
                CLOSET을 등록해주세요
            </a>
        </h1>
    </div>
  )
}

export default AddCloset