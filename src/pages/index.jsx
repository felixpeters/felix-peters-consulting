/* eslint-disable react/prop-types */
import React from 'react'
import { Link, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { Image } from '../components/Image'
import { SEO } from '../components/Seo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>{`${data.site.siteMetadata.description}`}</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to &quot;Using TypeScript&quot;</Link>
  </Layout>
)

// eslint-disable-next-line import/no-default-export
export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        description
      }
    }
  }
`
