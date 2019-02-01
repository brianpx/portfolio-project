import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import SuperComponent from '../components/SuperComponent';
import axios from 'axios';


class Index extends SuperComponent {
  
  static async getInitialProps() {
   let userData ={};
    try {
     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
     //console.log(response.data);
     userData = response.data;
    } catch(err) {
      console.error(err);
    }
    
    return {initialData: [1,2,3,4], userData};
  }


  constructor(props) {
    //debugger;
    super(props);

    //debugger;
    this.state = {
      title: 'I am the index page'
    }

    //this.updateTitle = this.updateTitle.bind(this);

    //console.log('constructor');
  }
  componentDidMount() {
    //console.log('componentDidMount');
  }

  componentDidUpdate() {
    //console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    //console.log('componentWillUnmount');
  }

  //updateTitle () {
    updateTitle = () => {
    //console.log('I am the updated title');
    this.setState({title: 'I am updated index Component'});
  }

  render() {
    //debugger;
    //const title =this.state.title
    //equivalent structurizing...
    const { title } =this.state
    const { userData, initialData } = this.props;  
    return (    
      <BaseLayout>
      <h1 className='fromPage'>I am the index page from class Component</h1> 
      <h2>{ title }</h2>
      <h2>{ userData.title }</h2>
      {/* <button onClick={() => this.updateTitle()}>Change Title</button> */}
      <button onClick={this.updateTitle}>Change Title</button>
      </BaseLayout>
    )
  }
}
export default Index;