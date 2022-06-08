import Style from '@/styles/Video.module.css'
const Home: React.FC = () => {
    return(
    <>
    <div >
        <video className={Style.video} autoPlay muted preload='auto'
            playsInline width={1640} height={700}>
            <source src= "1.mp4" type ="video/mp4"></source>
        </video>
        <div>
        <h1>안녕하세요 Clozet 입니다.</h1>
        </div>
        <div>
            <h1>오늘은 어떤 옷을 입어볼까요?</h1>
        </div>
            <h1>(스크롤을 아래로 내리면 기능에 대한 설명할 예정)</h1>
        </div>
        </>)
        
}
export default Home