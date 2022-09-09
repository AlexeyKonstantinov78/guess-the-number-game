import React from 'react';
import style from './ClassComponent.module.css';
import PropTypes from 'prop-types';

export class ClassComponent extends React.Component {
  state = {
    result: 'Результат',
    userNumber: '',
    randomNumber:
      Math.floor((Math.random() * this.props.max - this.props.min) +
      this.props.min),
    buttonText: 'Угадать',
    count: 0,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(state => {
      console.log(state);

      if (state.buttonText === 'Сыграть ещё') {
        return {
          result: 'Результат',
          userNumber: '',
          randomNumber:
            Math.floor((Math.random() * this.props.max - this.props.min) +
            this.props.min),
          buttonText: 'Угадать',
          count: 0,
        };
      }

      if (!state.userNumber) return state;

      if (state.userNumber > state.randomNumber) {
        return {
          result: `${state.userNumber} больше загадоного`,
          userNumber: '',
          count: state.count + 1,
        };
      }

      if (state.userNumber < state.randomNumber) {
        return {
          result: `${state.userNumber} меньше загадоного`,
          userNumber: '',
          count: state.count + 1,
        };
      }

      return {
        result: `Вы угадали, загаданное число 
          ${state.userNumber} 
          c ${state.count + 1} попытки`,
        userNumber: '',
        buttonText: 'Сыграть ещё'
      };
    });
  };

  handleChange = (event) => {
    this.setState({
      userNumber: event.target.value,
    });
  };

  render() {
    return (
      <div className={style.game}>
        <p className={style.result}>{this.state.result}</p>

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

          <button className={style.btn}>
            {this.state.buttonText}
          </button>
        </form>
      </div>
    );
  }
}

ClassComponent.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
};
