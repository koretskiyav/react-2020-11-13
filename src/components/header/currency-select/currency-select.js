import React, { useMemo, useContext, useState } from 'react';
import Select from 'react-dropdown-select';
import CurrencyContext from '../../../contexts/currency-context';
import CURRENCIES from '../../../constants/currencies';

const CurrencySelect = ({ className }) => {
  const { setCurrency } = useContext(CurrencyContext);
  const options = useMemo(
    () =>
      Object.keys(CURRENCIES).map((currency) => ({
        value: currency,
        label: currency,
      })),
    []
  );
  const [selectedOption, setSelectedOption] = useState([options[0]]);

  const handleOnChange = (value) => {
    setSelectedOption(value);
    setCurrency(value[0]?.value);
  };

  return (
    <Select
      onChange={handleOnChange}
      className={className}
      options={options}
      values={selectedOption}
    />
  );
};

export default CurrencySelect;
