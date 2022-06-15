import style from '@/styles/Table.module.css'
import React from 'react'

type Props = {
    userName : string
    name: string
    cloths: any
}

const Best = (props: Props) => {
    const date = new Date()
  return (
    <div>
        <table className={style.table}>
        <tbody>
            <tr>
                <td>
                    <label>
                        {date.getFullYear()}-{date.getMonth()}-{date.getDate()}
                    </label>
                </td>
                <td>
                    <img style={{width: 150}}
                    src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilLR0ZqU6k_w-rzpQjT1RMMSS2k4iSTAC1g&usqp=CAU"
                    alt = "logo"/>
                </td>
                <td>
                    <img style={{width: 150}}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTkvZDaIYM2XJKvhTrk4bj_bssBfYc-04pw&usqp=CAU"
                        alt = "logo"/>
                </td>
                <td>
                    <img style={{width: 150}}
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2A-nuXYWoVhLZlO5-Ha4RxgKR3SdHIuE8oA&usqp=CAU"
                            alt = "logo"/>
                </td>
                <td><label><input type='submit' value = '삭제'/></label></td>
            </tr>
        </tbody>
        </table>
    </div>
  )
}

export default Best