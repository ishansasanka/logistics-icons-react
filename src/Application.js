import * as React from 'react';
const SvgApplication = ({ title, titleId, ...props }) => (
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
    <path d="M470 335.239V91a47.206 47.206 0 0 0-47.175-47H89.175A47.206 47.206 0 0 0 42 91v244.239C42 361.155 63.259 382 89.175 382H249v72h-75.627a7 7 0 0 0 0 14H343.41a7 7 0 1 0 0-14H263v-72h159.825C448.741 382 470 361.155 470 335.239Zm-14 0A32.984 32.984 0 0 1 422.825 368H89.175A32.984 32.984 0 0 1 56 335.239V307h400ZM456 293H56V91a33.19 33.19 0 0 1 33.175-33h333.65A33.19 33.19 0 0 1 456 91Z" />
    <path d="M134.182 105.667a55.182 55.182 0 1 0 55.181 55.182 54.881 54.881 0 0 0-55.181-55.182Zm0 96.364a41.182 41.182 0 1 1 0-82.364 41.182 41.182 0 0 1 0 82.364Z" />
    <path d="m149.011 144.464-21.628 17.6-7.125-8.344a7 7 0 1 0-10.647 9.092l11.564 13.541a7 7 0 0 0 9.741.884l26.931-21.91a7 7 0 0 0-8.836-10.86ZM171 228H86a7 7 0 0 0 0 14h85a7 7 0 0 0 0-14ZM142 258H86a7 7 0 0 0 0 14h56a7 7 0 0 0 0-14ZM428.735 94h-200a6.913 6.913 0 0 0-6.735 7.154v41.519c0 3.867 2.869 7.327 6.735 7.327H238v102.649a7.322 7.322 0 0 0 7.017 7.351H412.7a7.572 7.572 0 0 0 7.3-7.351V150h8.735a7.515 7.515 0 0 0 7.265-7.327v-41.519A7.363 7.363 0 0 0 428.735 94ZM406 246H252v-96h48v49a6.77 6.77 0 0 0 10.344 5.987l18.316-11.128 18.9 11.169a6.948 6.948 0 0 0 3.54.972 6.806 6.806 0 0 0 3.418-.92A6.953 6.953 0 0 0 358 199v-49h48Zm-92-59.423V150h30v36.742l-11.921-7.064a6.619 6.619 0 0 0-6.974.041ZM422 136H236v-28h186Z" />
  </svg>
);
export default SvgApplication;