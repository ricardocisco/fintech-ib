import React from 'react'
import { InputWrapper, Label, Input } from './style'

export const CustomInput = ({ label, ...rest }) => {
    return (
      <InputWrapper>
        <Label>{label}</Label>
        <Input {...rest} />
      </InputWrapper>
    );
  };
