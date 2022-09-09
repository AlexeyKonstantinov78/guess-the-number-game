import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5,
      userNumber: '',
      randomNumber:
        Math.floor((Math.random() * this.props.max - this.props.min) +
        this.props.min),
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.number);
  };

  handleChange = (event) => {
    this.setState((state, props) => {
      console.log(state, props);
      return {
        userNumber: event.target.value,
      };
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.number}</p>
        <form
          className={style.form}
          onSubmit={this.handleSubmit}>
          <label className={style.label} htmlFor='user_number'>
            Угадай число
          </label>
          <input
            className={style.input}
            type='number'
            id='user_number'
            onChange={this.handleChange}
            value={this.state.userNumber}
          />
          <button className={style.btn}>Угадать</button>
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
