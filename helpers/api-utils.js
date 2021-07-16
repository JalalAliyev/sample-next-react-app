export const getAllEvents = async () => {
  const response = await fetch(
    'https://nextjs-project-7f885-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();

  let events = [];
  for (const key in data) {
    events.push({ id: key, ...data[key] });
  }
  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured);
  return featuredEvents;
};

export const getEventById = async (id) => {
  const events = await getAllEvents();
  return events.find((event) => event.id === id);
};

export const getFilteredEvents = async (dataFilter) => {
  const { year, month } = dataFilter;

  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
};
