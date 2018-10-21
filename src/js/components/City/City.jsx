import React from 'react';

export default class City extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { city, lat, lon, temp, pressure, humidity, temp_min, temp_max, wind } = this.props;

        return (
            <div>
                <div className='card'>
                    <div className='card-header'> City Information </div>
                    <div className='card-body container  text-center'>
                        <div className='row'>
                            <h3 className='col-12'>{ city }</h3>
                            <p className='col-12'> Lat/Long: { lat }, { lon } </p>
                        </div>
                        <hr></hr>
                        <div className='row'>
                            <h6 className='col-4'> Temperature (F) </h6>
                            <h6 className='col-4'> Pressure </h6>
                            <h6 className='col-4'> Humidity </h6>
                        </div>
                        <div className='row text-success'>
                            <h6 className='col-4'>{ temp }</h6>
                            <h6 className='col-4'>{ pressure }</h6>
                            <h6 className='col-4'>{ humidity }</h6>
                        </div>
                        <div className='row'>
                            <h6 className='col-4'> Lowest Temp (F) </h6>
                            <h6 className='col-4'> Highest Temp (F) </h6>
                            <h6 className='col-4'> Wind Speed </h6>
                        </div>
                        <div className='row'>
                            <h6 className='col-4'>{ temp_min }</h6>
                            <h6 className='col-4'>{ temp_max }</h6>
                            <h6 className='col-4'>{ wind }</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}