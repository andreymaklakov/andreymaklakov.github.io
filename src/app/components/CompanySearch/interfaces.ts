export interface Company {
  suggestions: Suggestion[];
}

export interface Suggestion {
  value: string;
  unrestricted_value: string;
  data: Data;
}

export interface Data {
  kpp: string;
  founders: any;
  branch_type: string;
  branch_count: number;
  name: Name;
  inn: string;
  address: Address;
  state: State;
  fio?: Fio;
}

export interface Fio {
  surname: string;
  name: number;
}

export interface State {
  status: string;
  registration_date: number;
  liquidation_date: any;
}

export interface Name {
  full_with_opf: string;
  short_with_opf: string;
}

export interface Address {
  value: string;
  unrestricted_value: string;
  invalidity: any;
  data: AddressData;
}

export interface AddressData {
  postal_code: string;
  qc: string;
  source?: string;
}

export interface CompanyData {
  nameShort: string;
  nameFull: string;
  innKpp: string[];
  address: string;
  status: string;
  regDate: string;
  killDate: string;
  founders: string;
  branchesQnty: null | number;
}
