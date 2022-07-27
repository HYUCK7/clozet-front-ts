import * as React from 'react';
import Link from 'next/link'

export default function Footer () {
  const PATH = process.env.NEXT_PUBLIC_WEBPATH
  return(
    <div className='b-example-divider'>
    <div className="container">
  <footer className="py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link px-2 text-muted">Home</a>
        </Link></li>
      <li className="nav-item">
        <Link href={`${PATH}/boards/addQna`}>
          <a className="nav-link px-2 text-muted">QNA</a>
        </Link></li>
      <li className="nav-item">
        <Link href={`${PATH}/boards/myQnaList`}>
          <a className="nav-link px-2 text-muted">내 QNA 보기</a>
        </Link></li>
      <li className="nav-item">
        <Link href={`${PATH}/boards/allQnaList`}>
          <a  className="nav-link px-2 text-muted">모든 QNA 보기</a></Link>
        </li>
    </ul>
    <p className="text-center text-muted">&copy; 2022 Clozet, Inc</p>
  </footer>
</div>
      </div>
      
  )
}
