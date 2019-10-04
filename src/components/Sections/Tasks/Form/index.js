import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Card from 'components/Layout/Card';
import Form from 'components/Layout/Form';
import Heading from 'components/Layout/Heading';
import Input from 'components/Layout/Input';
import Button from 'components/Layout/Button';
import { FaHome, FaBriefcase } from 'react-icons/fa';
import { addTask } from 'redux/Tasks/Tasks.actions';
import { Task } from 'constants/index';

const AddTaskForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CategoriesWrapper = styled.div`
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;
const CategoriesItem = styled.button`
  background: ${({ set, value, theme }) => (set === value ? theme.greenOpacity : 'white')};
  font-size: 18px;
  padding: 5px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.green};
  cursor: pointer;
  svg {
    color: ${({ set, value, theme }) => (set === value ? 'white' : theme.green)};
  }
  p {
    padding: 10px 0 10px 15px;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    color: ${({ set, value, theme }) => (set === value ? 'white' : theme.green)};
    pointer-events: none;
  }
  &:hover {
    background: ${({ theme }) => theme.green};
    color: white;

    svg,
    p {
      color: white;
    }
  }
`;

const CustomCard = styled(Card)`
  align-self: start;
`;

const TaskForm = () => {
  const [newTask, setNewTask] = useState(new Task());

  const dispatch = useDispatch();

  const handleChange = e => {
    e.preventDefault();
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(addTask(newTask));
    setNewTask(new Task());
  };

  return (
    <CustomCard>
      <AddTaskForm onSubmit={submitHandler}>
        <Heading>Add task</Heading>
        <Input
          name="name"
          id="name"
          value={newTask.name}
          onChange={handleChange}
          placeholder="name"
        />
        <CategoriesWrapper>
          <CategoriesItem
            set={newTask.category}
            name="category"
            onClick={handleChange}
            value="home"
          >
            <FaHome />
            <p>Home</p>
          </CategoriesItem>
          <CategoriesItem
            set={newTask.category}
            name="category"
            onClick={handleChange}
            value="work"
          >
            <FaBriefcase />
            <p>Work</p>
          </CategoriesItem>
        </CategoriesWrapper>
        <Button type="submit" block>
          add
        </Button>
      </AddTaskForm>
    </CustomCard>
  );
};

export default TaskForm;
