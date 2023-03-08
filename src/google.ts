import { calendar_v3 } from '@googleapis/calendar/v3';

const googleEvent: calendar_v3.Schema$Event = {};

const googleEvents: calendar_v3.Schema$Event[] = [];

const mappedEvents: MappedEvent[] = googleEvents.map((event) => {
  const latitude = 0;
  const longitude = 0;

  return {
    id: event.id,
    event_id: event.id,
    name: event.summary,
    location_string: event.location,
    start_utc: event.start.dateTime,
    end_utc: event.end.dateTime,
    latitude,
    longitude,
  };
});
