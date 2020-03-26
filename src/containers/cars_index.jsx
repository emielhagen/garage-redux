import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions/index';

class CarsIndex extends Component {
  componentWillMount() {
    this.props.fetchCars();
  }

  render() {
    return(
      <div className='garage-app'>
        <div className="garage-info">
          <Link to={'cars/new'}>
            <div className="card">
              <img src="https://i.pinimg.com/originals/75/9e/63/759e6367b3656529a3e47838fdf014b4.jpg" alt="" id='garage'/>
              <h3>Add new car</h3>
            </div>
          </Link>
        </div>
        <div className="car-infos">
          {this.props.cars.map((car) =>
            <Link to={`/cars/${car.id}`} key={car.id}>
              <div className="card">
                <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt=""/>
                <div className="card-text">
                  <h2>{car.brand}</h2>
                  <p> Model: {car.model}</p>
                  <p> Owner: {car.owner}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
