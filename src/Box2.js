import * as React from 'react';
const SvgBox2 = ({ title, titleId, ...props }) => (
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
    <path d="M456 58H56c-3.866 0-7 2.639-7 6.5v103.043c0 3.866 3.134 7.457 7 7.457h26v272.5a6.232 6.232 0 0 0 6.564 6.5h335.358c3.867 0 7.078-2.639 7.078-6.5V175h25c3.866 0 7-3.591 7-7.457V64.505c0-3.866-3.134-6.505-7-6.505Zm-39 382H96V175h109v165.2a6.9 6.9 0 0 0 3.45 6.1 6.79 6.79 0 0 0 3.379.9 6.9 6.9 0 0 0 3.6-1.013l40.3-24.427 41.439 24.468a7.261 7.261 0 0 0 7.169.051A7.133 7.133 0 0 0 308 340.2V175h109ZM219 327.777V175h75v152.943l-34.636-20.363a6.921 6.921 0 0 0-7.144.041ZM449 161H63V72h386Z" />
  </svg>
);
export default SvgBox2;
