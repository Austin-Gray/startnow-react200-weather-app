import React from 'react';

export default class History extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { history } = this.props;
        return (
            <div>
                <div className='card'>
                    <div className='card-header'> Search History </div>
                    <div className='card-body pt-3'>
                        <ul className='pl-0 mb-0'>
                            {
                                history.map(search => (
                                    <li className='d-flex border-top pt-1'>
                                        <p className='flex-left pl-2'> { search.city } </p>
                                        <div className='flex-right ml-auto pr-2'>
                                            <p className='mb-0'> {search.date} </p>
                                            <p className='mb-1'> {search.time} </p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}