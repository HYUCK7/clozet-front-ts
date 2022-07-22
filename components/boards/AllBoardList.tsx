import { Props } from '@/pages/boards/allBoardList'
import { Article } from '@/modules/types'
import React from 'react'
import HeartButton from '../common/HeartButton'

const AllBoardList: React.FC<Props> = ({list, onChange, onSubmit, loadArticleId } : Props) => {
  return (
    <form onSubmit={onSubmit}>
    <div className='container'>
    <div>
      <h1 className='text-center'># Clozet 사람들</h1>
    </div>
    <br/>
    {list.map((article: Article) => 
    
    <div className="row mb-2">
    <div className="col-12">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">

          <strong className="d-inline-block mb-2 text-primary">
            <h5>{article?.nickname}</h5>
          </strong>
          <input type = 'hidden' name = 'articleId' value = {article.articleId}/>
          <h3 className="mb-0">
            {article?.title}
          </h3>
          <div className="mb-1 text-muted">
          <h5> {article?.writtenDate} </h5>
          </div>
          <p key={article.content} className="card-text mb-auto">{article?.content}</p>
          <p className="card-text mb-auto">{article?.height}cm , {article?.weight}kg</p>
          
        </div>
        <div className="col-auto d-none d-lg-block">
          <img src={article?.picture}></img>
        </div>
        <div className='p-4'>
        <div className="input-group mb-3">
          <input onChange={onChange} name='comment' type="text" className="form-control" placeholder="댓글을 입력해 소통해보세요."  aria-describedby="button-addon2"/>
          <button onClick={()=>{loadArticleId(article.articleId)}} className="btn btn-outline-secondary" type= "submit" id="button-addon2">
            <h5>입력</h5>
          </button>
          
        <div>
          {'댓글 받아올 곳'}
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

/** 
export const getServerSideProps = async () => {
  try {
    const res: AxiosResponse = await axios.get(`${SERVER}/articles/findAll`, {headers})
    if(res.status === 200){
      
    }
  }
}
*/
export default AllBoardList