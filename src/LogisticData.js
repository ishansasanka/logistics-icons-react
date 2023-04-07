import * as React from 'react';
const SvgLogisticData = ({ title, titleId, ...props }) => (
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
    <path d="M184 337a7 7 0 0 0 7-7v-81a7 7 0 0 0-7-7h-49a7 7 0 0 0-7 7v81a7 7 0 0 0 7 7Zm-42-81h36v66h-36ZM90 329V191a7 7 0 0 0-7-7H34a7 7 0 0 0-7 7v138a7 7 0 0 0 7 7h49a7 7 0 0 0 7-7Zm-13-7H41V198h36ZM58.926 150.7a34.879 34.879 0 0 0 27.586-13.543l39.788 27.701a34.925 34.925 0 1 0 68.819 8.418 35.292 35.292 0 0 0-.267-4.25l42.009-35.43A34.915 34.915 0 0 0 294.3 96.922l37.9-34.743a34.906 34.906 0 1 0-4.4-16.936c0 .646.02 1.287.055 1.924l-41.07 37.648a34.9 34.9 0 0 0-57.719 37.042l-39.185 33.048a34.884 34.884 0 0 0-57.423-2.82l-39.7-27.641A34.928 34.928 0 1 0 58.926 150.7ZM362.731 24.317a20.926 20.926 0 1 1-20.925 20.926 20.95 20.95 0 0 1 20.925-20.926ZM261.463 87.906a20.926 20.926 0 1 1-20.926 20.926 20.95 20.95 0 0 1 20.926-20.926ZM160.194 152.35a20.926 20.926 0 1 1-20.925 20.926 20.95 20.95 0 0 1 20.925-20.926ZM58.926 94.844A20.926 20.926 0 1 1 38 115.771a20.951 20.951 0 0 1 20.926-20.927ZM394 256.974V120.141c0-3.866-2.674-7.141-6.54-7.141H338a7.124 7.124 0 0 0-7 7.141v137.364a135.922 135.922 0 0 0-38 17.567v-91.593c0-3.867-2.941-7.479-6.808-7.479h-49.458c-3.866 0-6.734 3.612-6.734 7.479v146a6.386 6.386 0 0 0 6.734 6.521h9.608a128.968 128.968 0 0 0-6.9 41.165c0 68.529 55.752 124.4 124.281 124.4S487.77 445.872 487.77 377.343c0-57.921-39.77-106.653-93.77-120.369ZM345 127h35v127.255a116.278 116.278 0 0 0-16.511-1.131 120.007 120.007 0 0 0-18.489 1.42ZM244 322V190h35v96.3a131.4 131.4 0 0 0-26.777 35.7Zm119.721 165.683A110.28 110.28 0 1 1 474 377.4a110.406 110.406 0 0 1-110.279 110.283Z" />
    <path d="m427.36 336.7-60.069-34.641a7.063 7.063 0 0 0-7.035 0L300.378 336.7a6.889 6.889 0 0 0-3.378 6.062v69.282a6.873 6.873 0 0 0 3.36 6.062l59.931 34.641a6.9 6.9 0 0 0 6.947 0l60.131-34.641a7.125 7.125 0 0 0 3.631-6.062v-69.282a7.134 7.134 0 0 0-3.64-6.062Zm-63.639-20.5 15.407 8.9-46 26.555-15.407-8.895ZM357 434.561 311 408v-53.12l46 26.558Zm6.721-65.246-16.589-9.577 46-26.556 16.589 9.578ZM417 408l-46 26.559V381.44l46-26.558Z" />
  </svg>
);
export default SvgLogisticData;
