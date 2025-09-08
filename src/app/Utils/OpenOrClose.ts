function isOpen(): string {
  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "long" });
  const hour = now.getHours() + now.getMinutes() / 60;

  const horaires: { [key: string]: [number, number][] } = {
    Monday: [[8.5, 17.5]],
    Tuesday: [[8.5, 17.5]],
    Wednesday: [[8.5, 17.5]],
    Thursday: [[8.5, 17.5]],
    Friday: [[8.5, 17.5]],
  };

  if (horaires[day] && horaires[day].length > 0) {
    for (const intervalle of horaires[day]) {
      if (hour >= intervalle[0] && hour < intervalle[1]) {
        return "🟢 Ouvert";
      }
    }
  }

  return "🔴 Fermé";
}

export default isOpen;
