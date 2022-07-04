import Home from "@/components/Home";
import type { NextPage } from "next";
/**
 * 
 * 콜라보 테스트
 * 2022-06-21
 * Park...


export const getStaticProps = () => ({
  props: {
    hello: 'world',
    random: Math.random()
  }
})

export default (props:any) => <p>{JSON.stringify(props)}</p>
 * 
*/

const HomePage: NextPage = () => {
  
  return(
    <Home/>
  )
}
export default HomePage



