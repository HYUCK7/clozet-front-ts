import style from '@/styles/Table.module.css'
import styles from '@/styles/Comp.module.css'
import React from 'react'

type Props = {
    userName: string
    name: string
}

const AddCloth = (props: Props) => {
  return (
    <div>
        <h3 className={styles.div}>{props.name}님의 옷 추가</h3>
        <table className={style.table}>
            <tbody>
                <tr>
                    <td>
                        <img style={{width: 180}} src = "https://www.elandrs.com/upload/prd/img/666/600/1905492666_0000001.jpg" alt='logo'/>
                    </td>
                </tr>
                <label><input type = "submit" value="Add"/></label>
            </tbody>
        </table>
    </div>
  )
}

export default AddCloth