function past(h, m, s) {
  const hour = h * 60 * 60 * 1000;
  const minute = m * 60 * 1000;
  const sec = s * 1000;
  return hour + minute + sec;
}