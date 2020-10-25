import React from 'react';
import PropTypes from 'prop-types';

import './Input.scss';

class Input extends React.Component {
  render() {
    let classNames = ['input'];
    
    if(this.props.type) {
      classNames.push(`input--${this.props.type}`);
    }

    if(this.props.error) {
      classNames.push('input--error');
    }

    if(this.props.variant) {
      let variants = this.props.variant;

      if(typeof this.props.variant === 'string') {
        variants = variants.split(' ');
      }

      variants.forEach(variant => classNames.push(`input--${variant}`));
    }

    return (
      <input
        type={this.props.type}
        disabled={this.props.disabled}
        className={classNames.join(' ')}
      />
    );
  };
};

Input.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  // variant: PropTypes.oneOfType([
  //   PropTypes.string,
  //   PropTypes.array,
  // ]),
};

export default Input;