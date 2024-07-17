'use client';

import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '../../../lib/utils';

export default function HomePage() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const intervar = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervar);
          return 100;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(intervar);
    };
  }, []);

  return (
    <div>
      <Progress
        value={progress}
        indicatorColor={cn({
          'bg-red-500': progress < 50,
          'bg-yellow-500': progress >= 50 && progress < 75,
          'bg-green-500': progress >= 75,
        })}
      />
    </div>
  );
}
