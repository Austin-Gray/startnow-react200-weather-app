import React from 'react';
import Selection from './components/Selection';
import City from './components/City/City.jsx';
import History from './components/History/History.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div className='container d-flex flex-column justify-content-center'>
        <div className='row heading jumbotron text-dark bg-light mt-3'>
          <h1 className='display-4 col-12'>Origin Weather Application</h1>
          <p className='col-12'>Always know if you'll need an umbrella!</p>
        </div>
        <div className='row mb-3'>
          <Selection />
        </div>
        <div className='mt-3 mb-3 row'>
          <div className='col-12 col-md-6 mb-3 pl-0'>
            <City />
          </div>
          <div className='col-12 col-md-6 md-3 pr-0'>
            <History />
          </div>
        </div>
      </div>
    );
  }
}
