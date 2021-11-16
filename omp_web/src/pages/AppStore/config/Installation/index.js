import { useHistory, useLocation } from "react-router-dom";
import { getTabKeyChangeAction } from "../../store/actionsCreators";
import { useDispatch } from "react-redux";
import { Steps } from "antd";
import { useState } from "react";
import styles from "./index.module.less";
import Step1 from "./steps/Step1";

import { LeftOutlined } from "@ant-design/icons";
// 安装页面
const Installation = () => {
  const [stepNum, setStepNum] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <div
        style={{
          height: 50,
          backgroundColor: "#fff",
          display: "flex",
          paddingLeft: 20,
          paddingRight: 50,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: 16 }}>
          <LeftOutlined
            style={{ fontSize: 16, marginRight: 20 }}
            className={styles.backIcon}
            onClick={() => {
              dispatch(getTabKeyChangeAction("service"));
              history?.goBack();
              // history?.push({
              //   pathname: `/application_management/app_store`,
              // });
            }}
          />
          批量安装
        </div>
        <div style={{ width: 600, position: "relative", left: -60 }}>
          <Steps size="small" current={stepNum}>
            <Steps.Step title="基本信息" />
            <Steps.Step title="服务分布" />
            <Steps.Step title="修改配置" />
            <Steps.Step title="开始安装" />
          </Steps>
        </div>
        <div />
      </div>
      {stepNum == 0 && <Step1 />}
    </div>
  );
};

export default Installation;