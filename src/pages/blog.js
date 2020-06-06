import React from 'react';
import { graphql , useStaticQuery , Link } from 'gatsby';

import Layout from '../components/layout';
import blogsStyles from './blog.module.scss';
import Head from '../components/head';

const Blog = ()=>{

    //slug is used for url and also as a key to filter posts
    const posts = useStaticQuery(graphql`
    query{
        allContentfulBlogPost(sort : {
          fields : publishedDate,
          order : DESC
        }){
          edges{
            node{
              title,
              slug,    
              publishedDate(formatString : "YYYY MMMM DD")
            }
          }
        }
      }`);

    console.log("posts: ",posts);

    return(
        <Layout>
        <Head title="Blog" />
        <div >
            <h1>Blog</h1>
            <h2>Posts will be shown here</h2>

            <ol className={ blogsStyles.posts }>
            {
                posts.allContentfulBlogPost.edges.map(post=>(
                <li 
                className={ blogsStyles.post } 
                key={ post.node.slug }>
                    <Link to={`/blog/${post.node.slug}`}>
                        <h2>{ post.node.title }</h2>
                        <p>{ post.node.publishedDate }</p>
                    </Link>
                </li>))
            }
            </ol>

        </div>
        </Layout>
    )
};

export default Blog;