import './current-weather.css'

const CurrentWeather = () => {
    return (
        <div className='weather'>
            <div className="top">
                <div>
                    <p className='city'>Los Angeles</p>
                    <p className="weather-description">Sunny</p>
                </div>
                <img src="icons/01d.png" alt="weather" className='weather-icon' />
            </div>
        </div>
    )
}

export default CurrentWeather