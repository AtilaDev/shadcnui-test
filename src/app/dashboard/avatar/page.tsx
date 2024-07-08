import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarPage() {
  return (
    <div className='flex items-center space-x-2'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' alt='@shadcn' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <p>@shadcn</p>
    </div>
  );
}
