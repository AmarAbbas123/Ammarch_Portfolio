import React from 'react'
import "./Form.css"


const FormComponent = () => {
  const [formStatus, setFormStatus] = React.useState('Submit Now')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submit')
    const { name,number, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      number:number.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          
          <input style={{
            width:"60%"
          }} className="form-control" type="text" id="name" placeholder='Your name' required />
        </div>
        <div className="mb-3">
          
          <input style={{
            width:"60%"
          }}  className="form-control" type="number" id="number" placeholder='Your Phone' required />
        </div>
        <div className="mb-3">
          
          <input style={{
            width:"60%"
          }}  className="form-control" type="email" id="email" col={2} placeholder='Your email' required />
        </div>
        <div className="mb-3">
          
          <textarea className="form-control" id="message" rows={5} placeholder='Write your message here' required />
        </div>
        
        <button className="btns" style={{
                  
                  
                  padding:"7px 15px 7px 15px",
                 color:"#262626",
                  fontFamily:'Open Sans, sans-serif'
                }} type="submit">
                {formStatus}</button>
      </form>
    </div>
  )
}
export default FormComponent