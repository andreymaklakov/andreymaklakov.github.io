import React, { FC } from "react";
import { useSelector } from "react-redux";

import { getData } from "../../../store/companyData";
import { join } from "../utils";
import { tableData } from "../../../../constants/tasks";

const CompanyData: FC = () => {
  const companyData = useSelector(getData());

  return (
    <>
      {tableData.map((item) => (
        <label key={item.label}>
          {item.label}
          <input
            type="text"
            value={
              Array.isArray(companyData[item.data])
                ? join(companyData[item.data], " / ")
                : companyData[item.data]
            }
            readOnly
          />
        </label>
      ))}
    </>
  );
};

export default CompanyData;
