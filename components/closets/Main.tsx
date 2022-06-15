import React from 'react'
import style from '@/styles/Table.module.css'

type Props = {
    userName: string
    name: string
}

const Main = (props: Props) => {
  return (
    <div>
    <h1 className={style.h1}>{props.name}님의 옷장</h1>
    <label className={style.button}><input type="submit" value="옷 추가" /></label>
    <table className={style.table}>
        <tbody>
    <tr>
    <td>
    <img style={{width:180}} src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg" alt="logo"/>
    <label><input type="submit" value="아우터" /></label>
    </td>

    <td>
    <img style={{width:180}} src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg" alt="logo"/>
    <label><input type="submit" value="상의" /></label>
    </td>

    <td>
    <img style={{width:180}} src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg" alt="logo"/>
    <label><input type="submit" value="하의" /></label>
    </td>

    <td>
    <img style={{width:180}} src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg" alt="logo"/>
    <label><input type="submit" value="신발" /></label>
    </td>
    </tr>
      </tbody>
    </table>
    </div>
  )
}

export default Main