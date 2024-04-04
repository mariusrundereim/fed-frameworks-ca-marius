export const formatCurrencyDirect = (amount: number): string => {
  // Format the number without currency code
  let formatted = new Intl.NumberFormat("nb-NO", {
    style: "currency",
    currency: "NOK",
    currencyDisplay: "symbol", // Use 'symbol' to get the currency symbol
  }).format(amount);

  // Manually remove the currency symbol and place 'NOK' on the right side
  formatted = formatted.replace(/[^\d\s,]/g, "").trim() + " NOK";

  return formatted;
};

// Space as thounsans separator
export const formatCurrency = (amount: number): string => {
  const formatted = amount.toLocaleString("nb-NO");
  return formatted.replace(/,/g, "") + "Kr";
};
