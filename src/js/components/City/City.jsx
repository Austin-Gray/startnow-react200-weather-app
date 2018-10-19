import React from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='card-header'> City Information </div>
                    <div className='card-body container  text-center'>
                        <div className='row'>
                            <h3 className='col-12'> Tokyo </h3>
                            <p className='col-12'> Lat/Long: 35.69,139.69 </p>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <h5 className='col-4'> Temperature (F) </h5>
                            <h5 className='col-4'> Pressure </h5>
                            <h5 className='col-4'> Humidity </h5>
                        </div>
                        <div className='row'>
                            <h5 className='col-4'> 65.62 </h5>
                            <h5 className='col-4'> 997 </h5>
                            <h5 className='col-4'> 39% </h5>
                        </div>
                        <div className='row'>
                            <h5 className='col-4'> Lowest Temp (F) </h5>
                            <h5 className='col-4'> Highest Temp (F) </h5>
                            <h5 className='col-4'> Wind Speed </h5>
                        </div>
                        <div className='row'>
                            <h5 className='col-4'> 62.01 </h5>
                            <h5 className='col-4'> 71.01 </h5>
                            <h5 className='col-4'> 24.16mph </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}