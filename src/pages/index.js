import React from "react"
import { Link } from "gatsby"

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
  <Layout>
    <Head title={"Home"} />
  <div>
    <h1>Hello</h1>
    <h2>This is Roshan Rai a full stack developer</h2>
    <p>Need a Developer ? <Link to='/contact'>contact me</Link></p>
  </div>
  </Layout>
)

export default IndexPage
