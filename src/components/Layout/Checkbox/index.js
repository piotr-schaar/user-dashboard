import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const LabelStyled = styled.label`
  position: relative;
  display: block;
  height: 30px;
  width: 30px;
  input {
    opacity: 0;
    height: 0;
    width: 0;
  }
  input:checked + span {
    background-color: ${({ theme }) => theme.green};
  }
  input:focus + span {
    box-shadow: 0 0 1px ${({ theme }) => theme.green};
  }
`;

const InputStyled = styled.input``;

const CheckmarkIcon = styled.div`
  display: block;
  &:after {
    content: '';
    display: block;
    width: 10px;
    height: 20px;
    border: solid ${({ theme }) => theme.white};
    border-width: 0 2px 2px 0;
    transform: translateY(-20px);
    transform: rotate(45deg);
  }
`;

const CustomCheckbox = styled.span`
  position: absolute;
  cursor: pointer;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 2px solid ${({ theme }) => theme.greenOpacity};
  border-radius: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Checkbox = ({ name, callback, id, isChecked }) => {
  return (
    <>
      <LabelStyled>
        <InputStyled
          defaultChecked={isChecked}
          type="checkbox"
          name={name}
          id={id}
          onClick={callback}
        />
        <CustomCheckbox>{isChecked && <CheckmarkIcon />}</CustomCheckbox>
      </LabelStyled>
    </>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired
}

export default Checkbox;
