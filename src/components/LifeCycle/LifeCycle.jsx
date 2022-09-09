import React from 'react';
import style from './LifeCycle.module.css';

export class LifeCycle extends React.Component {
  /**
   * ! render
   * cinstructor
   * getDerivedStateFromProps
   * render
   *
   * !commit
   * обновляется Dom
   * componentDidMount
   * componentWillUnmount  удаление компонента
   *
   */

  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      field: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
  }

  componentDidMount() {
    console.log('componentDidMount');

    setTimeout(() => {
      console.log('timer');
      this.setState(state => ({field: state.field + 1}));
    }, 3000);

    document.addEventListener('scroll', this.handleer);

    // eslint-disable-next-line react/prop-types
    document.title = this.props.prop;
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    document.removeEventListener('scroll', this.handleer);
  }

  handleer = () => {
    this.setState(state => ({field: state.field + 1}));
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1 className={style.title}>Жизненный цикл</h1>

        <div className={style.container}>
          <div>
            <h2 className={style.title}>Типы</h2>
            <ul className={style.list}>
              <li>Монтирование</li>
              <li>Обновление</li>
              <li>Размонтирование</li>
              <li>Ошибки</li>
            </ul>
          </div>

          <div className='stage'>
            <h2 className={style.title}>Этапы</h2>
            <ul className={style.list}>
              <li>Render</li>
              <li>Pre-commit</li>
              <li>Commit</li>
            </ul>
          </div>
        </div>
        <button
          className={style.btn}
          onClick={this.handleer}
        >Click {this.state.field}</button>
      </div>
    );
  }
}
