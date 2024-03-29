import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CameraIcon(props) {
  return (
    <Svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.574 1.372A3 3 0 0014.054 0h-4.61a3 3 0 00-2.52 1.374L6.17 2.542A1 1 0 015.33 3H4.5A4.5 4.5 0 000 7.5v10A4.5 4.5 0 004.5 22H19a4.5 4.5 0 004.5-4.5v-10A4.5 4.5 0 0019 3h-.83a1 1 0 01-.84-.457l-.756-1.17zm-7.13.128h4.61a1.5 1.5 0 011.26.686l.756 1.17a2.5 2.5 0 002.1 1.144H19a3 3 0 013 3v10a3 3 0 01-3 3H4.5a3 3 0 01-3-3v-10a3 3 0 013-3h.83a2.5 2.5 0 002.1-1.145l.754-1.168a1.5 1.5 0 011.26-.687zm2.306 5a5.75 5.75 0 110 11.5 5.75 5.75 0 010-11.5zM7.5 12.25a4.25 4.25 0 118.5 0 4.25 4.25 0 01-8.5 0z"
        fill="#262626"
      />
    </Svg>
  );
}

export default CameraIcon;
