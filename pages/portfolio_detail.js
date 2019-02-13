import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import {withRouter} from 'next/router';
import axios from 'axios';


class Portfolio_detail extends React.Component {

  static async getInitialProps({ query }) {
    
    const portfolioId= query.id;
    let portfolio_detail = {};
    try {
      const response =  await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioId}`);
      portfolio_detail  = response.data;
    } catch(err) {
      console.error(err);

    }


    return {portfolio_detail};
  }

  render() {
    //debugger;
    //console.log(this.props);
    const { portfolio_detail } = this.props;
    return (
      <BaseLayout>
      <BasePage>
      <h1>{ portfolio_detail.title }</h1>
      <p>BODY: { portfolio_detail.body }</p>
      <p>ID: { portfolio_detail.id }</p>
      </BasePage>
      </BaseLayout>
    )
  }
}
export default withRouter (Portfolio_detail);