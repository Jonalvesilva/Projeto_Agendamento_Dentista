export const monthCapitalize = (date: Date) => {
  return (
    date
      .toLocaleString("default", {
        month: "long",
      })
      .charAt(0)
      .toUpperCase() +
    date
      .toLocaleString("default", {
        month: "long",
      })
      .slice(1)
  );
};

export const formatarData = (data: Date) => {
  const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
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

  const dia = data.getDate();
  const mes = meses[data.getMonth()];
  const diaSemana = diasDaSemana[data.getDay()];

  // Retorna no formato "12 jan fri"
  return `${dia} ${mes} ${diaSemana}`;
};
