import React from 'react'
import {Form, Input } from 'antd'
import {Link} from 'react-router-dom'
import '../styles/register.css'
export default function Register() {
  const onFinishhandle =(value)=>{
     console.log(value)
  }
  return (
    
    <div className='from-container'>
      <Form layout='vertical' onFinish={onFinishhandle} className='card p-5'>
        <h1>Register Form</h1>
        <Form.Item label="Name" name="name">
          <Input type='txt' required/>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type='email' required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type='password' required/>
        </Form.Item>
        <button className='btn btn-primary' type='submit'>
          Register
        </button>
         <Link to='/login' className='m-3'>Alrady have an accoutn</Link>
      </Form>
    </div>
  )
}
