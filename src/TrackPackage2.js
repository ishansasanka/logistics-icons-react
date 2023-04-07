import * as React from 'react';
const SvgTrackPackage2 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#040b00"
    data-name="Layer 1"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M269.406 404h-26.812a7 7 0 0 0 0 14h26.812a7 7 0 0 0 0-14Z" />
    <path d="M381 58H131a32 32 0 0 0-32 32v333a32 32 0 0 0 32 32h250a32 32 0 0 0 32-32V90a32 32 0 0 0-32-32Zm18 365a18 18 0 0 1-18 18H131a18 18 0 0 1-18-18V90a18 18 0 0 1 18-18h250a18 18 0 0 1 18 18Z" />
    <path d="M368 99H143a7 7 0 0 0-7 7v275a7 7 0 0 0 7 7h225a7 7 0 0 0 7-7V106a7 7 0 0 0-7-7Zm-7 275H150V113h211Z" />
    <path d="m192.5 278.157 60 34.641a7.005 7.005 0 0 0 7 0l60-34.641a7 7 0 0 0 3.5-6.057v-69.288a7 7 0 0 0-3.5-6.062l-60-34.641a7 7 0 0 0-7 0l-60 34.641a7 7 0 0 0-3.5 6.062V272.1a7 7 0 0 0 3.5 6.057Zm116.5-10.1-46 26.557V241.49l46-26.558Zm-7-65.244-46 26.555-16.588-9.577 45.995-26.555Zm-46-26.555 15.406 8.9-45.995 26.555L210 202.81Zm-53 38.677 46 26.558v53.121l-46-26.557Z" />
  </svg>
);
export default SvgTrackPackage2;
