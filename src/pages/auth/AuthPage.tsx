import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Button, Form } from 'react-bootstrap'
import './AuthPage.scss'
import Input from '../../components/UI/input'
import { toast } from 'react-toastify'
import CustomButton from '../../components/UI/button/CustomButton'

const AuthPage: React.FC = (props) => {
  const [globalState, setGlobalState] = useState({
    formValue: {
      email: '',
      password: '',
    },
    validateForm: false,
  })

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setGlobalState({
      ...globalState,
      formValue: {
        ...globalState.formValue,
        [name]: value,
      },
    })
  }

  //make submitFunction
  const submitFunctionHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
        console.log("aqui");
        
        try {
            const form = e.currentTarget;
            if (form.checkValidity() === false) {
                e.stopPropagation();
                setGlobalState({ ...globalState, validateForm: true });
                return
            }
        }catch(error : unknown){

        }
    
  }

  return (
    //create react-bootstrap login form
    <Row className="mainContainer">
      <Col xs={12} sm={10} xxl={10}>
        <h3 className='text-center titleColor'>Login</h3>
        <Form onSubmit={submitFunctionHandler} noValidate validated={globalState.validateForm}>
          <Input
            label="Email"
            type="email"
            name="email"
            required
            placeholder="Introduzca su email"
            onChange={onChangeHandler}
            value={globalState.formValue.email}
            messageErrors={['El email es requerido', 'El email no es válido']}
          />
          <Input
            label="Password"
            type="password"
            name="password"
            required
            placeholder="Introduzca su password"
            onChange={onChangeHandler}
            value={globalState.formValue.password}
            messageErrors={['El password es requerido']}
          />
          <div className="d-grid gap-2">
            <CustomButton size='lg' block type='submit' >Submit</CustomButton>
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default AuthPage
