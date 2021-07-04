import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/event-list/event-list';
import Button from '../../components/ui/button/button';
import ErrorAlert from '../../components/ui/error-alert/error-alert';
import ResultsTitle from '../../components/events/results-title/results-title';

const FilteredEvents = () => {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading</p>;
  }

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filtered. Please adjust your values!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredData = { year: numYear, month: numMonth };

  const filteredEvents = getFilteredEvents(filteredData);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className='center'>
          <Button link='/events'>Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <div className='event-slug'>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </div>
  );
};

export default FilteredEvents;
