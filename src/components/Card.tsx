import * as React from 'react';

type CardProps = {
  title: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function Card({ className, children, title }: CardProps) {
  return (
    <div
      className={
        'block text-left max-w-md p-6 bg-white border border-gray-400 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-900 dark:border-gray-700 dark:hover:bg-gray-700 ' +
        className
      }
    >
      <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {title}
      </h5>
      <div className='font-normal text-gray-700 dark:text-gray-400'>
        {children}
      </div>
    </div>
  );
}
