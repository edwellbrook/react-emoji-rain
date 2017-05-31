import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import EmojiRain from '../src/index.js';

class App extends Component {

  componentWillMount() {
    this.setState({
      active: true,
    });
  }

  changeState() {
    const {active} = this.state;

    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;

    const charGenerator = () => {
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      return possible.charAt(Math.floor(Math.random() * possible.length));
    };

    return (
      <EmojiRain active={active} drops={100} generator={charGenerator} font='22px monospace' color='white' />
    );
  }

}

ReactDOM.render(<App />, document.querySelector('.js-example'));
