import React from 'react';

export default class Selection extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
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
                        <input type='text' className='form-control' placeholder=''/>
                        <div className='input-group-append'>
                            <button className='btn btn-outline-secondary' type='button'>Go!</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}