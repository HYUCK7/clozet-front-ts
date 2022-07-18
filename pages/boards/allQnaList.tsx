import React from 'react'
import AllQnaList from '@/components/boards/AllQnaList'
import axios, { AxiosResponse } from 'axios'

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",
}

export default function AllQnaListPage() {
  return (
    <AllQnaList/>
  )
}
