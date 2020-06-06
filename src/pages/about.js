import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const About = ()=>{
    return(
        <Layout>
        <Head title={ "About" } />
        <div>
            <h1>About</h1>
            <h2>This is the abot page</h2>
            <p>You can find me <Link to='/contact'>here</Link></p>
        </div>
        </Layout>
    )
};

export default About;