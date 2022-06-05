import Register from "@/components/user/Register";
import type { NextPage } from "next";
import { FormEvent } from "react";

const Home: NextPage = () => {
  return(
    <Register reg={function (e: FormEvent<Element>, formData: any): void {
      throw new Error("Function not implemented.");
    } }/>
  )
}
export default Home