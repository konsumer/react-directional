import React from "react";

const SvgLook = props => (
  <svg viewBox="0 0 26.458 26.458" {...props}>
    <g transform="translate(0 -270.542)">
      <rect
        width={5.292}
        height={10.583}
        x={10.583}
        y={270.542}
        rx={1.323}
        className="look_svg__up"
      />
      <rect
        width={5.292}
        height={10.583}
        x={10.583}
        y={286.417}
        rx={1.323}
        className="look_svg__down"
      />
      <rect
        width={5.292}
        height={10.583}
        x={-286.417}
        transform="rotate(-90)"
        rx={1.323}
        className="look_svg__left"
      />
      <rect
        width={5.292}
        height={10.583}
        x={-286.417}
        y={15.875}
        transform="rotate(-90)"
        rx={1.323}
        className="look_svg__right"
      />
    </g>
  </svg>
);

export default SvgLook;

