import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { deleteCar } from '../actions';
import { fetchCar } from '../actions';

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }

  testOtherName = () => {
    this.props.deleteCar(this.props.match.params.id, (car) => {
      this.props.history.push('/'); // Navigate after submit
      return car;
    });
  }

  render() {
    if (!this.props.car) {
      return <p>Loading...</p>
    }

    return(
      <div>
        <div className="card">
          <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" alt=""/>
          <div className="card-text">
            <strong>{this.props.car.brand}</strong>
            <p> Model: {this.props.car.model}</p>
            <p> Owner: {this.props.car.owner}</p>
          </div>
          <button className='delete-button' onClick={this.testOtherName}>
            click to delete
          </button>
        </div>
        <Link to={'/'}>
          <button className='delete-button'>Back to garage</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state, ownParams) {
  const carId = parseInt(ownParams.match.params.id, 10);
  const car = state.cars.find(p => p.id === carId);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar, deleteCar }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
