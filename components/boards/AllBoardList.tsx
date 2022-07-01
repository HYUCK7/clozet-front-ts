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
/** 
const RecStyle: CSSProperties = {
  width: "80%",
  height: "300px",
  borderRadius: "21px 21px 0 0"
}
*/

const AllBoardList: React.FC = () => {
  const [articleList, setArticleList] = useState<Array<Article>>([])

  /** 
  useEffect(() => {
    let articles: Array<Article> = [
      {"articleId":1001,"title":"234234","writtenDate":"2022","open":"2022","content":"423432423","picture":null,"height":"234234","weight":"23423","comment":"test"},
  {"articleId":1002,"title":"테스트","writtenDate":"2022","open":"2022","content":"게시물","picture":null,"height":"170","weight":"60","comment":"test"}
    ];
    console.log('articles prototype 타입: ' + Object.prototype.toString.call(articles))
    setArticleList(articles)
  })
 */

  /** 
  
  useEffect( () => {
    const res = []
    const articles: Array<Article> = res.concat.fetchArticle()
    setArticleList(articles)
  })
  */
  const SERVER = 'http://127.0.0.1:8080'

  const test = async () => {
    try{
      console.log(`API 진입`)
      const response : AxiosResponse = await axios.get(`${SERVER}/articles/findAll`)
      console.log(`서버 응답 + ${JSON.stringify(response.data)}`)
      return response.data
  } catch(err) {
      return err;
  }

  }
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
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="5%" y="50%" fill="#eceeef" dy=".3em">사진 데이터 들어갈 예정</text></svg>
        </div>
      </div>
      </div>
      </div>
      )}
    </div>
  )
}

export default AllBoardList