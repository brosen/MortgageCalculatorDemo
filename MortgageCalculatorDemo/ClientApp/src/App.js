import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import MortgageSummary from './components/MortgageSummary';
import Global from './components/Global';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/counter' component={Counter} />
    <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
    <Route path='/mortgagesummary' component={MortgageSummary} />
    <Route path='/global' component={Global} />
  </Layout>
);
