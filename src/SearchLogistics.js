import * as React from 'react';
const SvgSearchLogistics = ({ title, titleId, ...props }) => (
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
    <path d="M73.8 339.268a187.693 187.693 0 0 0 260.414 4.85l24.542 24.541-10.225 10.225a7 7 0 0 0 0 9.9l96.777 96.778a26.031 26.031 0 0 0 36.769 0l3.479-3.478a26.033 26.033 0 0 0 0-36.77l-96.778-96.776a7 7 0 0 0-9.9 0l-10.224 10.223-24.542-24.541A187.705 187.705 0 0 0 73.805 73.8a187.536 187.536 0 0 0 0 265.464Zm310.029 24.117 91.827 91.827a12.012 12.012 0 0 1 0 16.971l-3.478 3.478a12.013 12.013 0 0 1-16.97 0l-91.827-91.828ZM35.241 177.575A173.722 173.722 0 0 1 329.367 83.7a173.744 173.744 0 1 1-294.126 93.875Z" />
    <path d="m103.268 270.333 99.884 57.735a6.788 6.788 0 0 0 3.442.938 6.892 6.892 0 0 0 3.471-.938l100.217-57.735a7.21 7.21 0 0 0 3.718-6.062V148.8a7.224 7.224 0 0 0-3.732-6.062L210.152 85a7.106 7.106 0 0 0-7.058 0l-99.8 57.735A6.816 6.816 0 0 0 100 148.8v115.47a6.792 6.792 0 0 0 3.268 6.063ZM300 260.229l-86 49.652v-99.312l86-49.652ZM292.529 148.8l-85.993 49.648-36.981-21.351 85.993-49.648Zm-85.993-49.651 35.012 20.214-85.993 49.648-35.012-20.211ZM114 160.917l86 49.652v99.312l-86-49.652Z" />
  </svg>
);
export default SvgSearchLogistics;