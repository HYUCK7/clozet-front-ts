import Style from '@/styles/Video.module.css'
const Home: React.FC = () => {
    return(
    <>
    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="4000">
      <img src="stores.jpg" className="d-block w-100" alt="stores.jpg"/>
      <div className = "carousel-caption d-none d-md-block">
      <h2>First slide label</h2>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src="peoples.jpg" className="d-block w-100" alt="shirts.svg"/>
      <div className = "carousel-caption d-none d-md-block">
      <h1>오늘도 어떤 옷을 입을 지 고민이신가요?</h1>
        <p>100만 건의 의류 데이터를 통해 최적의 분석 데이터로 추천해드릴게요</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="4000">
      <img src="shirts2.jpg" className="d-block w-100" alt="tshirts.jpg"/>
      <div className = "carousel-caption d-none d-md-block">
      <h2>First slide label</h2>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>)
        
}
export default Home