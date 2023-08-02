import 'react-phone-number-input/style.css';

import React from 'react';
import PhoneInput, { parsePhoneNumber } from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';

const CountryNamesOnly = ({
  value,
  onChange,
}: {
  value: any;
  onChange: (param: any) => void;
}) => {
  const handleCountryChange = (countryCode: any) => {
    const phoneNumber = value || '';
    const parsedPhoneNumber = parsePhoneNumber(phoneNumber, countryCode);
    if (parsedPhoneNumber) {
      onChange(parsedPhoneNumber.country);
    } else {
      onChange('');
    }
  };

  const country = value || 'US';

  return (
    <PhoneInput
      country={country}
      international={false}
      flags={flags}
      value={country}
      onChange={handleCountryChange}
      countrySelectComponent={({ option, ...props }) => (
        <div {...props}>
          <div>{option.label}</div>
        </div>
      )}
    />
  );
};

export default CountryNamesOnly;
