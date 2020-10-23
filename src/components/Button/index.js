import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

class Button extends React.Component {
  render() {
    let classNames = ['button'];
    
    if(this.props.type) {
      classNames.push(`button--${this.props.type}`);
    }

    if(this.props.variant) {
      let variants = this.props.variant;

      if(typeof this.props.variant === 'string') {
        variants = variants.split(' ');
      }

      variants.forEach(variant => classNames.push(`button--${variant}`));
    }

    return (
      <button
        className={classNames.join(' ')}
      >
        {this.props.children}
      </button>
    );
  };
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
};

export default Button;