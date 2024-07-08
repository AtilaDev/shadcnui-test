import { Badge } from '@/components/ui/badge';

export default function BadgePage() {
  return (
    <div className='flex gap-4'>
      <Badge capitalize>default</Badge>
      <Badge capitalize variant={'destructive'}>
        destructive
      </Badge>
      <Badge capitalize variant={'outline'}>
        outline
      </Badge>
      <Badge capitalize variant={'secondary'}>
        secondary
      </Badge>
      <Badge capitalize variant={'success'}>
        success
      </Badge>
      <Badge capitalize variant={'info'}>
        info
      </Badge>
    </div>
  );
}
