import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import { Header } from './Header'

import 'normalize.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">{children}</Box>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
