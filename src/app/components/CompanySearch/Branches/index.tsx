import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getBranches, receiveData } from "../../../store/companyData";
import { AppDispatch } from "../../../store/store";
import { Suggestion } from "../interfaces";

const Branches: FC = () => {
  const branches: Suggestion[] = useSelector(getBranches());

  const dispatch: AppDispatch = useDispatch();

  const handleChooseBranch = (branch: Suggestion) => {
    dispatch(receiveData(branch));
  };

  return (
    <>
      {branches.length ? (
        <>
          <p>Филиалы</p>
          {branches.map((branch, i) => (
            <div key={i}>
              <button onClick={() => handleChooseBranch(branch)}>
                {i + 1}. {branch.value}
              </button>
            </div>
          ))}
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Branches;
