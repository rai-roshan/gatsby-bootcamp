const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    // create a new node field for markdow files/data/node.
    if(node.internal.type === "MarkdownRemark")
    {
        //console.log(JSON.stringify(node, undefined , 4));
        const slug = path.basename(node.fileAbsolutePath , '.md');
        console.log("----------------slug----------- : ", slug);

        createNodeField({
            node,
            name : 'slug',
            value : slug
        });
    }
  };

  module.exports.createPages = async ({ graphql , actions })=>{
      const { createPage } = actions;

      //path to the template for the page
      const blogTemplate = path.resolve('./src/templates/blog.js');

      //query to get dynamic data for the page
      const res = await graphql(`
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
    
    console.log("-----------res : ", res);
    res.data.allContentfulBlogPost.edges.forEach( edge=>{
        //here we create page 
        //1. with path for template
        //2. "path" is the URL for page
        //3. context is dynamic data for the page and parameter for the grapgql query
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug
            }
        })
    });
  };