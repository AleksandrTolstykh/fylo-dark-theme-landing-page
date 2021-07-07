import React from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';

function EmailField(props) {
  const StyledTextField = styled(TextField)`
    border-radius: 30px;
    background-color: hsl(0, 0%, 100%);
    font-family: 'Open Sans';
    fontWeight: 400;
    height: 40px;
    width: 95%;
    padding-left: 10px;
  `;

  return (
    <StyledTextField
      placeholder="email@example.com"
      InputProps={{ disableUnderline: true }}
    />
  );
}

export default EmailField;
