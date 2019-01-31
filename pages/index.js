import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';


class Index extends SuperComponent {
  
  constructor() {
  
    super();
  
    this.state = {
      title: 'I am the index page'
    }
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  updateTitle () {
    this.setState({title: 'I am updated index Component'});
  }

  render() {
    console.log('render');
    return (
      <BaseLayout>
      <h1 className='fromPage'>I am the index page from class Component</h1> 
      <h2>{this.state.title}</h2>
      <button onClick={()=> {this.updateTitle()}}>Change Title</button>
      </BaseLayout>
    )
  }
}
export default Index;