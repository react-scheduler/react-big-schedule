import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import { peinadosApi } from "../api/peinadosApi";
import { useObservaciones } from "../functions/crearCita/useObservaciones";
import { AiFillEye } from "react-icons/ai";

function EventItemPopover({
  schedulerData,
  eventItem,
  title,
  startTime,
  endTime,
  statusColor,
  subtitleGetter,
  viewEventClick,
  viewEventText,
  viewEvent2Click,
  viewEvent2Text,
  eventItemPopoverTemplateResolver,
}) {
  const { localeDayjs, config } = schedulerData;
  const start = localeDayjs(new Date(startTime));
  const end = localeDayjs(new Date(endTime));

  if (eventItemPopoverTemplateResolver) {
    return eventItemPopoverTemplateResolver(schedulerData, eventItem, title, start, end, statusColor);
  }

  const subtitle = subtitleGetter ? subtitleGetter(schedulerData, eventItem) : null;
  const showViewEvent = viewEventText && viewEventClick && (eventItem.clickable1 === undefined || eventItem.clickable1);
  const showViewEvent2 = viewEvent2Text && viewEvent2Click && (eventItem.clickable2 === undefined || eventItem.clickable2);

  const renderViewEvent = (text, clickHandler, marginLeft = 0) => (
    <button
      className="header2-text txt-btn-dis"
      type="button"
      style={{ color: "#108EE9", cursor: "pointer", marginLeft: `${marginLeft}px` }}
      onClick={() => clickHandler(schedulerData, eventItem)}
    >
      {text}
    </button>
  );
  const [dataPuntosporCliente, setDataPuntosPorCliente] = useState({});
  const { dataObservaciones, fetchObservaciones } = useObservaciones({ idCliente: eventItem.no_cliente });

  // http://cbinfo.no-ip.info:9018/sp_detalleCitasServiciosResumen_Result?idCita=2087
  const getEstilistas = () => {
    console.log({ eventItem });
    peinadosApi.get(`/sp_detalleCitasServiciosResumen2?idCita=${eventItem.idCita}`).then((response) => {
      setDataPuntosPorCliente(response.data[0]);
    });
  };
  useEffect(() => {
    getEstilistas();
  }, []);

  return (
    <div style={{ width: config.eventItemPopoverWidth }}>
      <Row type="flex" align="middle">
        {config.eventItemPopoverShowColor && (
          <Row justify="space-between" style={{ width: "100%" }}>
            <div className="status-dot" style={{ backgroundColor: statusColor }} />
            <div>
              <AiFillEye size={23} onClick={() => window.open("http://cbinfo.no-ip.info:9020/CatClientes", "_blank")} />
            </div>
          </Row>
        )}
        <Col span={22} className="overflow-text">
          <span className="header2-text" title={title}>
            {title}
          </span>
        </Col>
      </Row>
      {subtitle && (
        <Row type="flex" align="middle">
          <Col span={2}>
            <div />
          </Col>
          <Col span={22} className="overflow-text">
            <span className="header2-text" title={subtitle}>
              {subtitle}
            </span>
          </Col>
        </Row>
      )}
      <Row type="flex" align="middle">
        <Col span={2}>
          <div />
        </Col>
        <Col span={22}>
          <span className="header1-text">{start.format("HH:mm")}</span>
          {config.eventItemPopoverDateFormat && (
            <span className="help-text" style={{ marginLeft: "8px" }}>
              {start.format(config.eventItemPopoverDateFormat)}
            </span>
          )}
          <span className="header2-text" style={{ marginLeft: "8px" }}>
            -
          </span>
          <span className="header1-text" style={{ marginLeft: "8px" }}>
            {end.format("HH:mm")}
          </span>
          {config.eventItemPopoverDateFormat && (
            <span className="help-text" style={{ marginLeft: "8px" }}>
              {end.format(config.eventItemPopoverDateFormat)}
            </span>
          )}
        </Col>
      </Row>
      {(showViewEvent || showViewEvent2) && (
        <Row type="flex" align="middle">
          <Col span={2}>
            <div />
          </Col>
          <Col>
            <p className="header2-text">Cliente: {dataPuntosporCliente?.nombre}</p>
            <p className="header2-text">Servicios: {dataPuntosporCliente?.descripcion}</p>
            <p className="header2-text">Observaciones de la cita: {dataPuntosporCliente?.observaciones}</p>
          </Col>
          <Col span={22}>
            {showViewEvent && renderViewEvent(viewEventText, viewEventClick)}
            {showViewEvent2 && renderViewEvent(viewEvent2Text, viewEvent2Click, 16)}
          </Col>
        </Row>
      )}
    </div>
  );
}

EventItemPopover.propTypes = {
  schedulerData: PropTypes.object.isRequired,
  eventItem: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
  subtitleGetter: PropTypes.func,
  viewEventClick: PropTypes.func,
  viewEventText: PropTypes.string,
  viewEvent2Click: PropTypes.func,
  viewEvent2Text: PropTypes.string,
  eventItemPopoverTemplateResolver: PropTypes.func,
};

export default EventItemPopover;
