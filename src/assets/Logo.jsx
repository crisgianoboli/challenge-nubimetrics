import * as React from "react";

const Logo = (props) => (
  <svg
    width={118}
    height={84}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path
        d="M106.25 25.992 92.443 61.94l-.112.305c0 .125-2.874 9.763-10.361 9.763-7.488 0-10.361-9.638-10.382-9.74l-9.209-24.026-9.047-23.564C52.762 12.792 48.105-1 34.035-1 19.966-1 15.313 12.792 14.74 14.677L0 53.027h9.75l13.84-35.952.106-.31c.027-.115 2.873-9.744 10.361-9.744s10.34 9.629 10.382 9.703l9.209 24.026L62.7 64.314C63.269 66.208 67.927 80 81.996 80c14.07 0 18.733-13.792 19.296-15.686L116 25.997l-9.75-.005Z"
        fill="url(#b)"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={-0.048}
        y1={39.493}
        x2={115.995}
        y2={39.493}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#7C2A91" />
        <stop offset={1} stopColor="#7CCCC9" />
      </linearGradient>
      <filter
        id="a"
        x={-1.857}
        y={-1}
        width={119.714}
        height={84.714}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={1.857} />
        <feGaussianBlur stdDeviation={0.929} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_13_1947" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_13_1947"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Logo;
