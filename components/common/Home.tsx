declare const aos: any
import Style from '@/styles/Video.module.css'
import Image from 'next/image'
import Link from 'next/link'
import css from "styled-jsx/css"
import "aos/dist/aos.css";
import { useEffect } from 'react';

declare const AOS : any;

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
        background-image: url('/dowalk.png')
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
    .image {
      float : right
    }
`

  useEffect(() => {
  AOS.init();
    })
    return(
    <>
    <div id="Fade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      <img src="colorful.jpg" height = {600} className="image-fluid d-block w-100" alt='colorful'/>
      <div className = "carousel-caption text-start d-none d-md-block">
      <h2>옷장 서비스, Clozet 입니다.</h2>
        <p>When they go low, We go high</p>
      </div>
    </div>
    
    <div className="carousel-item" data-bs-interval="3000">
      <img src="stores.jpg" height = {600}  className="d-block w-100" alt='store'/>
      <div className = "carousel-caption text-end d-none d-md-block">
      <h1>오늘도 어떤 옷을 입을 지 고민이신가요?</h1>
        <p>의류 분석을 통해서, 편하게 옷을 관리하세요</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="shirts2.jpg" height = {600} className="d-block w-100" alt='shirts'/>
      <div className = "carousel-caption d-none d-md-block">
      <h1>Design Your Mind , Enjoy Your Life</h1>
        <p>편하게 코디하고, 편하게 찾으세요</p>
      </div>
    </div>
  </div>
</div>
<div className='contents'>
  <section className='wrapper'>
      <article className='product0' data-aos = "fade-up" data-aos-delay = "50" >
        <p>내 옷을 클로젯에 등록하고 관리해요.</p>
        <p><Link href="/closets/main"><a className="btn btn-secondary" >내 Closet 만들러가기 `&raquo;`</a></Link></p>
        <img  src='dowalk.png' alt='dowalk' height={250}/>
      </article>

      <article className='product1' data-aos = "fade-right" data-aos-delay = "50">
        <p>내 복장을 클로젯 사람들과 공유해요.</p>
        <p><Link href="/boards/addBoard"><a className="btn btn-secondary">나의 복장 Upload 하기 `&raquo;`</a></Link></p>
        <img src = 'dochilling.png' className='image' alt='dochilling' height={250} width={320}/>
      </article>

      <article className='product2' data-aos = "fade-left" data-aos-delay = "50" >
        <p>클로젯을 이용하는 여러 사람들의 복장을 구경해요.</p>
        <p><Link href="/boards/allBoardList"><a className="btn btn-secondary" >Clozet People 보러 가기 `&raquo;`</a></Link></p>
       
        <img  src='dothink.png' alt='dothink' height={250}/>
      </article>

      <article className='product5' data-aos = "zoom-out-up" data-aos-delay = "50">
        <p>Clozet에 회원가입 하러 가볼까요?</p>
        <p><Link href="/users/join"><a className="btn btn-secondary" >Clozet 회원가입</a></Link></p>
        <img className='image-fluid' src='dosplint.png' alt='dosplint'/>
      </article>

  </section>
  <style jsx>{styled}</style>
</div>
</>)
        
}
export default Home