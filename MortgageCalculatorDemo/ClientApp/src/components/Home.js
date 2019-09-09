import React from 'react';
import { connect } from 'react-redux';

const Home = props => (
  <div>
    <h1>Mortgage Calculator Demo</h1>
    <h2>Bradley Allen Rosen</h2>
  </div>
);

export default connect()(Home);
