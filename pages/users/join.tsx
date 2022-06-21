import React, {useState} from "react";
import Register from '@/components/users/Join'
import { NextPage } from "next";
import Join from "@/components/users/Join";
import { joinRequest, User } from "@/modules/users/join";
import { useDispatch } from "react-redux";

const JoinPage: NextPage = () => {
    return <Join/>
}
export default JoinPage