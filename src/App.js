import React, { useCallback, useState } from 'react';
import Form from './Form'
const SimpleDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };


  return (
    
    <Form/>
  );
};

export default SimpleDropdown;
