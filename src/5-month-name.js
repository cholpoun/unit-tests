export function monthName(monthNumber) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  if (monthNumber < 1 || monthNumber > 12) {
    return null;
  }
  
  return months[monthNumber - 1];
}
