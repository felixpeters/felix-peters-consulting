import React from 'react'
import { Box, Flex, Link as ThemeLink } from 'theme-ui'
import { Link } from 'gatsby'

const Header = () => (
  <Box as="header" sx={{ width: '100%', bg: 'primary.100' }}>
    <Flex sx={{ flexDirection: ['column', 'row'] }}>
      <Box sx={{ flex: ['1 1 auto', '0 0 140px'], p: 3 }}>Felix Peters</Box>
      <Box sx={{ flex: '1 1 auto' }}>
        <Flex
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'flex-end',
            alignItems: 'stretch',
            alignContent: 'center',
          }}
        >
          <ThemeLink as={Link} variant="nav" to="/home">
            Home
          </ThemeLink>
          <ThemeLink as={Link} variant="nav" to="/consulting">
            Consulting
          </ThemeLink>
          <ThemeLink as={Link} variant="nav" to="/blog">
            Blog
          </ThemeLink>
          <ThemeLink as={Link} variant="nav" to="/showcase">
            Showcase
          </ThemeLink>
        </Flex>
      </Box>
    </Flex>
  </Box>
)

export { Header }
