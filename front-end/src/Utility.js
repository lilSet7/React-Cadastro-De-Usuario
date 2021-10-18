export const reverseDate = (date) => {
  // reverte a data
  const dateLocal = new Date(date)
  return dateLocal.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
};
