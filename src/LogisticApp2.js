import * as React from 'react';
const SvgLogisticApp2 = ({ title, titleId, ...props }) => (
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
    <path d="M24.109 392.19A31.952 31.952 0 0 0 55.844 424h400.312A31.849 31.849 0 0 0 463 361.08V117.688C463 101.582 449.647 88 433.541 88h-351C66.431 88 53 101.582 53 117.688v242.8c-16 1.29-28.891 15.142-28.891 31.702ZM67 117.688A15.926 15.926 0 0 1 82.538 102h351c8.387 0 15.459 7.3 15.459 15.688V360H320c-9.983 0-18.1 8.517-18.1 18.5a4.466 4.466 0 0 1-4.105 4.5h-88.84a4.466 4.466 0 0 1-4.1-4.5c0-9.983-8.122-18.5-18.105-18.5H67ZM55.844 374h130.9a4.465 4.465 0 0 1 4.105 4.5c0 9.983 8.122 18.5 18.1 18.5h88.84c9.983 0 18.105-8.517 18.105-18.5A4.465 4.465 0 0 1 320 374h136.156a17.862 17.862 0 0 1 17.571 17.863 18.183 18.183 0 0 1-5.14 12.745A17.689 17.689 0 0 1 456.156 410H55.844c-9.689 0-17.571-8.312-17.571-18s7.882-18 17.571-18Z" />
    <path d="M426 333V134a7 7 0 0 0-7-7H97a7 7 0 0 0-7 7v199a7 7 0 0 0 7 7h322a7 7 0 0 0 7-7Zm-14-7H104V141h308Z" />
    <path d="m192.5 278.157 60 34.641a7.005 7.005 0 0 0 7 0l60-34.641a7 7 0 0 0 3.5-6.057v-69.288a7 7 0 0 0-3.5-6.062l-60-34.641a7 7 0 0 0-7 0l-60 34.641a7 7 0 0 0-3.5 6.062V272.1a7 7 0 0 0 3.5 6.057Zm116.5-10.1-46 26.557V241.49l46-26.558Zm-7-65.244-46 26.555-16.588-9.577 45.995-26.555Zm-46-26.555 15.406 8.9-45.995 26.555L210 202.81Zm-53 38.677 46 26.558v53.121l-46-26.557Z" />
  </svg>
);
export default SvgLogisticApp2;
