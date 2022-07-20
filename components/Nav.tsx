import 'bootstrap/dist/css/bootstrap.css'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import css from "styled-jsx/css"
import JoinPage from '@/pages/users/join';
import LoginPage from '@/pages/users/login';
import LogoutPage from '@/pages/users/logout';
import Image from 'next/image';

const styled = css`
a.line:after{
    display:block;
    content: '';
    border-bottom: solid 1px black;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
    padding : 
}
a:hover:after {
    transform: scaleX(100%);
}
a.fromRight:after{ transform-origin:100% 50%; }
a.fromLeft:after{  transform-origin:  0% 50%; }

a.navItem: {
    font-size: 20rem;
}
`
    
export function Nav() {
    
    const [item, setItem] = useState(null)
    const [googleItem, setGoogleItem] = useState(null)
    useEffect (()=> {
        let item : any = localStorage.getItem('loginSuccessUser');
        setItem(item)
    },[])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <ul padding-left = '32px' margin-top = '32px' className='table-active'>
            <Link href="/">
                <Image className='navbar-brand' src="/clozet-black.svg" alt='clozet' width="200" height="50" />
            </Link>
            </ul>
            <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">    
        { item !== null ? 
    <>                         <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <strong>Closet</strong>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/closets/main">옷 추가하기</a></li>
                                    <li><a className="dropdown-item" href="/closets/top">상의</a></li>
                                    <li><a className="dropdown-item" href="/closets/bottom">하의</a></li>
                                </ul>
                            </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>People</strong>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/boards/addBoard">UPLOAD</a></li>
                                        <li><a className="dropdown-item" href="/boards/myBoardList">MY UPLOAD</a></li>
                                        <li><a className="dropdown-item" href="/boards/allBoardList">Clozet People</a></li>
                                        <li><a className="dropdown-item" href="/boards/trend">Trend</a></li>
                                    </ul>
                                </li></> : null}
                            </ul> 
                        <Link href='/common/intro'>
                            <a className='line mx-5' style={{color : 'inherit', textDecoration: 'none'}}>
                                회사 소개
                            </a>
                        </Link>
                {item === null ?
                    <Link href='/users/findAccount' >
                        <a className='line' style={{color : 'inherit', textDecoration : 'none'}}>
                            계정 찾기
                        </a>
                    </Link>
                :   <Link href='/users/mypage' >
                        <a className='line' style={{color : 'inherit', textDecoration : 'none'}}>
                            Profile
                        </a>
                    </Link>
                }
                
                <Link href='/clothes/recommand'>
                    <a className='line mx-5' style={{color : 'inherit',textDecoration : 'none'}} >Clozet 이용하기</a>
                </Link>
                <style jsx>{styled}</style>
            <div>
                {item === null ?
                <div >
                <button type = 'button' className='shadow-lg btn btn-dark ' data-bs-toggle="modal" data-bs-target="#modal1">
                <h5>Register</h5>
                </button>
                <div className="modal fade" id="modal1"tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">JOIN</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                     <JoinPage/>
                 </div>
                </div>
            </div>
            </div>
            
            &nbsp;
            <button  type = 'button' className='shadow-lg btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal2">
                <h5>Login</h5>
                </button>
                <div className="modal fade" id="modal2"tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel2">LOGIN</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                     <LoginPage/>
                 </div>
                </div>
            </div>
            </div>
            
            &nbsp;
            </div>:
            
            <div>
                <LogoutPage/>
            </div>
            }
        </div>
        </div>
    </div>
    
    </nav>
    
    )
}