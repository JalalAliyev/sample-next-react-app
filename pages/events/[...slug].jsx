import React from 'react';
import Head from 'next/head';

import EventList from '../../components/events/event-list/event-list';
import Button from '../../components/ui/button/button';
import ErrorAlert from '../../components/ui/error-alert/error-alert';
import ResultsTitle from '../../components/events/results-title/results-title';
import { getFilteredEvents } from '../../helpers/api-utils';

const FilteredEvents = ({ hasError, events, date }) => {
  const pageContent = (
    <Head>
      <title>Filtered Events</title>
      <meta name='description' content={'All Events for filtered event'} />
    </Head>
  );

  if (hasError) {
    return (
      <>
        {pageContent}
        <ErrorAlert>
          <p>Invalid filtered. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  if (!events || events.length === 0) {
    return (
      <>
        {pageContent}
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const newDate = new Date(date.year, date.month - 1);

  return (
    <div className='event-slug'>
      {pageContent}
      <ResultsTitle date={newDate} />
      <EventList items={events} />
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const filterData = params.slug;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return {
      props: { hasError: true },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  return {
    props: {
      events: filteredEvents,
      hasError: false,
      date: { year: numYear, month: numMonth },
    },
  };
};

export default FilteredEvents;
