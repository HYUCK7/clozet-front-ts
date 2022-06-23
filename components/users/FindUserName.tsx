import React from 'react'

type Props = {}

const FindUserName: React.FC = (props: Props) => {
  return (    
    <form>
      <h4 className="h4 text-center mb-3 fw-normal">내 계정 찾기</h4>
        <div className='container'>
          <div className=' row justify-content-between '>
            <div className='col-md-6 auto'>
            <h4 className="h4 text-center mb-3 fw-normal">내 계정 찾기</h4>
              <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input type="name" className="form-control" id="inputName" placeholder='Name'/>
        <label htmlFor="floatingInput"><h5>가입하신 이름</h5></label>
      </div>

      <div className="form-floating">
        <input type="email" className="form-control" id="inputEmail" placeholder='E-mail'/>
        <label htmlFor="floatingInput"><h5>가입한 E-mail</h5></label>
      </div>

      <div className="form-floating">
        <input type="phone" className="form-control" id="inputPhone" placeholder="Phone Number" />
        <label htmlFor="floatingPassword"><h5>Phone Number</h5></label>
      </div>

      <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h4>다음</h4>
        </button>
          </div>
        </div>

      <div className='col-md-6 auto'>
        <h4 className="h4 text-center mb-3 fw-normal">내 계정 찾기</h4>
          <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input type="name" className="form-control" id="inputName" placeholder='Name'/>
        <label htmlFor="floatingInput"><h5>가입하신 이름</h5></label>
      </div>

      <div className="form-floating">
        <input type="email" className="form-control" id="inputEmail" placeholder='E-mail'/>
        <label htmlFor="floatingInput"><h5>가입한 E-mail</h5></label>
      </div>

      <div className="form-floating">
        <input type="phone" className="form-control" id="inputPhone" placeholder="Phone Number" />
        <label htmlFor="floatingPassword"><h5>Phone Number</h5></label>
      </div>

      <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h4>다음</h4>
        </button>
              </div>
            </div>
          </div>
       </div>
    </form> 
    
    )
}

export default FindUserName