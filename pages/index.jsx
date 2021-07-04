import Link from 'next/link';
import { getFeaturedEvents } from '../dummy-data';
import styles from '../styles/Home.module.css';
import EventList from '../components/events/event-list/event-list';

export default function Home() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}
