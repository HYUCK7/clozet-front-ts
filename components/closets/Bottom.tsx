import React from 'react'
import style from '@/styles/Table.module.css'

type Props = {
    userName: string
    name: string
}

const Bottom = (props: Props) => {
  return (
    <div >
    <h1 className={style.h1}>{props.name} 님의 하의 옷장</h1>
    <label className={style.button}><input type="submit" value="하의 추가" /></label>
    
    
</div>
  )
}

export default Bottom