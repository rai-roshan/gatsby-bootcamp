//This is a component created by createPages() API
//when this page is created 
//it can be accesed by its url given in createPages().
//Context data for this page. Passed as props to the component props.pageContext as well as to the graphql query as graphql arguments.
//and the result of the graphql querry is acessed by props
//becose its a component of createPages , its graphql query is different
//and donot use useStaticQuery and is exported

import React from 'react';
import { graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Layout from '../components/layout';
import Head from '../components/head';

//the $slug comes from the context of createPage
export const query = graphql`
    query($slug : String!)
    {
      contentfulBlogPost(slug:{ eq: $slug })
      {
        title,
        slug,
        publishedDate(formatString : "YYYY MMMM DD"),
        body{
          json
        }
      }
    }`; 

//the result of this component graphql query can be accessed as props
const Blog = (props)=>{

    const options = {
      renderNode : {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
          const alt = node.data.target.fields.title['en-US'];
          const url = node.data.target.fields.file['en-US'].url;
          console.log("alt : " , alt);
          console.log("src : " , url );
          return <img alt={ alt } src={ url }/>
        }
      }
    };

    return (
    <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1>{ props.data.contentfulBlogPost.title }</h1>
            <p>{ props.data.contentfulBlogPost.publishedDate }</p>
            { documentToReactComponents(props.data.contentfulBlogPost.body.json , options ) }
    </Layout>);
};

export default Blog;