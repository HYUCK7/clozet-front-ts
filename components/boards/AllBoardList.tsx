import React, { CSSProperties } from 'react'

type Props = {
  data:{
    title? : string,
    content?: string,
    height?: string,
    weight?: string,    
  }
}
/** 
const RecStyle: CSSProperties = {
  width: "80%",
  height: "300px",
  borderRadius: "21px 21px 0 0"
}
*/

const AllBoardList: React.FC<Props> = ({data}) => {
  return (
    <div className='container'>
    <div text-align = "center">
      <h1>Clozet 사람들</h1>
    </div>

    <div className="row mb-2">
    <div className="col-md-6">
      <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">
            <h5>iqeq1219</h5>
            </strong>
          <h3 className="mb-0">
            {data?.title}
          </h3>
          <div className="mb-1 text-muted">
          <h5> Nov 12 </h5>
          </div>
          <p className="card-text mb-auto">{data?.content}</p>
          <p className="card-text mb-auto">{data?.height} , {data?.weight}</p>
        </div>
        <div className="col-auto d-none d-lg-block">
          <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="5%" y="50%" fill="#eceeef" dy=".3em">사진 데이터 들어갈 예정</text></svg>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default AllBoardList