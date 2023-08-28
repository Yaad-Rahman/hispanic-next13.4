/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

export const HTMLParser = ({ children }: { children: string }) => {
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    return () => {
      setIsClient(false);
    };
  }, []);

  const parsedHTML = ReactHtmlParser(children, {
    transform: (node: any) => {
      if (node.type === 'tag' && node.name === 'ul') {
        node.attribs = {
          ...node.attribs,
          class: 'list-disc list-inside px-[5%]',
        };
      }

      if (node.type === 'tag' && node.name === 'ol') {
        node.attribs = {
          ...node.attribs,
          class: 'list-decimal list-inside px-[5%]',
        };
      }

      if (node.type === 'tag' && node.name === 'a') {
        node.attribs = {
          ...node.attribs,
          class: 'text-primay-500',
        };
      }

      if (node.type === 'tag' && node.name === 'blockquote') {
        node.attribs = {
          ...node.attribs,
          class:
            'border-l-2 border-primary-600 pl-5 py-2 sm:text-2xl text-lg font-medium',
        };
      }

      if (node.type === 'tag' && node.name === 'h1') {
        node.attribs = {
          ...node.attribs,
          class: 'sm:text-6xl text-3xl font-bold',
        };
      }

      if (node.type === 'tag' && node.name === 'h2') {
        node.attribs = {
          ...node.attribs,
          class: 'sm:text-5xl text-2xl font-bold',
        };
      }

      if (node.type === 'tag' && node.name === 'h3') {
        node.attribs = {
          ...node.attribs,
          class: 'sm:text-3xl text-xl font-bold',
        };
      }

      if (node.type === 'tag' && node.name === 'h4') {
        node.attribs = {
          ...node.attribs,
          class: 'sm:text-2xl text-lg font-bold',
        };
      }

      if (node.type === 'tag' && node.name === 'h5') {
        node.attribs = {
          ...node.attribs,
          class: 'text-xl font-bold',
        };
      }

      if (node.type === 'tag' && node.name === 'h6') {
        node.attribs = {
          ...node.attribs,
          class: 'text-lg font-bold',
        };
      }

      return undefined;
    },
  });

  return <React.Fragment>{isClient && parsedHTML}</React.Fragment>;
};
