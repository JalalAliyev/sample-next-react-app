import { useRouter } from 'next/router';
import Head from 'next/head';

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
      <Head>
        <title>All Events</title>
        <meta
          name='description'
          content='Find a lot of great events that allow you to evlolve...'
        />
      </Head>
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
