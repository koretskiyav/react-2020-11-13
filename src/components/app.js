import React, { PureComponent } from 'react';
import Restaurants from './restaurants';
import * as classes from './app.module.css';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <div className={classes.Container}>
          <Restaurants restaurants={this.props.restaurants} />
        </div>
      </div>
    );
  }
}
