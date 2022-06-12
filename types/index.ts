import { RefObject } from "react";

export interface IRegister{
    userName:  string
    password:  string
    name:  string
    email: string
    //regDate: string
    //token: string
    //roles: string[]
}
export interface IDivPosition {
    divRef: RefObject<HTMLDivElement>;
  }