'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar } from '@/components/ui/calendar';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Switch } from '@/components/ui/switch';

import { cn } from '@/lib/utils';

const formSchema = z
  .object({
    username: z
      .string({ errorMap: () => ({ message: 'Username is required' }) })
      .min(2)
      .max(20),
    email: z
      .string({ errorMap: () => ({ message: 'Email is required' }) })
      .email(),
    // .optional()
    // .or(z.literal('')),
    gender: z.enum(['male', 'female'], {
      message: 'Choose your gender',
    }),
    dob: z.date({
      required_error: 'A date of birth is required.',
    }),
    marketing_emails: z.boolean().default(false),
  })
  .refine((data) => data.marketing_emails === true, {
    path: ['marketing_emails'],
  });

export default function HomePage() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ values });
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'
        >
          <FormField
            control={form.control}
            name='username'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder='shadcn' {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type='email'
                    placeholder='shadcn@mail.com'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='gender'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>Notify me about...</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className='flex flex-col space-y-1'
                  >
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='male' />
                      </FormControl>
                      <FormLabel className='font-normal'>Male</FormLabel>
                    </FormItem>
                    <FormItem className='flex items-center space-x-3 space-y-0'>
                      <FormControl>
                        <RadioGroupItem value='female' />
                      </FormControl>
                      <FormLabel className='font-normal'>Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='dob'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Date of birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={(date) => {
                        field.onChange(date);
                      }}
                      disabled={(date) =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='marketing_emails'
            render={({ field }) => (
              <FormItem className='flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm col-span-1 sm:col-span-2'>
                <div className='space-y-0.5'>
                  <FormLabel>Marketing emails</FormLabel>
                  <FormDescription>
                    Receive emails about new products, features, and more.
                  </FormDescription>
                </div>

                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type='submit'>Submit</Button>
        </form>
      </Form>
    </div>
  );
}
