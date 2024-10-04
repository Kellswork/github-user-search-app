
export const formattedDate = (date: string | undefined) => date && new Date(date).toLocaleDateString('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

export const company = (companyName: string | null | undefined) => {
  const result = companyName && companyName.slice(1);
  return result;
};