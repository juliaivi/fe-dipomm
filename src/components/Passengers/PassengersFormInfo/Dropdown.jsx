import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Dropdown({
  setExamination,
  selected,
  setSelected,
  options,
  setCheckDocument,
  checkDocument,
  setNumberChildValue,
  setNumberValue,
  setSeriesValue,
  setValidForm,
}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="dropdown">
        <div
          className={`dropdown-btn dropdown-btn__${selected.type} ${checkDocument && 'error'}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          {selected.name}
        </div>

        {isActive && (
          <div className="dropdown-content">
            {options.map((el, index) => (
              <div
                onClick={() => {
                  setSelected(el);
                  setIsActive(false);
                  setExamination(true);
                  setValidForm(false);
                  if (el.type === 'passport') {
                    setNumberChildValue({
                      number: '',
                      error: false,
                      valid: false,
                    });
                  }

                  if (el.type === 'birth-certificate') {
                    setSeriesValue({ number: '', error: false, valid: false });
                    setNumberValue({ number: '', error: false, valid: false });
                  }

                  if (setCheckDocument !== undefined) {
                    setCheckDocument(false);
                  }
                }}
                className="dropdown-item"
                key={index}
              >
                {el.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

Dropdown.propTypes = {
  setExamination: PropTypes.func,
  selected: PropTypes.object,
  setSelected: PropTypes.func,
  options: PropTypes.array,
  setCheckDocument: PropTypes.func,
  checkDocument: PropTypes.bool,
  setNumberChildValue: PropTypes.func,
  setNumberValue: PropTypes.func,
  setSeriesValue: PropTypes.func,
  setValidForm: PropTypes.func,
};
