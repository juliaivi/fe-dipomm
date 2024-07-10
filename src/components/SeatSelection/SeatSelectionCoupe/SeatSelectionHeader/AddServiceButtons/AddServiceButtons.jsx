import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './styleServiceBottons.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AddServiceButtons({ type, services }) {
  const [value, setValue] = useState([]);

  const toggleElement = (e) => {
    if (e.target.classList.contains(`service__${type}_not-active `)) {
      return;
    }

    if (e.target.classList.contains(`service__${type}_active`)) {
      e.target.classList.remove(`service__${type}_active`);
    } else {
      e.target.classList.add(`service__${type}_active`);
    }

    let copy = [...value];
    let index = copy.indexOf(type);
    if (index === -1) {
      copy.push(type);
    } else copy.splice(index, 1);
    setValue(copy);
  };

  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={
          <Tooltip id="tooltip-bottom" className="service__tooltip">
            {type === 'condition' && 'Кондиционер'}
            {type === 'wifi' && 'Wi-Fi'}
            {type === 'food' && 'Еда'}
            {type === 'bedding' && 'Кондиционер'}
          </Tooltip>
        }
      >
        {services === true ? (
          <Button
            className={`service service__${type} service__active`}
            onClick={(e) => toggleElement(e)}
          ></Button>
        ) : (
          <Button
            className={`service service__${type}`}
            onClick={(e) => toggleElement(e)}
          ></Button>
        )}
      </OverlayTrigger>
    </>
  );
}

AddServiceButtons.propTypes = {
  type: PropTypes.string,
  services: PropTypes.bool,
};
