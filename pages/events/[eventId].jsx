import React from 'react';

import EventSummary from '../../components/event-details/event-summary/event-summary';
import EventLogistics from '../../components/event-details/event-logistics/event-logistics';
import EventContent from '../../components/event-details/event-content/event-content';
import { getEventById } from '../../dummy-data';
import { useRouter } from 'next/router';

const EventDetail = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <>
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

export default EventDetail;
