import { Button } from '@/components/ui/button';
import {
  ChevronRightIcon,
  EnvelopeClosedIcon,
  ReloadIcon,
} from '@radix-ui/react-icons';

export default function ButtonPage() {
  return (
    <div className='grid grid-cols-5 gap-2'>
      <Button>default</Button>
      <Button variant={'destructive'}>destructive</Button>
      <Button variant={'ghost'}>ghost</Button>
      <Button variant={'link'}>link</Button>
      <Button variant={'outline'}>outline</Button>
      <Button variant={'secondary'}>secondary</Button>
      <Button disabled capitalize={false}>
        disabled
      </Button>
      <Button variant={'success'}>success</Button>
      <Button variant={'outline'} size={'icon'}>
        <ChevronRightIcon className='h-4 w-4' />
      </Button>
      <Button>
        <EnvelopeClosedIcon className='mr-2 h-4 w-4' /> With Icon
      </Button>

      <Button disabled>
        <ReloadIcon className='mr-2 h-4 w-4 animate-spin' />
        Please wait
      </Button>
    </div>
  );
}
