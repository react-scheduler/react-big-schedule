import React from 'react';
import { Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <header>
        <Title level={1}>React Big Schedule</Title>
        <Paragraph>
          React Big Schedule is a powerful and intuitive scheduler and resource planning solution built with React. Seamlessly integrate this modern, browser-compatible component
          into your applications to effectively manage time, appointments, and resources. With drag-and-drop functionality, interactive UI, and granular views, React Big Schedule
          empowers you to effortlessly schedule and allocate resources with precision.
        </Paragraph>
        <Button type="link" size="large" onClick={() => navigate('/basic')}>
          Get Started
        </Button>
      </header>
    </div>
  );
}

export default Home;
