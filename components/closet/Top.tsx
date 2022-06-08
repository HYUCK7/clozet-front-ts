import React from 'react'
import style from '@/styles/Table.module.css'

type Props = {
    userName: string
    name: string
}

const Top = (props: Props) => {
  return (
      <div>
      <h1 className={style.h1}>{props.name}님의 상의 옷장</h1>
      <label className={style.button}><input type="submit" value="상의 추가" /></label>
      <table className={style.table}>
          <tbody>
      <tr>
      <td>
      <img style={{width:180}} src="http://ccimg.hellomarket.com/images/2018/item/s9/02/03/12/3154_2767656_1.jpg?size=s6" alt="logo"/>
      </td>

      <td>
      <img style={{width:180}} src="http://image.kyobobook.co.kr/newimages/giftshop_new/goods/400/1177/S1639294038923.jpg" alt="logo"/>
      </td>

      <td>
      <img style={{width:180}} src="http://img.danawa.com/prod_img/500000/360/186/img/6186360_1.jpg?shrink=330:330&_v=20180601122152" alt="logo"/>
      </td>

      <td>
      <img style={{width:180}} src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg" alt="logo"/>
      </td>
      </tr>
        </tbody>
      </table>
      </div>
  )
}

export default Top