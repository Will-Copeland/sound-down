import React from 'react';
import logo from './logo.svg';
// import './App.css';
import Test from './containers/Test';
import Form from './containers/Form';
import Layout from './containers/Layout';

const App = () => (
  <div className="App">
    <Layout>
      <Form />
    </Layout>
  </div>
);


export default App;
