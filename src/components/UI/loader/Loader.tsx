import React from 'react'
import loaderImage from '../../public/loader.gif'
import PropTypes from 'prop-types'
import './Loader.scss'
import { LoaderInterface } from './Loader.interface'

const Loader: React.FC<LoaderInterface> = ({ message }) => {
  return (
    <>
      <div className="loaderContainer">{message ?? 'Cargando'}</div>
    </>
  )
}

Loader.propTypes = {
  message: PropTypes.string,
}

export default Loader
