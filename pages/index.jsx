import EventList from '../components/events/event-list/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';

export default function Home({ events }) {
  return (
    <div>
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
    revalidate: 900
  };
};
