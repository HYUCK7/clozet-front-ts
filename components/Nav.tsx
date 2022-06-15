import 'bootstrap/dist/css/bootstrap.css'
import Login from './users/Login'
import LoginPage from '@/pages/user/login'
import React, {useState} from 'react'
import RegisterPage from '@/pages/user/register'
import Link from 'next/link'
export function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link href="/">
            <a className="navbar-brand col" >
                <img src="clozet-black.svg" style={{width:90+"px"}}/>
            </a>
            </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        AI
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/ai/addCloset">로그인 전</a></li>
        <li><a className="dropdown-item" href="/ai/ootd">로그인 후</a></li>
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        Closet
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/closet/main">MAIN</a></li>
        <li><a className="dropdown-item" href="/closet/top">TOP</a></li>
        <li><a className="dropdown-item" href="/closet/bottom">BOTTOM</a></li>
        <li><a className="dropdown-item" href="/closet/best">BEST</a></li>
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        MyWeek
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/mypage/thisWeek">This Week</a></li>
        <li><a className="dropdown-item" href="/mypage/lastWeek">Last Week</a></li>
        <li><a className="dropdown-item" href="/mypage/myOotd">My OOTD</a></li>
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        UserPage
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/user/remove">Account Remove</a></li>
        <li><a className="dropdown-item" href="/user/update">Account Update</a></li>
        <li><a className="dropdown-item" href="/user/findId">Find ID</a></li>
        <li><a className="dropdown-item" href="/user/findPw">Find PW</a></li>
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        People
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/people/addBoard">UPLOAD</a></li>
        <li><a className="dropdown-item" href="/people/boardList">MY UPLOAD</a></li>
        <li><a className="dropdown-item" href="/people/likeList">Clozet People</a></li>
        <li><a className="dropdown-item" href="/people/trend">Trend</a></li>
    </ul>
    </li>
        </ul>

            <button  type = 'button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal">
                <h5>Login</h5>
                </button>
            <div className="modal fade" id="modal"tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                     <h5 className="modal-title" id="exampleModalLabel">LOGIN</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                 </div>
                 <div className="modal-body">
                     <LoginPage/>
                 </div>
                </div>
            </div>
            </div>
            &nbsp;
            <button  type = 'button' className='btn btn-outline-dark' data-bs-toggle="modal" data-bs-target="#modal1">
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
                     <RegisterPage/>
                 </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </nav>
    )
}