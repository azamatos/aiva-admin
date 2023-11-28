const leadingZeroFormater = new Intl.NumberFormat(undefined, {
  minimumIntegerDigits: 2,
});

const getLocaleDate = (stringDate: string) => {
  return new Date(stringDate).toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const getRandomHsl = () => {
  return "hsla(" + Math.random() * 360 + ", 100%, 50%, 1)";
};

const getTokenHeaders = (token: Token | undefined) => {
  return token
    ? {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "*/*",
      }
    : undefined;
};

const formatDuration = (time: number) => {
  const seconds = Math.floor(time % 60);
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);

  if (hours === 0) {
    return `${minutes}:${leadingZeroFormater.format(seconds)}`;
  }
  return `${hours}:${leadingZeroFormater.format(
    minutes
  )}:${leadingZeroFormater.format(seconds)}`;
};

export { getLocaleDate, getRandomHsl, getTokenHeaders, formatDuration };
