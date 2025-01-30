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

  let dia = data.getDate().toString();
  const mes = meses[data.getMonth()];
  const diaSemana = diasDaSemana[data.getDay()];

  if (Number(dia) < 10) dia = `0${dia}`;

  return `${dia} ${mes} ${diaSemana}`;
};
