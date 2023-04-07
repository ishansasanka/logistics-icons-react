import * as React from 'react';
const SvgPackage = ({ title, titleId, ...props }) => (
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
    <path d="M459 254.609C459 366.372 368.075 457.3 256.313 457.3a200.8 200.8 0 0 1-116.532-36.834l28.335-38.457a7 7 0 0 0-6.537-11.094l-67.768 8.8a7 7 0 0 0-6 8.138l11.673 67.333a7 7 0 0 0 12.533 2.957l19.455-26.406a216.749 216.749 0 0 0 324.848-260.6 7 7 0 0 0-12.916 5.4A201.313 201.313 0 0 1 459 254.609ZM124.442 417.68c-.019.024-.041.046-.06.07-.031.042-.056.085-.086.127l-13.816 18.751-7.623-43.973 44.258-5.748ZM62.137 345.171a7 7 0 0 0 6.455-9.7A201.313 201.313 0 0 1 53 257.391C53 145.628 143.925 54.7 255.687 54.7a200.8 200.8 0 0 1 116.532 36.838L343.884 130a7 7 0 0 0 6.537 11.094l67.768-8.8a7 7 0 0 0 6-8.138l-11.677-67.339a7 7 0 0 0-12.533-2.957l-19.455 26.406A216.749 216.749 0 0 0 55.676 340.87a7 7 0 0 0 6.461 4.301ZM387.558 94.32c.019-.024.041-.046.06-.07.031-.042.056-.085.086-.127l13.816-18.751 7.623 43.973-44.258 5.748Z" />
    <path d="M252.5 406.4a7 7 0 0 0 7 0l125-72.168a7 7 0 0 0 3.5-6.062V183.831a7 7 0 0 0-3.5-6.062l-125-72.169a7 7 0 0 0-7 0l-125 72.168a7 7 0 0 0-3.5 6.062v144.339a7 7 0 0 0 3.5 6.062ZM374 324.127l-111 64.086V260.031l111-64.086Zm-7.008-140.3L256 247.907 206.274 219.2l110.991-64.081ZM256 119.746l47.266 27.288-110.992 64.081-47.266-27.289Zm-118 76.2 111 64.086v128.181l-111-64.086Z" />
  </svg>
);
export default SvgPackage;
