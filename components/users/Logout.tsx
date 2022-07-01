import React from 'react'

type Props = {
  props : (e :React.FormEvent<HTMLFormElement>) => void;
}

const Logout : React.FC<Props> = ({props}: Props) => {
  return (
    <form onSubmit={props}>
      <button className= "w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h5>Logout</h5>
      </button>
    </form>
  )
}

export default Logout