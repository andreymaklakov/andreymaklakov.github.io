import { AppThunk, RootState } from "./store";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import {
  searchValueReceived,
  showSuggestionsChanged,
  suggestionsReceived,
} from "./companySideEffects";

import { getDate, join } from "../components/CompanySearch/utils";
import { companyURL, options } from "../../constants/tasks";
import {
  Company,
  CompanyData,
  Data,
  Suggestion,
} from "../components/CompanySearch/interfaces";

interface InitialState {
  companyData: CompanyData;
  branches: Suggestion[];
}

const initialState: InitialState = {
  companyData: {
    nameShort: "",
    nameFull: "",
    innKpp: [],
    address: "",
    status: "",
    regDate: "",
    killDate: "",
    founders: "",
    branchesQnty: null,
  },
  branches: [],
};

const companyData = createSlice({
  name: "companyData",
  initialState,
  reducers: {
    nameShortReceived(state, action) {
      state.companyData.nameShort = action.payload;
    },
    nameFullReceived(state, action) {
      state.companyData.nameFull = action.payload;
    },
    innKppReceived(state, action) {
      state.companyData.innKpp = action.payload;
    },
    addressReceived(state, action) {
      state.companyData.address = action.payload;
    },
    statusReceived(state, action) {
      state.companyData.status = action.payload;
    },
    regDateReceived(state, action) {
      state.companyData.regDate = action.payload;
    },
    killDateReceived(state, action) {
      state.companyData.killDate = action.payload;
    },
    foundersReceived(state, action) {
      state.companyData.founders = action.payload;
    },
    branchesQntyReceived(state, action) {
      state.companyData.branchesQnty = action.payload;
    },
    branchesReceived(state, action) {
      state.branches = action.payload;
    },
    dataCleaned(state) {
      state.branches = [];
      state.companyData = {
        nameShort: "",
        nameFull: "",
        innKpp: [],
        address: "",
        status: "",
        regDate: "",
        killDate: "",
        founders: "",
        branchesQnty: null,
      };
    },
  },
});

const { reducer: companyDataReducer, actions } = companyData;
const {
  nameShortReceived,
  nameFullReceived,
  innKppReceived,
  addressReceived,
  statusReceived,
  regDateReceived,
  killDateReceived,
  foundersReceived,
  branchesQntyReceived,
  branchesReceived,
  dataCleaned,
} = actions;

export const cleanData =
  (): AppThunk =>
  (dispatch): void => {
    dispatch(dataCleaned());
  };

export const receiveData =
  (suggestion: Suggestion): AppThunk =>
  (dispatch) => {
    dispatch(branchesReceived([]));

    const data: Data = suggestion.data;
    if (!data) return;

    if (data.name) {
      const nameShort = data.name.short_with_opf || "";
      const nameFull = data.name.full_with_opf || "";

      dispatch(nameShortReceived(nameShort));
      dispatch(nameFullReceived(nameFull));
    }

    if (data.address) {
      let address = "";
      if (data.address.data.qc === "0") {
        address = join([data.address.data.postal_code, data.address.value]);
      } else {
        address = data.address.data.source!;
      }
      dispatch(addressReceived(address));
    }

    const innKpp = [data.inn, data.kpp];
    const status = data.state.status || "";
    const regDate = data.state.registration_date
      ? getDate(data.state.registration_date)
      : "";
    const killDate = data.state.liquidation_date
      ? getDate(data.state.liquidation_date)
      : "";

    let ipFio;
    if (data.fio) {
      ipFio = `${data.fio.surname || ""} ${data.fio.name || ""}`;
    }
    const founders = ipFio || "";

    dispatch(innKppReceived(innKpp));
    dispatch(statusReceived(status));
    dispatch(regDateReceived(regDate));
    dispatch(killDateReceived(killDate));
    dispatch(foundersReceived(founders));

    const branchesQnty = data.branch_count;
    dispatch(branchesQntyReceived(branchesQnty));

    dispatch(suggestionsReceived([]));
    dispatch(searchValueReceived(""));
    dispatch(showSuggestionsChanged(false));

    dispatch(receiveBranches());
  };

const receiveBranches =
  (): AppThunk =>
  async (dispatch, getState): Promise<void> => {
    const cData: CompanyData = getState().companyData.companyData;

    if (cData.branchesQnty) {
      const body = {
        query: cData.innKpp[0],
        kpp: cData.innKpp[1],
        branch_type: "BRANCH",
        count: cData.branchesQnty,
      };

      try {
        const { data } = await axios.post<Company>(companyURL, body, options);

        dispatch(branchesReceived(data.suggestions));
      } catch (error) {
        console.log(error);
      }
    }
  };

export const getData = () => (state: RootState) =>
  state.companyData.companyData;
export const getBranches = () => (state: RootState) =>
  state.companyData.branches;

export default companyDataReducer;
