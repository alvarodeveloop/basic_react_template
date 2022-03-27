import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Routes, Route } from 'react-router-dom'
import PrivateRoutes from './private.routes'

const PrivateRoutesComponent: React.FC = (props) => {
  return (
    <Suspense fallback={'loading.....'}>
      <Routes>
        {PrivateRoutes.map((route, index) => (
          <Route path={route.path} element={<route.Child />} key={'route-' + index} />
        ))}
      </Routes>
    </Suspense>
  )
}

PrivateRoutesComponent.propTypes = {}

export default PrivateRoutesComponent
