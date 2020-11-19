import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  componentDidMount() {
    console.log('app mounted');
  }

  componentDidUpdate() {
    console.log('add updated');
  }

  render() {
    return (
      <div>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
