import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

export default WrappedComponent => {
  return props => (
    <DndProvider backend={HTML5Backend}>
      <WrappedComponent {...props} />
    </DndProvider>
  );
};
