import { Row, Typography } from 'antd';
import React from 'react';
import SourceCode from '../../components/SourceCode.jsx';
import ClassBased from './class-based.jsx';

function Basic() {
  return (
    <>
      <Row align="middle" justify="center">
        <Typography.Title level={2} className="m-0"> Read Only Example</Typography.Title>
      </Row>
      <SourceCode value="https://github.com/react-scheduler/react-big-schedule/blob/master/src/examples/pages/Read-Only/index.jsx" />
      <ClassBased />
    </>
  );
}

export default Basic;
