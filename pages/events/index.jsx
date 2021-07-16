import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list/event-list';
import EventsSearch from '../../components/events/events-search/events-search';
import { getAllEvents } from '../../helpers/api-utils';

const Events = ({ events }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();

  return {
    props: { events },
    revalidate: 60,
  };
};

export default Events;
