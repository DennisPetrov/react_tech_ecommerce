import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ScrollToTop from './hoc/ScrollToTop';
import Layout from './hoc/Layout';
import { PageList } from './config/PageList';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Layout>
          <Switch>
            {
              Object.keys(PageList).map((key,index) => {
              return <Route exact component={PageList[key].component} path={PageList[key].path} key={key}  />
            })}
          </Switch>
        </Layout>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;