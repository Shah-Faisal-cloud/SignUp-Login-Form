import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [action, setAction] = useState("Login");
  function changeAction(state) {
    setAction(state);
  }

  return (
    <>
      <form action="#" className="form">
        <FormHeader action={action} />
        <div className="form-inputs">
          {action === "Sign Up" && <FormInput icon="fa-user" type="text" placeholder="Name" />}
          <FormInput icon="fa-envelope" type="email" placeholder="Email" />
          <FormInput icon="fa-lock" type="password" placeholder="Password" />
          {action === "Login" && <LostPassword />}
        </div>
        <div className='form-btn'>
          <Button label="Sign Up" action={action} changeAction={changeAction} />
          <Button label="Login" action={action} changeAction={changeAction} />
        </div>
      </form >
    </>
  )
}

function FormHeader({ action }) {
  return (
    <div className="form-header">
      <h1>{action}</h1>
    </div>
  )
}

function FormInput({ icon, type, placeholder }) {
  return (
    <div className="input-wrapper">
      <i className={`fa-solid ${icon}`}></i>
      <input type={type} className="input" placeholder={placeholder} />
    </div>
  )
}

function LostPassword() {
  return (
    <div className="lost-password">
      <p>Lost Password? <a href='#'>Click Here!</a></p>
    </div>
  )
}

function Button({ label, action, changeAction }) {
  return (
    <button className={`button ${action === label && "active"}`} onClick={() => { changeAction(label) }}>{label}</button>
  )
}

