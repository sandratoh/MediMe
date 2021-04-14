export function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toDateString();
};

export function currentDate() {
  return new Date().toISOString().substring(0, 10)
};

export function formatDateToISO(dateStr) {
  const date = new Date(dateStr);
  return date.toISOString().substring(0, 10);
}