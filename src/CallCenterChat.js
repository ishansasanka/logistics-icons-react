import * as React from 'react';
const SvgCallCenterChat = ({ title, titleId, ...props }) => (
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
    <path d="M36 404.585v90.736c0 3.866 3.418 6.679 7.284 6.679h92.755a6.7 6.7 0 0 0 6.961-6.679v-23.6a7.839 7.839 0 0 1 7.521-5.286c4.124.017 8.855.038 13.336.06a6.983 6.983 0 0 0 5.149 2.382l41.718.639h.242a21.152 21.152 0 0 0 21.11-20.813 20.843 20.843 0 0 0-5.857-15.038A21.655 21.655 0 0 0 212 427.331V409h23.375a11.351 11.351 0 0 0 10.856-15.464l-19.489-50.952c-.015-5.713-.061-18.917-.169-20.666a110.939 110.939 0 0 0-110.786-104.864c-.417 0-.838 0-1.255.007q-1.435.015-2.857.067a101.516 101.516 0 0 0-84.447 50.839 103.458 103.458 0 0 0-2.658 100.114C27.611 375.633 35 395.856 36 404.585Zm180.06 38.83a7.7 7.7 0 0 1 2.018 5.333 7.332 7.332 0 0 1-7.086 7.252h-.079l-34.693-.918.2-14.082h34.626a7.266 7.266 0 0 1 5.014 2.415ZM114 231.072s.423-.01.586-.012c.37 0 .787-.006 1.155-.006a96.731 96.731 0 0 1 96.83 91.66c.068 1.277.14 11.869.162 21.186a5.973 5.973 0 0 0 .466 2.28L231.92 395h-27.191c-3.867 0-6.729 3.535-6.729 7.4V427h-28.479a7.128 7.128 0 0 0-7 7.045l-.094 6.524-19.942-.086a27.859 27.859 0 0 1-27.631-28.123l.077-8.2A38.442 38.442 0 0 0 145.2 367.2l.053-3.914a38.172 38.172 0 0 0-11.019-27.319A36.96 36.96 0 0 0 114 325.123Zm10.316 114.68a24.176 24.176 0 0 1 6.934 17.348l-.05 3.9a24.381 24.381 0 0 1-24.341 24h-.228a23.921 23.921 0 0 1-17.184-7.312 24.165 24.165 0 0 1-6.933-17.338l.052-3.912a24.344 24.344 0 0 1 41.753-16.686Zm-85.1-70.746A88.3 88.3 0 0 1 100 232.378v92.648a38.1 38.1 0 0 0-31.534 37.227v3.915a38.4 38.4 0 0 0 32.451 38.406l-.066 7.665a41.875 41.875 0 0 0 40.412 42.243 21.883 21.883 0 0 0-12.029 14.531 7.042 7.042 0 0 0-.231 1.708V488H50v-83.764c0-.217.132-.433.112-.649-1.144-12.279-11.439-38.155-12.618-41.065-.085-.209-.144-.414-.247-.614a89.521 89.521 0 0 1 1.965-86.902ZM384.151 72h34.115a7 7 0 0 0 0-14h-34.115a7 7 0 0 0 0 14ZM321.925 72H361.7a7 7 0 0 0 0-14h-39.775a7 7 0 0 0 0 14ZM458.249 58h-12.525a7 7 0 0 0 0 14h12.525a7 7 0 0 0 0-14ZM307.925 111h65.209a7 7 0 0 0 0-14h-65.209a7 7 0 0 0 0 14ZM458.249 97h-60.917a7 7 0 0 0 0 14h60.917a7 7 0 0 0 0-14ZM458.249 136H307.3a7 7 0 0 0 0 14h150.949a7 7 0 0 0 0-14Z" />
    <path d="M469.118 10H174.057C157.58 10 144 23.084 144 39.561v154.321A30.268 30.268 0 0 0 174.057 224H238v30.085a7.109 7.109 0 0 0 4.1 6.319 7.243 7.243 0 0 0 3.069.681 6.956 6.956 0 0 0 4.438-1.445L293.743 224h175.375A30.119 30.119 0 0 0 499 193.882V39.561A29.643 29.643 0 0 0 469.118 10ZM485 193.882A16.1 16.1 0 0 1 469.118 210H291.262a7.213 7.213 0 0 0-4.525 1.445L252 239.4v-22.636a6.606 6.606 0 0 0-6.767-6.764h-71.176A16.254 16.254 0 0 1 158 193.882V39.561A15.78 15.78 0 0 1 174.057 24h295.061A15.629 15.629 0 0 1 485 39.561Z" />
    <path d="M322.842 175h-31.825a7 7 0 0 0 0 14h31.825a7 7 0 0 0 0-14ZM267.358 175h-82.279a7 7 0 0 0 0 14h82.279a7 7 0 0 0 0-14ZM458.249 175H346.3a7 7 0 1 0 0 14h111.949a7 7 0 0 0 0-14ZM181.54 139.954l50.371 29.071a7.027 7.027 0 0 0 7.015 0l50.463-29.071a7.1 7.1 0 0 0 3.611-6.062V75.75a7.1 7.1 0 0 0-3.608-6.062l-50.407-29.071a7.048 7.048 0 0 0-7.027 0l-50.4 29.071A7.049 7.049 0 0 0 178 75.75v58.142a7.036 7.036 0 0 0 3.54 6.062Zm97.46-10.1-37 20.988v-41.98l37-20.992Zm-7.22-54.1-36.349 20.98L223.761 90l36.349-20.989Zm-36.349-20.992 10.679 6.166-36.349 20.986-10.679-6.166ZM192 87.87l36 20.989v41.979l-36-20.987Z" />
  </svg>
);
export default SvgCallCenterChat;