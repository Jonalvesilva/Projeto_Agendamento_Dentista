import { ReactElement } from "react";

export interface IData {
  tipo: string;
  data: Date;
  nome: string;
  id: string;
}

export interface IDataBagdeItems {
  data: IData[];
  day: Date;
}

export interface IDataDialogDay {
  data: IData[];
  day: Date;
}

export interface IMonthYearText {
  monthCapitalize: string;
  year: string;
}

export interface IToggleButton {
  setView: (view: ReactElement) => void;
}

export interface IWeekDataBagdeItems {
  data: IData[];
  day: Date;
  hour: string;
}

export interface IWeekDataDialog {
  data: IData[];
  day: Date;
  hour: string;
}
