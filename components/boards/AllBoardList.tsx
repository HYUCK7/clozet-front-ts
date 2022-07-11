import { fetchArticleAPI } from '@/apis/articleApi'
import axios, { AxiosResponse } from 'axios'
import React, { CSSProperties, useEffect, useState } from 'react'

export interface Article {
  articleId? : string,
  title: string,
  writtenDate? : string,
  open? : string,
  content: string,
  picture? : any,
  height? : string,
  weight? : string,
  comment? : string
}

const AllBoardList: React.FC = () => {
  const [articleList, setArticleList] = useState<Array<Article>>([])

  /** 임의로 데이터 직접 넣어 test
  useEffect(() => {
    let articles: Array<Article> = [
      {"articleId":1001,"title":"234234","writtenDate":"2022","open":"2022","content":"423432423","picture":null,"height":"234234","weight":"23423","comment":"test"},
  {"articleId":1002,"title":"테스트","writtenDate":"2022","open":"2022","content":"게시물","picture":null,"height":"170","weight":"60","comment":"test"}
    ];
    console.log('articles prototype 타입: ' + Object.prototype.toString.call(articles))
    setArticleList(articles)
  })
 */

  useEffect (() => { fetchArticleAPI().then(data => {
    setArticleList(data)
  } ) }, [])


  return (
    <div className='container'>
    <div text-align = "center">
      <h1>Clozet 사람들</h1>
    </div>
    {articleList.map((article: Article) => 
    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            <h5>iqeq1219</h5>
          </strong>
          <h3 className="mb-0">
            {article?.title}
          </h3>
          <div className="mb-1 text-muted">
          <h5> Nov 12 </h5>
          </div>
          <p key={article.content} className="card-text mb-auto">{article?.content}</p>
          <p className="card-text mb-auto">{article?.height} , {article?.weight}</p>
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={article.picture}></img>
        </div>
      </div>
      </div>
      </div>
      )}
    </div>
  )
}

export default AllBoardList