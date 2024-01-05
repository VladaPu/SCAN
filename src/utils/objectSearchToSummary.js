export const objectSearchToSummary = (data) => {
  const datesWithRisk = data[1].data.reduce((acc, riskItem) => {
    acc[riskItem.date] = riskItem.value;
    return acc;
  }, {});

  return data[0].data.map((item) => ({
    date: item.date,
    total: item.value,
    risk: datesWithRisk[item.date],
  }));
};
