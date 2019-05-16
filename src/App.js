import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop';
import Layout from './hoc/Layout';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Layout>
          <Header/>
          <Switch>
            <Route/>
          </Switch>
        </Layout>
        <Footer/>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;