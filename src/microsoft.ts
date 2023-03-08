import { Event } from '@microsoft/microsoft-graph-types';

const microsoftEvent: Event = {};

const microsoftEvents: Event[] = [];

const mappedEvents: MappedEvent[] = microsoftEvents.map((event) => {
  const latitude = 0;
  const longitude = 0;

  return {
    id: event.id,
    event_id: event.id,
    name: event.subject,
    location_string: event.location.displayName,
    start_utc: event.start.dateTime,
    end_utc: event.end.dateTime,
    latitude,
    longitude,
  };
});

interface MappedEvent {
  id: string;
  event_id: string;
  name: string;
  location_string: string;
  start_utc: string;
  end_utc: string;
  latitude: number;
  longitude: number;
}
