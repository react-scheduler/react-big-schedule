import React from 'react';
import PropTypes from 'prop-types';
import { MinusSquareOutlined, PlusSquareOutlined } from '@ant-design/icons';

const ResourceView = ({ schedulerData, contentScrollbarHeight, slotClickedFunc, slotItemTemplateResolver, toggleExpandFunc }) => {
  const { renderData } = schedulerData;
  const width = schedulerData.getResourceTableWidth() - 2;
  const paddingBottom = contentScrollbarHeight;
  const displayRenderData = renderData.filter(o => o.render);

  const handleToggleExpand = item => {
    if (!!toggleExpandFunc) {
      toggleExpandFunc(schedulerData, item.slotId);
    }
  };

  const renderSlotItem = (item, indents) => {
    let indent = <span key={`es${item.indent}`} className='expander-space'></span>;

    if (item.hasChildren) {
      indent = item.expanded ? (
        <MinusSquareOutlined key={`es${item.indent}`} style={{}} className='' onClick={() => handleToggleExpand(item)} />
      ) : (
        <PlusSquareOutlined key={`es${item.indent}`} style={{}} className='' onClick={() => handleToggleExpand(item)} />
      );
    }

    indents.push(indent);

    const slotCell = slotClickedFunc ? (
      <span className='slot-cell'>
        {indents}
        <a style={{ cursor: 'pointer' }} className='slot-text' onClick={() => slotClickedFunc(schedulerData, item)}>
          {item.slotName}
        </a>
      </span>
    ) : (
      <span className='slot-cell'>
        {indents}
        <span className='slot-text' style={{ cursor: slotClickedFunc === undefined ? undefined : 'pointer' }}>{item.slotName}</span>
      </span>
    );

    let slotItem = (
      <div title={item.slotName} className='overflow-text header2-text' style={{ textAlign: 'left' }}>
        {slotCell}
      </div>
    );

    if (!!slotItemTemplateResolver) {
      const temp = slotItemTemplateResolver(schedulerData, item, slotClickedFunc, width, 'overflow-text header2-text');
      if (!!temp) {
        slotItem = temp;
      }
    }

    const tdStyle = {
      height: item.rowHeight,
      backgroundColor: item.groupOnly ? schedulerData.config.groupOnlySlotColor : undefined,
    };

    return (
      <tr key={item.slotId}>
        <td data-resource-id={item.slotId} style={tdStyle}>
          {slotItem}
        </td>
      </tr>
    );
  };

  const resourceList = displayRenderData.map(item => {
    const indents = [];
    for (let i = 0; i < item.indent; i++) {
      indents.push(<span key={`es${i}`} className='expander-space'></span>);
    }

    return renderSlotItem(item, indents);
  });

  return (
    <div style={{ paddingBottom: paddingBottom }}>
      <table className='resource-table'>
        <tbody>{resourceList}</tbody>
      </table>
    </div>
  );
};

ResourceView.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  contentScrollbarHeight: PropTypes.number.isRequired,
  slotClickedFunc: PropTypes.func,
  slotItemTemplateResolver: PropTypes.func,
  toggleExpandFunc: PropTypes.func,
};

export default ResourceView;
