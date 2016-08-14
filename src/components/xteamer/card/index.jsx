import React from 'react';
import styles from './styles';

export default class Card extends React.Component {

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
        style={styles.wrapper}
        onMouseEnter={this.flipHero}
        onMouseLeave={this.flipXteamer}>
          <div className="avatarWrapper" style={styles.avatarWrapper}>
            <img
              style={styles.avatar}
              src={this.state.flipped ? xteamer.hero.avatar : xteamer.avatar}/>
          </div>
          <div>
            <div className="nameWrapper">
              <span>{this.state.flipped ? xteamer.hero.name : xteamer.name}</span>
            </div>
            <div className="specialtyWrapper">
              <span>{xteamer.specialty}</span>
            </div>
          </div>
      </div>
    );
  }
};
