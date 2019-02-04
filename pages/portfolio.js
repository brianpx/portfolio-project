import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import axios from 'axios';
import { Link } from '../routes'

class Portfolio extends React.Component {

  static async getInitialProps() {
    let posts= [];
     try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      //console.log(response.data);
      posts = response.data;
     } catch(err) {
       console.error(err);
     }
     
     return {posts: posts.splice(0,10)};
   }

   renderPosts(posts) {   
     return posts.map((post, index) => { 
       return(
         <>
         <li key={index}><Link route = {`/portfolio_detail/${post.id}`}><a style={{'fontSize':'30px'}}>{post.title}</a></Link></li>
         </>
       )
     })
   }


  render() {
    const { posts } = this.props;
    
    return (
      <BaseLayout>
      <h1>I am the portfolio page!!</h1>
      <ul>
       {this.renderPosts(posts)}
      </ul>
      </BaseLayout>
      )
  }
}
export default Portfolio;