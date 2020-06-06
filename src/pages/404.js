import React from "react"

import Layout from '../components/layout';
import Head from '../components/head';

const NotFoundPage = () => (
  <Layout>
  <Head title="404" />
  <div>
    <h1>404</h1> 
    <p>The Page U looking for is not available</p>
  </div>
  </Layout>
);

export default NotFoundPage
