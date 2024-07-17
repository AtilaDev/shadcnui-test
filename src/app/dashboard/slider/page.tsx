'use client';

import { useState } from 'react';
import { Slider } from '@/components/ui/slider';

export default function HomePage() {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);
  return (
    <div className='grid grid-cols-1 gap-3'>
      <span>Slider value: {sliderValue}</span>
      <Slider
        defaultValue={[sliderValue]}
        max={100}
        step={1}
        onValueChange={(v) => setSliderValue(v[0])}
      />

      <span>Range value: {rangeValue.join(', ')}</span>
      <Slider
        defaultValue={rangeValue}
        max={100}
        step={1}
        onValueChange={setRangeValue}
      />
    </div>
  );
}
