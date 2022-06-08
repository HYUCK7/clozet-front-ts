import React from 'react'

type Props = {}

const AddBoard = (props: Props) => {
  return (
    <div text-align = "center">
        <h3>내 게시물 올리기</h3>
        <table>
                <td>
                    <img src="https://img.gqkorea.co.kr/gq/2015/12/style_566644d1e72a9.jpg" width="200" height="200"></img>
                    <h4>추천 복장을 입고 업로드해보세요.</h4>
                </td>
         </table>
         <table>
                <td>
                <img src="https://image.msscdn.net/images/goods_img/20190226/965917/965917_6_500.jpg" width="150" height="150"></img>
                <img src="https://image.msscdn.net/images/prd_img/20210908/2116434/detail_2116434_38_500.jpg" width="150" height="150"></img>
                <img src="https://image.msscdn.net/images/goods_img/20220211/2356342/2356342_1_500.jpg?t=20220224180520" width="150" height="150"></img>
                </td>
        </table>
            <tbody text-align = "center">
                <select name='title'>
                <option value='1'> 2022-05-22 </option>
                <option value={2}> 2022-05-23 </option>
                <option value={3}> 2022-05-24 </option>
                </select>
                <td>의 OOTD &nbsp;</td>
                <button>UPLOAD</button>
            </tbody>
    </div>
  )
}

export default AddBoard