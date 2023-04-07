import * as React from 'react';
const SvgBox4 = ({ title, titleId, ...props }) => (
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
    <path d="M443.507 56H68.493C48.091 56 31 72.341 31 92.743V164.8c0 3.866 3.627 7.2 7.493 7.2H57v247.257A36.519 36.519 0 0 0 93.643 456h324.714A36.519 36.519 0 0 0 455 419.257V172h18.507c3.866 0 7.493-3.334 7.493-7.2V92.743C481 72.341 463.909 56 443.507 56ZM441 419.257A22.505 22.505 0 0 1 418.357 442H93.643A22.505 22.505 0 0 1 71 419.257V172h370ZM467 158H45V92.743C45 80.061 55.811 70 68.493 70h375.014C456.189 70 467 80.061 467 92.743Z" />
    <path d="M200.8 310h110.4a45 45 0 1 0 0-90H200.8a45 45 0 1 0 0 90Zm0-76h110.4a31 31 0 1 1 0 62H200.8a31 31 0 1 1 0-62Z" />
  </svg>
);
export default SvgBox4;
