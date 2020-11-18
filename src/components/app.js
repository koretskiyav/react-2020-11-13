import React, { PureComponent } from 'react';
import Restaurants from './restaurants';

export default class App extends PureComponent {
  render() {
    return (
      <div className="appContainer">
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}
