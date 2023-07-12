import clsx from 'clsx';

import { classes } from './styles';
import type { IconProps } from './types';

export const Loader = ({ className = '', variant = 'white' }: IconProps) => {
  const fillColor = variant === 'black' ? '#111827' : '#ffffff';
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
      className={clsx(classes.outline, className, 'm-auto block bg-none ')}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      fill="none"
    >
      <circle cx="84" cy="50" r="10" fill={fillColor}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="0.8333333333333334s"
          calcMode="spline"
          keyTimes="0;1"
          values="10;0"
          keySplines="0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="fill"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="discrete"
          keyTimes="0;0.25;0.5;0.75;1"
          values={`${fillColor};${fillColor};${fillColor};${fillColor};${fillColor}`}
          begin="0s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill={fillColor}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="0s"
        ></animate>
      </circle>
      <circle cx="50" cy="50" r="10" fill={fillColor}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.8333333333333334s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-0.8333333333333334s"
        ></animate>
      </circle>
      <circle cx="84" cy="50" r="10" fill={fillColor}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.6666666666666667s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-1.6666666666666667s"
        ></animate>
      </circle>
      <circle cx="16" cy="50" r="10" fill={fillColor}>
        <animate
          attributeName="r"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="0;0;10;10;10"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.5s"
        ></animate>
        <animate
          attributeName="cx"
          repeatCount="indefinite"
          dur="3.3333333333333335s"
          calcMode="spline"
          keyTimes="0;0.25;0.5;0.75;1"
          values="16;16;16;50;84"
          keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
          begin="-2.5s"
        ></animate>
      </circle>
    </svg>
  );
};
