import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const withDragAndDrop = Component => props => (
  <DndProvider backend={HTML5Backend}>
    <Component {...props} />
  </DndProvider>
);

export default withDragAndDrop;
