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
        const { city } = this.props;
        dispatch(getWeather(city))
    }

    render() {
        const { city } = this.props;
        return (
            <div className='container'>
                <div className='row btn-group btn-group-toggle' data-toggle='buttons'>
                        <button className='btn btn-primary' type="radio" name="cities" id="san-diego" autoComplete="off"> San Diego </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="san-diego" autoComplete="off"> New York </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="san-diego" autoComplete="off"> Washington D.C </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="san-diego" autoComplete="off"> London </button>
                        <button className='btn btn-primary' type="radio" name="cities" id="san-diego" autoComplete="off"> Tokyo </button>
                </div>
                <div className='row'>
                    <div className='input-group'>
                        <input type='text' className='form-control' placeholder='' value={ city } onChange={ this.handleCityInput }/>
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button' onClick={ this.handleSearch }>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}