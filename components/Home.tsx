import Style from '@/styles/Video.module.css'
const Home: React.FC = () => {
    return(
    <>
    <div id="Fade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="colorful.jpg" height = {630} className="d-block w-100" />
      <div className = "carousel-caption text-start d-none d-md-block">
      <h2>First slide label</h2>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    
    <div className="carousel-item" data-bs-interval="3000">
      <img src="stores.jpg" height = {630} className="d-block w-100"/>
      <div className = "carousel-caption text-end d-none d-md-block">
      <h1>오늘도 어떤 옷을 입을 지 고민이신가요?</h1>
        <p>100만 건의 의류 데이터를 통해 최적의 분석 데이터로 추천해드릴게요</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="shirts2.jpg" height = {630} className="d-block w-100"/>
      <div className = "carousel-caption d-none d-md-block">
      <h1>Design Your Mind , Enjoy Your Life</h1>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>

</div>
<div className="container marketing m-auto mt-5 bg-success ">
    <div className="row m-auto p-auto">
      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/>
        </svg>
        <h2>Clozet</h2>
        <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>

      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <h2>Heading</h2>
        <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>

      <div className="col-lg-4">
        <svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        <h2>Heading</h2>
        <p>And lastly this, the third column of representative placeholder content.</p>
        <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
      </div>
    </div>
    </div>
        </>)
        
}
export default Home