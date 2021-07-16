import React from 'react';
import Head from 'next/head';

import EventSummary from '../../components/event-details/event-summary/event-summary';
import EventLogistics from '../../components/event-details/event-logistics/event-logistics';
import EventContent from '../../components/event-details/event-content/event-content';
import { getAllEvents, getEventById } from '../../helpers/api-utils';

const EventDetail = ({ event }) => {
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name='description' content={event.description} />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export const getStaticProps = async ({ params }) => {
  const { eventId } = params;
  const currentEvent = await getEventById(eventId);

  return { props: { event: currentEvent }, revalidate: 30 };
};

export const getStaticPaths = async () => {
  const allEvents = await getAllEvents();
  const paths = allEvents.map((event) => ({
    params: { eventId: event.id },
  }));

  return { paths, fallback: true };
};

export default EventDetail;
