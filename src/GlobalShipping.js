import * as React from 'react';
const SvgGlobalShipping = ({ title, titleId, ...props }) => (
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
    <path d="M256 49C141.86 49 49 141.859 49 256s92.86 207 207 207 207-92.859 207-207S370.14 49 256 49Zm0 14a192 192 0 0 1 116.389 39.15 267.616 267.616 0 0 0-90.62 18.123 40.293 40.293 0 0 0-68.4 1.551 266.746 266.746 0 0 0-87.046-8.651A192.253 192.253 0 0 1 256 63Zm18.39 79.377a26.31 26.31 0 0 1-26.333 26.333 26.334 26.334 0 1 1 26.333-26.333ZM114.621 387.23a192.611 192.611 0 0 1-3.6-258.481 252.621 252.621 0 0 1 97.393 6.228 40.092 40.092 0 0 0 3.722 25.712 266.2 266.2 0 0 0-76.906 101.436 40.329 40.329 0 0 0-20.127 77.936 265.3 265.3 0 0 0-.482 47.169Zm-13.28-85.487a26.333 26.333 0 1 1 26.333 26.334 26.363 26.363 0 0 1-26.333-26.334ZM256 449a192.164 192.164 0 0 1-125.633-46.612c-.012-.14-.019-.28-.039-.421a251.59 251.59 0 0 1-1.35-59.923 40.322 40.322 0 0 0 19.352-74.937 252.232 252.232 0 0 1 72.251-95.241 40.284 40.284 0 0 0 59.508-4.984c4.77 3.1 9.465 6.37 14.012 9.779a249.657 249.657 0 0 1 57.68 60.671 40.317 40.317 0 0 0 32.836 70.768A250.806 250.806 0 0 1 394 389.625l1.073.053A192.451 192.451 0 0 1 256 449Zm131.716-156.323A26.339 26.339 0 1 1 403.8 268.41a26.166 26.166 0 0 1-16.084 24.267Zm20.565 81.758a264.515 264.515 0 0 0-10.491-71.2A40.316 40.316 0 0 0 364 230.406a263.571 263.571 0 0 0-61.5-64.945 269.244 269.244 0 0 0-15.938-11.071 40.231 40.231 0 0 0 .746-21.257 253.415 253.415 0 0 1 101.708-16.849 192.659 192.659 0 0 1 19.265 258.151Z" />
  </svg>
);
export default SvgGlobalShipping;
