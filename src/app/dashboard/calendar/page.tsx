'use client';

import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const smallDate = date?.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className='flex-col sm:flex-wrap sm:flex sm:flex-row gap-4'>
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />
      <Calendar
        mode='single'
        selected={date}
        onSelect={setDate}
        className='rounded-md border'
        disabled={(date) => date < new Date()}
      />
      <Calendar
        mode='multiple'
        selected={multipleDates}
        onSelect={setMultipleDates}
        className='rounded-md border'
      />

      <div>
        <h1>Information</h1>
        <p>{smallDate}</p>
        <p>
          {multipleDates?.map((d) => d.toLocaleDateString('en-US')).join(', ')}
        </p>
      </div>
    </div>
  );
}