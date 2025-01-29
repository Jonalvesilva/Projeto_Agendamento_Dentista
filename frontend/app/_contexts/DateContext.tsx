"use client";
import React, { createContext, useState, ReactNode } from "react";

interface DataContextType {
  date: Date;
  setDate: (date: Date) => void;
  prevDay: () => void;
  nextDay: () => void;
  prevMonth: () => void;
  nextMonth: () => void;
  prevYear: () => void;
  nextYear: () => void;
  prevWeek: () => void;
  nextWeek: () => void;
  monthDays: () => any;
  weekDays: () => any;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [date, setDate] = useState<Date>(new Date());

  const prevDay = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 1);
    setDate(newDate);
  };

  const prevWeek = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() - 7);
    setDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 7);
    setDate(newDate);
  };

  const monthDays = () => {
    function getCalendarFromMonth(date: Date) {
      const arr = [];
      const year = date.getFullYear();
      const month = date.getMonth();

      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);

      const firstWeekday = firstDay.getDay();

      let day = 1;
      let nextMonthDay = 1;
      let prevMonthDay = new Date(year, month, 0).getDate();

      for (let i = 0; i < firstWeekday; i++) {
        arr.push({
          data: new Date(year, month - 1, prevMonthDay--),
          active: 0,
          isPresentMonth: 0,
        });
      }

      for (let i = firstWeekday; i < 7; i++) {
        arr.push({
          data: new Date(year, month, day),
          active: 0,
          isPresentMonth: 1,
        });
        day++;
      }

      while (arr.length < 35) {
        if (day <= lastDay.getDate()) {
          arr.push({
            data: new Date(year, month, day),
            active: 0,
            isPresentMonth: 1,
          });
          day++;
        } else {
          arr.push({
            data: new Date(year, month + 1, nextMonthDay++),
            active: 0,
            isPresentMonth: 0,
          });
        }
      }

      while (arr.length < 35) {
        arr.unshift({
          data: new Date(year, month - 1, prevMonthDay--),
          active: 0,
          isPresentMonth: 0,
        });
      }

      const active = arr.filter((item) => {
        return (
          new Date(item.data).toLocaleDateString("en-gb") ==
          new Date().toLocaleDateString("en-gb")
        );
      });

      if (active.length != 0) active[0].active = 1;

      return arr.sort((a: any, b: any) => a.data - b.data);
    }

    const today = new Date(date);
    const calendar = getCalendarFromMonth(today);

    return calendar;
  };

  const weekDays = () => {
    const meses = [
      "Jan",
      "Fev",
      "Mar",
      "Abr",
      "Mai",
      "Jun",
      "Jul",
      "Ago",
      "Set",
      "Out",
      "Nov",
      "Dez",
    ];

    const data = new Date(date);

    const diaSemana = data.getDay();

    const primeiroDia = new Date(data);
    primeiroDia.setDate(data.getDate() - diaSemana);

    let dias = [];

    for (let i = 0; i < 7; i++) {
      const dia = new Date(primeiroDia);
      dia.setDate(primeiroDia.getDate() + i);
      dias.push(dia);
    }

    return dias;
  };

  const nextDay = () => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + 1);
    setDate(newDate);
  };

  const prevMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() - 1);
    setDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + 1);
    setDate(newDate);
  };

  const prevYear = () => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() - 1);
    setDate(newDate);
  };

  const nextYear = () => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() + 1);
    setDate(newDate);
  };

  return (
    <DataContext.Provider
      value={{
        date,
        setDate,
        prevDay,
        nextDay,
        prevMonth,
        nextMonth,
        prevYear,
        nextYear,
        monthDays,
        weekDays,
        prevWeek,
        nextWeek,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
