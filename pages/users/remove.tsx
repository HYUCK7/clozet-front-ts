import Remove from '@/components/users/Remove'
import { useAppDispatch } from '@/hooks'
import { removeRequest } from '@/modules/users/remove'
import { NextPage } from 'next'
import React, { useState } from 'react'


const RemovePage: NextPage = () => {
  const [removeId, setRemoveId] = useState({username: ''})
  const dispatch = useAppDispatch()
  const removeChange = (e : React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name , value } = e.currentTarget
    setRemoveId ({...removeId, [name] : value})
  }
  
  const removeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`삭제 아이디 : ${JSON.stringify(removeId)}`)
    dispatch(removeRequest(removeId))
  }
  return (
    <Remove handleChange = {removeChange} handleSubmit = {removeSubmit}/>
  )
}
export default RemovePage