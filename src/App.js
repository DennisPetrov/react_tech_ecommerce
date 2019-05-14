import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop';
import Layout from './hoc/Layout';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Layout>
          <Switch>
            <Route/>
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;