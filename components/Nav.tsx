import 'bootstrap/dist/css/bootstrap.css'
import React, {useState} from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import JoinPage from '@/pages/users/join';
import LoginPage from '@/pages/users/login';


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
        Closet
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/closets/main">MAIN</a></li>
        <li><a className="dropdown-item" href="/closets/top">TOP</a></li>
        <li><a className="dropdown-item" href="/closets/bottom">BOTTOM</a></li>
        <li><a className="dropdown-item" href="/closets/best">BEST</a></li>
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        MyWeek
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/closets/thisWeek">This Week</a></li>
        <li><a className="dropdown-item" href="/closets/lastWeek">Last Week</a></li>
        <li><a className="dropdown-item" href="/clothes/optionRecommand">Special</a></li>
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        UserPage
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/users/remove">Account Remove</a></li>
        <li><a className="dropdown-item" href="/users/update">Account Update</a></li>
        <li><a className="dropdown-item" href="/users/findAccount">Find Account</a></li>
    </ul>
    </li>

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"  aria-expanded="false">
        People
        </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a className="dropdown-item" href="/articles/addBoard">UPLOAD</a></li>
        <li><a className="dropdown-item" href="/boards/myBoardList">MY UPLOAD</a></li>
        <li><a className="dropdown-item" href="/boards/allBoardList">Clozet People</a></li>
        <li><a className="dropdown-item" href="/boards/trend">Trend</a></li>
    </ul>
    </li>
        </ul>
                <Link href='/clothes/recommand'>
                <button className='btn btn-datk'>
                    <a>Clozet 이용하기</a>
                </button>
                </Link>

                <button  type = 'button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal1">
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
            <button  type = 'button' className='btn btn-dark' data-bs-toggle="modal" data-bs-target="#modal2">
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
        </div>
    </div>
    
    
    </nav>
    )
}