import React from 'react'

type Props = {}

const AllBoardList = (props: Props) => {
  return (
    <div text-align = "center">
    <h1>Clozet 사람들</h1>
    <h3>인플루언서 김윤섭님의 게시글 - 좋아요가 많다면, 이름 색 또는 뱃지 제공</h3>
    <table>
            <td>
                <img src="https://img.gqkorea.co.kr/gq/2015/12/style_566644d1e72a9.jpg" width="200" height="200"></img>
            </td>
     </table>
     <table>
            <td>
            <img src="https://image.msscdn.net/images/goods_img/20190226/965917/965917_6_500.jpg" width="150" height="150"></img>
            <img src="https://image.msscdn.net/images/prd_img/20210908/2116434/detail_2116434_38_500.jpg" width="150" height="150"></img>
            <img src="https://image.msscdn.net/images/goods_img/20220211/2356342/2356342_1_500.jpg?t=20220224180520" width="150" height="150"></img>
            </td>
    </table>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoQ4zDHMFxI1p1hNdmfcdouoQBi6148461w&usqp=CAU" width={50} height={50}></img>
    <label htmlFor="">x120 &nbsp;&nbsp;&nbsp;&nbsp;</label>
    <button>댓글 달기</button>
    <button>다른 옷 구경하기</button>
    
    <h3>유재혁님의 게시글</h3>
    <table>
            <td>
                <img src="https://t1.daumcdn.net/cfile/tistory/2117C03E55DFE3241F" width="200" height="200"></img>
            </td>
     </table>
     <table>
            <td>
            <img src="https://www.siminilbo.co.kr/news/data/20151211/p179552994522588_213.jpg" width="150" height="150"></img>
            <img src="http://ccimg.hellomarket.com/images/2018/item/s9/02/03/12/3154_2767656_1.jpg?size=s6" width="150" height="150"></img>
            <img src="https://www.elandrs.com/upload/prd/img/666/600/1905492666_0000001.jpg" width="150" height="150"></img>
            </td>
    </table>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoQ4zDHMFxI1p1hNdmfcdouoQBi6148461w&usqp=CAU" width={50} height={50}></img>
    <label htmlFor="">x33 &nbsp;&nbsp;&nbsp;&nbsp;</label>
    <button>댓글 달기</button>
    <button>다른 옷 구경하기</button>


    <h3>김승현님의 게시물</h3>
    <table>
            <td>
                <img src="https://image.msscdn.net/data/estimate/2497229_0/gallery_6289d91103849.jpg.view" width="200" height="200"></img>
            </td>
     </table>
     <table>
            <td>
            <img src="https://image.msscdn.net/images/goods_img/20220418/2497229/2497229_1_500.jpg?t=20220422131035" width="150" height="150"></img>
            <img src="https://image.msscdn.net/images/goods_img/20220310/2408345/2408345_1_500.jpg?t=20220311173929" width="150" height="150"></img>
            <img src="https://image.msscdn.net/images/goods_img/20190401/1000343/1000343_3_500.jpg?t=20200414185127" width="150" height="150"></img>
            </td>
    </table>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoQ4zDHMFxI1p1hNdmfcdouoQBi6148461w&usqp=CAU" width={50} height={50}></img>
    <label htmlFor=""> x100 &nbsp;&nbsp;&nbsp;&nbsp;</label>
    <button>댓글 달기</button>
    <button>다른 옷 구경하기</button>
    </div>
  )
}

export default AllBoardList