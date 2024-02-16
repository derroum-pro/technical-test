export const formatDate = (value: Date) => {
  return Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(value);
};

export const formatTime = (value: Date) => {
  return Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(value);
};
