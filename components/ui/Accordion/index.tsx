import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';

import { Typography } from '../Typography';
import { classes } from './styles';
import type { AccordionType } from './types';

export const Accordion = ({ data }: { data: AccordionType[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div>
      {data.map((item, index) => (
        <div
          key={index}
          className={clsx(
            'flex gap-6 pb-8 ',
            index !== 0 && 'border-t border-t-primary-600 pt-6'
          )}
        >
          <div className="basis-[93.75%]">
            <div
              onClick={() => handleClick(index)}
              className="w-full cursor-pointer"
            >
              <Typography variant="white" size="large" lexend weight="medium">
                {item.header}
              </Typography>
            </div>
            <div
              className={clsx(
                openIndex === index &&
                  'visible h-full translate-y-0 opacity-100',
                openIndex !== index && 'invisible h-0 -translate-y-1 opacity-0',
                'origin-top overflow-hidden transition-all ease-in-out'
              )}
            >
              <Typography variant="white" lexend>
                {item.content}
              </Typography>
            </div>
          </div>
          <div className="basis-[6.25%]" onClick={() => handleClick(index)}>
            {openIndex === index ? (
              <MinusCircleIcon className={classes.icon} />
            ) : (
              <PlusCircleIcon className={classes.icon} />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
