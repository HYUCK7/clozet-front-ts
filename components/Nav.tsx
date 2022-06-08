import 'bootstrap/dist/css/bootstrap.css'
export function Nav() {
    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light col-6">
            <a className="navbar-brand col" href="#">
                <img src="clozet-black.png" width = {100} height = {50}/>
            </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
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
        <li><a className="dropdown-item" href="#">Account Remove</a></li>
        <li><a className="dropdown-item" href="#">Account Update</a></li>
        <li><a className="dropdown-item" href="#">Find ID</a></li>
        <li><a className="dropdown-item" href="#">Find PW</a></li>
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
            </div>
        </nav>
    </div>
    )
}