import React from 'react'
import { Box, Flex } from 'theme-ui'

import { TextLink } from './TextLink'

const Header = () => (
  <Box as="header" sx={{ width: '100%' }}>
    <Flex sx={{ flexDirection: ['column', 'row'] }}>
      <Box sx={{ flex: ['1 1 auto', '0 0 140px'], bg: 'primary.100', p: 3 }}>
        Felix Peters
      </Box>
      <Box sx={{ flex: '1 1 auto', bg: 'pink' }}>
        <TextLink to="/home">Home</TextLink>
        <TextLink to="/consulting">Consulting</TextLink>
        <TextLink to="/blog">Blog</TextLink>
        <TextLink to="/showcases">Showcases</TextLink>
      </Box>
    </Flex>
  </Box>
)

export { Header }
