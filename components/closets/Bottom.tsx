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
    <table className={style.table}>
        <tbody>
            <tr>
                <td>
                    <img
                        style={{
                            width: 180
                        }}
                        src="https://www.elandrs.com/upload/prd/img/666/600/1905492666_0000001.jpg"
                        alt="logo"/>
                </td>
                <td>
                    <img
                        style={{
                            width: 180
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2A-nuXYWoVhLZlO5-Ha4RxgKR3SdHIuE8oA&usqp=CAU"
                        alt="logo"/>
                </td>
                <td>
                    <img
                        style={{
                            width: 180
                        }}
                        src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg"
                        alt="logo"/>
                </td>
                <td>
                    <img
                        style={{
                            width: 180
                        }}
                        src="http://image.mujikorea.net/goods/00/05/92/48/4548076706939_N_N_400.jpg"
                        alt="logo"/>
                </td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default Bottom