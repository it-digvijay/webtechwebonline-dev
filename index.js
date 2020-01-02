import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Dashboard from './src/pages/DashboardPage'
import {MainLayout } from './src/components/Layout';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };



  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <MainLayout />
         <Dashboard/>
        <p>
          Footer
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
