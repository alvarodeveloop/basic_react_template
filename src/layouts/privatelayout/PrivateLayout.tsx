import React from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const PrivateLayout: React.FC = ({ children, ...props }) => {
  const authSession = useSelector((state: RootState) => state.authSession)
  return authSession.isAuthenticated ? <Container fluid>{children}</Container> : <Navigate to="/" />
}

PrivateLayout.propTypes = {}

export default PrivateLayout
