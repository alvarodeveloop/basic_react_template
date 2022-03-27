import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import './authLayout.scss'

const AuthLayout: React.FC = ({ children, ...props }) => {
  const authSession = useSelector((state: RootState) => state.authSession)
  return authSession.isAuthenticated ? (
    <Navigate to="/home" />
  ) : (
    <Container fluid className="mainLayout">
      {children}
    </Container>
  )
}

AuthLayout.propTypes = {}

export default AuthLayout
