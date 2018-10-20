import React from 'react';

import {
    getWeather,
    updateCity
 } from './selectionActions'

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.handleCityInput = this.handleCityInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleCityInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateCity(value));
    }

    handleSearch() {
        const { dispatch } = this.props;
        const { citySearch } = this.props;
        dispatch(getWeather(citySearch))
    }

    render() {
        const { citySearch } = this.props;
        return (
            <div className='container'>
                <div className='row btn-group btn-group-toggle' data-toggle='buttons'>
                        <button className='btn btn-primary' type="radio" name="cities" id="san-diego" autoComplete="off" value='San Diego' onClick={ this.handleCityInput }> San Diego </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="new-york" autoComplete="off" value='New York' onClick={ this.handleCityInput }> New York </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="washington-dc" autoComplete="off" value='Washington DC.' onClick={ this.handleCityInput }> Washington DC. </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="london" autoComplete="off" value='London' onClick={ this.handleCityInput }> London </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="tokyo" autoComplete="off" value='Tokyo' onClick={ this.handleCityInput }> Tokyo </button>
                </div>
                <div className='row'>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='Search' value={ citySearch } onChange={ this.handleCityInput }/>
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button' onClick={ this.handleSearch }>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}