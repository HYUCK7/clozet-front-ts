import Style from '@/styles/Video.module.css'
import css from "styled-jsx/css"
const Home: React.FC = () => {
  const styled = css`
    .contents {
        height: 100%;
        margin: 10% 15%;
    }
    .wrapper {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    .wrapper h1 {
        font-size: 40px;
    }
    .wrapper p {
        font-size: 20px;
    }
    .product0, .product1, .product2, .product3, .product4 {
        height: 500px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
    }
    .product0 {
        background-image;
        background-size: 600px;
        background-position: 80% center;
        text-align: 40%;
    }
    .product1 p, .product3 p{
        text-align: right;
    }
    .product5 {
        text-align: center;
        margin: auto;
        margin-bottom: 10%;
    }
    .divButton {
        align-items: center;
    }
    .btn {
        font-size: 20px;
        padding: 15px 30px;
        background-color: white;
        color: rgb(51, 18, 110);
        border: 1px solid rgb(121, 91, 177);
        border-radius: 10px;
        letter-spacing: 4px;
        font-family: sans-serif;
        transition: all 0.4s;
    }
    .btn:focus {
        outline: none;
    }
    .btn:hover {
        border: rgb(121, 91, 177);
        background-color: rgb(121, 91, 177);
        color: white;
    }
`
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
<div className='contents'>
  <section className='wrapper'>

      <article className='product0'>
        <p>Use Closet
        클로젯을 이용하세요 제발 좀</p>
        <p><a className="btn btn-secondary" href="/clothes/addCloth">내 Closet 만들러가기 &raquo;</a></p>
      </article>

      <article className='product1'>
        <p>Use Closet
        클로젯을 사용하세요 제발 좀</p>
        <p><a className="btn btn-secondary" href="/clothes/addCloth">내 Closet 만들러가기 &raquo;</a></p>
      </article>

      <article className='product2'>
        <p>Use Closet
        클로젯을 사용하세요 제발 좀</p>
        <p><a className="btn btn-secondary" href="/clothes/addCloth">내 Closet 만들러가기 &raquo;</a></p>
      </article>

      <article className='product5'>
        <p>Use Closet
        클로젯을 사용하세요 제발 좀</p>
        <p><a className="btn btn-secondary" href="/clothes/addCloth">Clozet 회원가입</a></p>
      </article>

  </section>
  <style jsx>{styled}</style>
</div>
</>)
        
}
export default Home