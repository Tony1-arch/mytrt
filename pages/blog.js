import Head from 'next/head'

import styles from '../styles/Blog.module.css'


import React from 'react'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";



export default function Blog({posts}) {
  console.log('posts' ,posts)
  return (
    <div className={styles.container}>
      <Head>
        <title></title>
      
        
      </Head>

      <main >
   
        <div >
        {posts.map(post => {
          return (
            <div  key={post.postId} >
            
            <h2 className={styles.single}>{post.title}</h2>
            <p className={styles.postid}> post Number <span>{post.postId}</span></p>
            <p className={styles.para}> {post.excerpt}</p>
            
          </div>
           )
           } ) }
         
        </div>
      </main>

      
    </div>
  )
}

export async function getStaticProps(){
  const client = new ApolloClient({
    uri: 'http://localhost/gulfpaper/graphql',
    cache: new InMemoryCache()
  });

  const response = await client.query({
  query: gql`
  query NewQuery {
    posts {
      edges {
        node {
          title
          uri
          excerpt
          content
          postId
        }
      }
    }
  }
  `
})


const posts = response.data.posts.edges.map(({node}) => node);
console.log('posts', posts)


return {
  props: {
   posts
  }
}
}