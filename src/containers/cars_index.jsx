import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CarsIndex extends Component {
  render() {
    return(
      <div className='garage-app'>
        <div className="garage-info">
        </div>
        <div className="car-infos">
          {this.props.cars.map((car) =>
            <Link to={`/cars/${car.id}`} key={car.id}>
              <div className="card">
                <strong>{car.brand}</strong>
                <p> Model: {car.model}</p>
                <p> Owner: {car.owner}</p>
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

export default connect(mapStateToProps)(CarsIndex);
