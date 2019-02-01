import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import {withRouter} from 'next/router';


class Portfolio_detail extends React.Component {
  render() {
    debugger;
    console.log(this.props);
    return (
      <BaseLayout>
      <h1>I am a portfolio detail page!!</h1>
      <h2>{this.props.router.query.title}</h2>
      </BaseLayout>
    )
  }
}
export default withRouter (Portfolio_detail);