import { Props } from '@/pages/boards/allBoardList'
import { Article } from '@/modules/types'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { findAllBoards } from '@/modules/apis/article'

const AllBoardList: React.FC<Props> = ({list, onChange, onSubmit, loadArticletitle, readComment } : Props) => {
  const [boardList, setBoardList] = useState<Array<Article>>([])
  
  useEffect(() => {
    findAllBoards().then(data => {setBoardList(data)})
  }, [])

  return (
    <form onSubmit={onSubmit}>
    <div className='container'>
    <div>
      <h1 className='text-center'># Clozet 사람들</h1>
    </div>
    <br/>
    {boardList.map((article: Article) => 
    
    <div className="row mb-2" key={article.articleId}>
    <div className="col-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <input type='hidden' key={article.articleId}/>
          <strong className="d-inline-block mb-2 text-primary">
            <h5 key={article.articleId}>{article?.nickname}</h5>
          </strong>
          <input type = 'hidden' name = 'articleId' value = {article.articleId}/>
          <h3 key={article.articleId} className="mb-0">
            {article?.title}
          </h3>
          <div className="mb-1 text-muted">
          <h5 key = {article.articleId}> {article?.writtenDate} </h5>
          </div>
          <p key={article.articleId} className="card-text mb-auto">{article?.content}</p>
          <p key={article.articleId} className="card-text mb-auto">{article?.height}cm , {article?.weight}kg</p>
          
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={article?.picture}/>
        </div>
        <div className='p-4'>
        <div className="input-group mb-3">
          <input onChange={onChange} name='comment' type="text" className="form-control" placeholder="댓글을 입력해 소통해보세요."  aria-describedby="button-addon2"/>
          <button key={article.articleId} onClick={()=>{loadArticletitle(article?.title)}} className="btn btn-outline-secondary" type= "submit" id="button-addon2">
            <h5>입력</h5>
          </button>
          <div>
           <button key={article.articleId} onClick={()=>{readComment(article?.title)}} type="button" className="btn btn-outline-dark">
            <h5>댓글보기</h5>
           </button>
          </div>
        </div>
        </div>
      </div>
      </div>
      </div>
      )}
    </div>
    </form>
  )
}

export default AllBoardList