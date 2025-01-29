export interface DataTest {
  tipo: string;
  data: Date;
  nome: string;
  id: string;
}

export const dataTest: DataTest[] = [
  { id: "1", tipo: "Consulta", data: new Date(), nome: "Jonathan Silva" },
  {
    id: "2",
    tipo: "Exame",
    data: new Date(),
    nome: "Lina Oliveira",
  },
  { id: "3", tipo: "Consulta", data: new Date(), nome: "Jonathan Silva" },
  { id: "4", tipo: "Consulta", data: new Date(), nome: "Jonathan Silva" },
  { id: "5", tipo: "Revisão", data: new Date(), nome: "Selton Miguel" },
  { id: "6", tipo: "Revisão", data: new Date(), nome: "Selton Miguel" },
  { id: "7", tipo: "Revisão", data: new Date(), nome: "Selton Miguel" },
  {
    id: "8",
    tipo: "Revisão",
    data: new Date("2025-01-26"),
    nome: "Selton Miguel",
  },
  {
    id: "9",
    tipo: "Revisão",
    data: new Date("2025-01-26"),
    nome: "Selton Miguel",
  },
];

export const hours = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];
