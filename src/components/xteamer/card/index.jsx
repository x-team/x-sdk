import React from 'react';
import { Card, CardTitle} from 'react-toolbox/lib/card';


export default class XteamerCard extends React.Component {

  static defaultProps = {
    xteamer: {
      hero: {
      }
    }
  };

  state = {
    flipped: false
  }

  flipHero = () => {
    this.setState({flipped: true});
  }

  flipXteamer = () => {
    this.setState({flipped: false});
  }

  render() {

    const {xteamer} = this.props;

    return (
      <div
        onMouseEnter={this.flipHero}
        onMouseLeave={this.flipXteamer}>
        <Card>
          <CardTitle
            title={xteamer.name}
            subtitle={xteamer.specialty}
          />
        </Card>
      </div>
    );
  }
};