import PropTypes from 'prop-types';

function BodyView({ schedulerData: { renderData, headers, config, behaviors } }) {
  const cellWidth = schedulerData.getContentCellWidth();

  const calculateCellStyle = (header, index) => {
    let style = index === headers.length - 1 ? {} : { width: cellWidth };
    if (!!header.nonWorkingTime) {
      style = { ...style, backgroundColor: config.nonWorkingTimeBodyBgColor };
    }
    if (item.groupOnly) {
      style = { ...style, backgroundColor: config.groupOnlySlotColor };
    }
    if (!!behaviors.getNonAgendaViewBodyCellBgColorFunc) {
      const cellBgColor = behaviors.getNonAgendaViewBodyCellBgColorFunc(schedulerData, item.slotId, header);
      if (!!cellBgColor) {
        style = { ...style, backgroundColor: cellBgColor };
      }
    }
    return style;
  };

  const displayRenderData = renderData.filter(o => o.render);
  const tableRows = displayRenderData.map(item => {
    const rowCells = headers.map((header, index) => {
      const key = item.slotId + '_' + header.time;
      const style = calculateCellStyle(header, index);
      return (
        <td key={key} style={style}>
          <div></div>
        </td>
      );
    });

    return (
      <tr key={item.slotId} style={{ height: item.rowHeight }}>
        {rowCells}
      </tr>
    );
  });

  return <tbody>{tableRows}</tbody>;
}

BodyView.propTypes = {
  schedulerData: PropTypes.object.isRequired,
};

export default BodyView;
