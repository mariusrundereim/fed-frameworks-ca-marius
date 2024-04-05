export const formatCurrencyDirect = (amount: number): string => {
  let formatted = new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    currencyDisplay: "symbol",
  }).format(amount);

  formatted = formatted.replace(/[^\d\s,]/g, "").trim() + " NOK";

  return formatted;
};

export const formatCurrency = (amount: number): string => {
  const formatted = amount.toLocaleString("nb-NO");
  return formatted.replace(/,/g, "") + "Kr";
};
