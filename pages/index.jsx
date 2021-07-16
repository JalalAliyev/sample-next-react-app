import Head from 'next/head';

import EventList from '../components/events/event-list/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

export default function Home({ events }) {
  return (
    <div>
      <Head>
        <title>Nextjs Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evlolve...' />
      </Head>
      <EventList items={events} />
    </div>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 900,
  };
};
