import React from 'react'

import { Layout } from '../components/Layout'
import { SEO } from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
  </Layout>
)

// eslint-disable-next-line import/no-default-export
export default IndexPage
