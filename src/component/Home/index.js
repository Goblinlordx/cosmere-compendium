import React, { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';

class Home extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardTitle
            title="Introduction"
            subtitle="Welcome to the Cosmere Compendium"
          />
        </Card>
      </div>
    );
  }
}

export default Home;
