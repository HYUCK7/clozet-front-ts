import 'bootstrap/dist/css/bootstrap.css'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import css from "styled-jsx/css"
import JoinPage from '@/pages/users/join';
import LoginPage from '@/pages/users/login';
import LogoutPage from '@/pages/users/logout';

const styled = css`

  .hoverColor h5{
    display : block;
    color : rgb(37, 37, 37);
    
    padding : 10px 5px;
}
.hoverColor h5:hover{
    transform: scale(1.05);
    transition-duration: 0.5s;
}

`
    
export default function Nav() {
    const PATH = process.env.NEXT_PUBLIC_WEBPATH
    const [item, setItem] = useState(null)
    useEffect (()=> {
        let item : any = localStorage.getItem('loginSuccessUser');
        setItem(item)
    },[])
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <ul padding-left = '32px' margin-top = '32px' className='table-active'>
            <Link href="/">
                <img className='navbar-brand' src="/clozet-black.png" alt='clozet' width="100" height="60" />
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
                                    <li><Link href={`${PATH}/closets/main`}><a className="dropdown-item">??? ????????????</a></Link></li>
                                    <li><Link href={`${PATH}/closets/top`}><a className="dropdown-item" >??????</a></Link></li>
                                    <li><Link href={`${PATH}/closets/bottom`}><a className="dropdown-item" >??????</a></Link></li>
                                </ul>
                            </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <strong>People</strong>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><Link href={`${PATH}/boards/addBoard`}><a className="dropdown-item" >UPLOAD</a></Link></li>
                                        <li><Link href={`${PATH}/boards/myBoardList`}><a className="dropdown-item">MY UPLOAD</a></Link></li>
                                        <li><Link href={`${PATH}/boards/allBoardList`}><a className="dropdown-item" >Clozet People</a></Link></li>
                                    </ul>
                                </li></> : <h4>????????? ??? ?????????????????? !</h4>}
                            </ul> 
                        
                        <Link href={`${PATH}/common/intro`}>
                            <a className='hoverColor mx-5' style={{color : 'inherit', textDecoration: 'none'}}>
                                <h5 >?????? ??????</h5>
                            </a>
                        </Link>
                {item === null ?
                    <Link href={`${PATH}/users/findAccount`}>
                        <a className='hoverColor mx-5' style={{color : 'inherit', textDecoration : 'none'}}>
                            <h5>?????? ??????</h5>
                        </a>
                    </Link>
                :   <Link href={`${PATH}/users/mypage`} >
                        <a className='hoverColor mx-5' style={{color : 'inherit', textDecoration : 'none'}}>
                            <h5>Profile</h5>
                        </a>
                    </Link>
                }
                
                
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