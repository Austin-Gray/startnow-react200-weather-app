import React from 'react';

export default class History extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-header'> Search History </div>
                    <div className='card-body pt-2'>
                        <ul className='container'>
                            <li className='row border-top bg-light pt-1'>
                                <p className='col-9 pl-1'> San Diego </p>
                                <p className='col-3'> 04/28/2016 19:04:46 </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}