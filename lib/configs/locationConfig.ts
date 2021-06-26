import { Request, Response } from 'express';

interface LocationWithTimezone {
    location: string;
    timezoneName: string;
    timezoneAbbr: string;
    utcOffset: number;
  };

  const getLocationsWithTimezones = (request: Request, response: Response) => {
    let locations: LocationWithTimezone[] = [
      {
        location: 'Germany',
        timezoneName: 'Central European Time',
        timezoneAbbr: 'CET',
        utcOffset: 1
      },
      {
        location: 'Bhutan',
        timezoneName: 'Bhutan Time',
        timezoneAbbr: 'BTT',
        utcOffset: 6
      },
      {
        location: 'Singapore',
        timezoneName: 'Singapore Time',
        timezoneAbbr: 'SGT',
        utcOffset: 8
      },
      {
        location: 'Australia',
        timezoneName: '	Australian Central Time',
        timezoneAbbr: 'ACT',
        utcOffset: 9
      }
    ];
  
    response.status(200).json(locations);
  };

  export default getLocationsWithTimezones;