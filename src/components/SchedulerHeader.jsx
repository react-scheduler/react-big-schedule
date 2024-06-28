import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Col, Row, Spin, Radio, Space, Popover, Calendar } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../config/default";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function SchedulerHeader({ onViewChange, goNext, goBack, onSelectDate, schedulerData, leftCustomHeader, rightCustomHeader }) {
  const [viewSpinning, setViewSpinning] = useState(false);
  const [dateSpinning, setDateSpinning] = useState(false);
  const [visible, setVisible] = useState(false);

  const { viewType, showAgenda, isEventPerspective, config } = schedulerData;
  const dateLabel = schedulerData.getDateLabel();

  const selectDate = schedulerData.getSelectedDate();
  const calendarLocale = schedulerData.getCalendarPopoverLocale()?.default?.Calendar;
  const defaultValue = `${viewType}${showAgenda ? 1 : 0}${isEventPerspective ? 1 : 0}`;

  const handleEvents = (func, isViewSpinning, funcArg = undefined) => {
    if (isViewSpinning) {
      if (config.viewChangeSpinEnabled) setViewSpinning(true);
    } else if (config.dateChangeSpinEnabled) setDateSpinning(true);

    const coreFunc = () => {
      if (funcArg !== undefined) func(funcArg);
      else func();

      if (isViewSpinning) {
        if (config.viewChangeSpinEnabled) setViewSpinning(false);
      } else if (config.dateChangeSpinEnabled) setDateSpinning(false);
    };

    if (config.viewChangeSpinEnabled || config.dateChangeSpinEnabled) {
      setTimeout(coreFunc, config.schedulerHeaderEventsFuncsTimeoutMs); // 100ms
    } else {
      coreFunc();
    }
  };

  const popover = (
    <div className="popover-calendar">
      <Calendar
        locale={calendarLocale}
        defaultValue={dayjs(selectDate)}
        fullscreen={false}
        onSelect={(date) => {
          setVisible(false);
          handleEvents(onSelectDate, false, date.format(DATE_FORMAT));
        }}
      />
    </div>
  );

  const radioButtonList = config.views.map((item) => (
    <RadioButton
      key={`${item.viewType}${item.showAgenda ? 1 : 0}${item.isEventPerspective ? 1 : 0}`}
      value={`${item.viewType}${item.showAgenda ? 1 : 0}${item.isEventPerspective ? 1 : 0}`}
    >
      <span style={{ margin: "0px 8px" }}>{item.viewName}</span>
    </RadioButton>
  ));

  return (
    <Row gutter={[0, 0]} type="flex" align="middle" justify="space-between" style={{ marginBottom: "0px" }}>
      {leftCustomHeader}
      <Col>
        <div className="header2-text">
          <Space>
            <Spin spinning={dateSpinning} />
          </Space>
        </div>
      </Col>
      <Col>
        <Space>
          <Spin spinning={viewSpinning} />
          {/* Quiero que se quede estatic el div, en la parte de arriba */}
          <div className="header2-text" style={{ alignItems: "center", sticky: "top", top: "0px", zIndex: "1", position: "fixed" }}>
            <Space>
              <div>
                <LeftOutlined
                  size={50}
                  type="left"
                  style={{ marginRight: "8px", fontSize: "28px", color: "#08c" }}
                  className="icon-nav"
                  onClick={() => handleEvents(goBack, false)}
                />
                {config.calendarPopoverEnabled ? (
                  <Popover
                    content={popover}
                    placement="bottomLeft"
                    trigger="click"
                    open={visible}
                    onOpenChange={setVisible}
                    overlayClassName="scheduler-header-popover"
                  >
                    <span className="header2-text-label" style={{ cursor: "pointer", fontSize: "22px" }}>
                      {dateLabel}
                    </span>
                  </Popover>
                ) : (
                  <span className="header2-text-label">{dateLabel}</span>
                )}
                <RightOutlined
                  size={50}
                  type="right"
                  style={{ marginLeft: "8px", fontSize: "28px", color: "#08c" }}
                  className="icon-nav"
                  onClick={() => handleEvents(goNext, false)}
                />
              </div>
              <Spin spinning={dateSpinning} />
            </Space>
          </div>
        </Space>
      </Col>
      <Col>
        <Space>
          <Spin spinning={viewSpinning} />
        </Space>
      </Col>
      {rightCustomHeader}
    </Row>
  );
}

SchedulerHeader.propTypes = {
  onViewChange: PropTypes.func.isRequired,
  goNext: PropTypes.func.isRequired,
  goBack: PropTypes.func.isRequired,
  onSelectDate: PropTypes.func.isRequired,
  schedulerData: PropTypes.object.isRequired,
  leftCustomHeader: PropTypes.object,
  rightCustomHeader: PropTypes.object,
};

SchedulerHeader.defaultProps = {
  leftCustomHeader: null,
  rightCustomHeader: null,
};

export default SchedulerHeader;
