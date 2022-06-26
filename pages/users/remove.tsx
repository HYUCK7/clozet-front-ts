import Remove from '@/components/users/Remove'
import { NextPage } from 'next'
import React from 'react'

type Props = {}

const removePage: NextPage = (props: Props) => {
  //const onClickeDelete = (e: React.FormEvent<HTMLFormElement)
  return (
    <Remove />
  )
}

export default removePage