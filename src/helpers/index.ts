export const formatDate = (element: Date): string => {
  const newDate = new Date(element);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
  };

  return newDate.toLocaleDateString('es-ES', options);
};
