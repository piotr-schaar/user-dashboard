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
  background: white;
  font-size: 22px;
  padding: 10px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.greenOpacity};
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.green};
  }
  p {
    padding: 10px 0 10px 15px;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.grey};
  }
  &:hover {
    background: ${({ theme }) => theme.greenOpacity};
    color: white;
    svg {
      color: white;
    }
  }
`;

const CustomCard = styled(Card)`
  align-self: start;
`;

const TaskForm = () => {
  const [newTask, setNewTask] = useState({
    name: '',
    category: 'home',
    completed: false,
  });

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
          <CategoriesItem name="category" onClick={handleChange} value="home">
            <FaHome />
            <p>Home</p>
          </CategoriesItem>
          <CategoriesItem name="category" onClick={handleChange} value="work">
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
