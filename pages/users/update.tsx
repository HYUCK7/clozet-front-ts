import Update from '@/components/users/Update'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type Props = {}

const updatePage : NextPage = (props: Props) => {
  const [data, setData] = useState([])
  //const [id, setId] = useState("")
  const dispatch = useAppDispatch

  useEffect(() => {
    //dispatch(fetchUserRequest())
  })



  const { userInfo } = useAppSelector(state => state.login);
  console.log(JSON.stringify(userInfo))

  useEffect(() => {setData(userInfo)})

  return (
    <Update/>
  )
}

export default updatePage