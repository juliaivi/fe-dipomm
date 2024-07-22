import Tooltip from './ListPlace//Tooltip/Tooltip';
import React from 'react';
import PropTypes from 'prop-types';

export default function AddDepartureService({
  text,
  availableSeatsInfo,
  priceInfo,
  index,
}) {
  return (
    <div className="item__place__info_box" key={index}>
      <p className="view__place">{text}</p>
      <div className="item__place__info">
        <Tooltip text={priceInfo} index={Number(index)}>
          <p className="number__seats">{availableSeatsInfo}</p>
        </Tooltip>
        <p className="price__from">от</p>
        <p className="price__number">{priceInfo?.top_price}</p>
        <p className="price__type__currency">₽</p>
      </div>
    </div>
  );
}

AddDepartureService.propTypes = {
  text: PropTypes.string,
  availableSeatsInfo: PropTypes.number,
  priceInfo: PropTypes.object,
  index: PropTypes.number,
};
