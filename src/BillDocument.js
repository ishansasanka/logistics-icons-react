import * as React from 'react';
const SvgBillDocument = ({ title, titleId, ...props }) => (
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
    <path d="M86 429h185.012A98.977 98.977 0 1 0 345 292.466V142a7 7 0 0 0-2.05-4.95l-112-112A7 7 0 0 0 226 23H86a35.04 35.04 0 0 0-35 35v336a35.04 35.04 0 0 0 35 35Zm276-124a84.9 84.9 0 1 1-22.181 2.921A85.1 85.1 0 0 1 362 305ZM233 46.9l88.1 88.1H254a21.024 21.024 0 0 1-21-21ZM65 58a21.024 21.024 0 0 1 21-21h133v77a35.04 35.04 0 0 0 35 35h77v146.971A99.048 99.048 0 0 0 266.2 415H86a21.024 21.024 0 0 1-21-21Z" />
    <path d="M362.188 439.275c-.063 0-.125-.009-.188-.009s-.125.007-.188.009a19.659 19.659 0 0 1-19.454-19.632 7 7 0 0 0-14 0A33.7 33.7 0 0 0 355 452.547v9.588a7 7 0 0 0 14 0v-9.588A33.642 33.642 0 0 0 362 386a19.642 19.642 0 1 1 19.642-19.641 7 7 0 0 0 14 0A33.7 33.7 0 0 0 369 333.454v-8.376a7 7 0 0 0-14 0v8.376A33.641 33.641 0 0 0 362 400a19.638 19.638 0 0 1 .188 39.275ZM103 341h144a7 7 0 0 0 0-14H103a7 7 0 0 0 0 14ZM103 375h107a7 7 0 0 0 0-14H103a7 7 0 0 0 0 14ZM103 218h8v82.172a6.566 6.566 0 0 0 6.653 6.828h130.912c3.867 0 7.435-2.961 7.435-6.828V218h7a6.836 6.836 0 0 0 7-6.806v-37.366a6.855 6.855 0 0 0-7-6.828H103a6.855 6.855 0 0 0-7 6.828v37.366a6.836 6.836 0 0 0 7 6.806Zm139 75H125v-75h31v43.892a7.061 7.061 0 0 0 10.7 5.987l16.182-9.8 16.674 9.84a7 7 0 0 0 3.561.972 6.782 6.782 0 0 0 3.411-.921 6.945 6.945 0 0 0 3.472-6.078V218h32Zm-72-43.535V218h26v31.63l-9.653-5.734a7.029 7.029 0 0 0-7.205.041ZM110 181h146v23H110Z" />
  </svg>
);
export default SvgBillDocument;
