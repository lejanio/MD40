export interface AddUserQuery {
  name: string;
  surname: string;
  country: CountryCodeType;
}

export interface User extends AddUserQuery {
  id: string;
}

export enum CountryCodeType {
  LV = 'lv',
  LT = 'lt',
  EE = 'ee',
}

export interface TodoItem {
  isCompleted: boolean;
  name: string;
}
