import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleCompleteTask } from 'redux/Tasks/Tasks.actions';
import Checkbox from 'components/Layout/Checkbox';
import { FaHome, FaBriefcase } from 'react-icons/fa';

const CustomCard = styled.div`
  padding: 2px 10px;
  opacity: ${({ index, last }) => (index === last ? '0' : '1')};
  transition: all ease-in 0.3s;
`;

const ItemWrapper = styled.li`
  padding: 2px;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextStyled = styled.p`
  width: 80%;
  color: ${({ theme }) => theme.fontColor};
  position: relative;
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : null)};
`;

const CategoryIconWrapper = styled.div`
  color: ${({ theme }) => theme.grey};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TasksItem = ({ task: { name, completed, id, category }, index, lastAdded }) => {
  const [last, setLast] = useState(lastAdded);

  useEffect(() => {
    setTimeout(() => {
      setLast(false);
    }, 300);
  }, [lastAdded]);

  const dispatch = useDispatch();

  const handleCheckbox = e => {
    dispatch(toggleCompleteTask(e.target.id));
  };

  const categoryIcon = type => {
    switch (type) {
      case 'home':
        return <FaHome />;
      case 'work':
        return <FaBriefcase />;
      default:
        return null;
    }
  };

  return (
    <CustomCard index={index} last={last}>
      <ItemWrapper>
        <CategoryIconWrapper>{categoryIcon(category)}</CategoryIconWrapper>
        <TextStyled isChecked={completed}>{name}</TextStyled>
        <Checkbox id={id} name={name} isChecked={completed} callback={handleCheckbox} />
      </ItemWrapper>
    </CustomCard>
  );
};

TasksItem.defaultProps = {
  name: '',
};

TasksItem.propTypes = {
  task: PropTypes.object.isRequired,
  name: PropTypes.string,
  index: PropTypes.number.isRequired,

  completed: PropTypes.bool.isRequired,
};

export default TasksItem;
