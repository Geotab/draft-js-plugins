import React, { Component } from 'react';
import clsx from 'clsx';

export default class Image extends Component {
  render() {
    const { block, className, theme = {}, ...otherProps } = this.props;
    // leveraging destructuring to omit certain properties from props
    const {
      blockProps, // eslint-disable-line no-unused-vars
      customStyleMap, // eslint-disable-line no-unused-vars
      customStyleFn, // eslint-disable-line no-unused-vars
      decorator, // eslint-disable-line no-unused-vars
      forceSelection, // eslint-disable-line no-unused-vars
      offsetKey, // eslint-disable-line no-unused-vars
      selection, // eslint-disable-line no-unused-vars
      tree, // eslint-disable-line no-unused-vars
      contentState,
      blockStyleFn,
      ...elementProps
    } = otherProps;
    const combinedClassName = clsx(theme.image, className);
    const { src } = contentState.getEntity(block.getEntityAt(0)).getData();
    return (
      <img
        {...elementProps}
        data-src={src}
        role="presentation"
        className={combinedClassName}
      />
    );
  }
}
