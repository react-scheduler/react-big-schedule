import React from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function wrapFunction(Component) {
  return props => (
    <DndProvider backend={HTML5Backend}>
      <Component {...props} />
    </DndProvider>
  );
}

export default wrapFunction;
