import React from 'react'
import CityCard from './CityCard'

class City extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            city: '',
            data: []
        }
    }

    updateCity = (event) => {
        this.setState({city: event.target.value})
    }

    search = (event) => {
        event.preventDefault()
        let cityInput = this.state.city
        let cityArr = cityInput.split(" ")
        cityInput =  cityArr.join("").toUpperCase()
        const apiLink = 'http://ctp-zip-api.herokuapp.com/city/' + cityInput
        fetch(apiLink)
       .then((response) => {
           return response.json()
        })
       .then((response) => {
         this.setState({data: response}) 
       })
       .catch((error) => window.alert('city not found'));
    }


    render() {
        return (
            <div>
                <div className = 'SearchBar'>
                        <label>
                            Enter a city to search
                            <input type = 'text' onChange = {this.updateCity}></input>
                        </label>
                        <button type = 'button' onClick = {this.search}>Search</button>
                </div>
                <div className = 'SearchResults'>
                    {
                        this.state.data.map((zipCode, index) => {
                            return (<CityCard zip = {zipCode} key = {index} />)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default City