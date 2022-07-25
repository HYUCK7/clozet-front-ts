import { Article } from '@/modules/types'
import React from 'react'
import Image from 'next/image'

type Props = {
  info: any
  onDeleteClick: any
}

const MyBoardList = ({info , onDeleteClick} : Props) => {
console.log(`info값 :${JSON.stringify(info)}`)

return (<div> 
    <div text-align = "center">
        <h1 className='text-center'># 내 게시글</h1>
    </div>
    <div className='container'>
     
    {info.map((x: Article) =>
     
    <div className='col-12' key={x.articleId}>
      <div className=" card mb-3 m-4">
        <Image src={x.picture} className="card-img-top" alt="articlePicture" />
        <div className="card-body m-3">
        <h5 className="card-title">{x.title}</h5>
        <p className="card-text">{x.content}</p>
        <p className="card-text">{x.height}, {x.weight}</p>
        <p className="card-text">
          <small className="text-muted">{x.writtenDate}</small>
        </p>
      </div>
      <div className='text-start'>
       
      </div>
      <div>
        
        <div className='col-6 col-sm-12 text-lg-end text-center'>
          
          <button onClick={()=>onDeleteClick(x.articleId)} type='button' className='btn btn-outline-danger btn-sm m-3 col-3'>
          <p>
            <small>게시물 삭제</small>
          </p>
          
          </button>
          
        </div>
        </div>
        </div>
        </div>
        
        )}
          </div>
        
    </div>)
}
export default MyBoardList