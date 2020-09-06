import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

export default function Card(props) {
  const { title } = props;
  return (
    <div className="card">
      <div className="preview-wrapper">
        <img src={`https://via.placeholder.com/150x150.png?text=${title}`} alt={title} className="preview" />
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

Card.defaultProps = {
  title: '',
};
Card.propTypes = {
  title: PropTypes.string,
};
