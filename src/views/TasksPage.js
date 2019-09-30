import React from 'react';
import styled from 'styled-components';
import DashboardTemplate from 'templates/DashboardTemplate';
import Heading from 'components/Layout/Heading';
import TasksList from '../components/Sections/Tasks/TasksList';
import TasksForm from '../components/Sections/Tasks/Form';

const WrapperStyled = styled.div`
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 30px;
`;

const TasksPage = () => {
  return (
    <DashboardTemplate>
      <WrapperStyled>
        <Heading>Tasks</Heading>
        <ContentWrapper>
          <TasksForm />
          <TasksList />
        </ContentWrapper>
      </WrapperStyled>
    </DashboardTemplate>
  );
};

export default TasksPage;
