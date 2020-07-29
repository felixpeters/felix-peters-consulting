/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Link as BaseLink } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

const InternalLink = () => ({ to, children }) => (
  <BaseLink as={GatsbyLink} to={to}>
    {children}
  </BaseLink>
)

InternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

const OutgoingLink = () => ({ to, children, target }) => (
  <BaseLink as="a" href={to} rel="noopener" target={target}>
    {children}
  </BaseLink>
)

OutgoingLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  target: PropTypes.string,
}

OutgoingLink.defaultProps = {
  target: '_blank',
}

const TextLink = (props) => {
  const { to } = props
  const internal = /^\/(?!\/)/.test(to)

  return internal ? <InternalLink {...props} /> : <OutgoingLink {...props} />
}

TextLink.propTypes = {
  to: PropTypes.string.isRequired,
}

export { TextLink }
