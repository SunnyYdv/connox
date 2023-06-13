import cls from "classnames";
import React, { FC } from "react";
import { IconProps } from "shared/icons";

export const LinkedIn: FC<IconProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <svg
      className={cls("fill-current", className)}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >

<path d="M34.0819 34.0827H28.1552V24.8008C28.1552 22.5875 28.1157 19.7382 25.0726 19.7382C21.9858 19.7382 21.5135 22.1498 21.5135 24.6397V34.0821H15.5867V14.9948H21.2764V17.6033H21.3561C21.9255 16.6297 22.7483 15.8288 23.7368 15.2858C24.7254 14.7429 25.8427 14.4782 26.9698 14.5201C32.9768 14.5201 34.0844 18.4713 34.0844 23.6117L34.0819 34.0827ZM8.89938 12.3857C8.21913 12.3859 7.55412 12.1843 6.98845 11.8064C6.42278 11.4286 5.98188 10.8915 5.72145 10.2631C5.46102 9.63461 5.39277 8.94306 5.52536 8.27584C5.65795 7.60862 5.98542 6.99571 6.46633 6.5146C6.94725 6.0335 7.56003 5.70581 8.22718 5.57297C8.89433 5.44014 9.58587 5.50813 10.2144 5.76834C10.8429 6.02856 11.3801 6.46931 11.7581 7.03486C12.1362 7.60041 12.338 8.26537 12.3381 8.94563C12.3382 9.39731 12.2493 9.84458 12.0765 10.2619C11.9038 10.6792 11.6505 11.0584 11.3312 11.3779C11.0119 11.6973 10.6328 11.9508 10.2155 12.1237C9.79826 12.2966 9.35104 12.3856 8.89938 12.3857ZM11.8627 34.0827H5.92983V14.9948H11.8627V34.0827ZM37.0366 0.00272526H2.95165C2.17802 -0.00600548 1.43253 0.292772 0.879067 0.833404C0.325604 1.37404 0.00944177 2.11229 0 2.88594V37.1135C0.00911861 37.8875 0.325095 38.6263 0.878539 39.1674C1.43198 39.7086 2.17763 40.008 2.95165 39.9998H37.0366C37.8122 40.0095 38.5599 39.711 39.1155 39.1698C39.6712 38.6286 39.9893 37.889 40 37.1135V2.88347C39.9889 2.10829 39.6706 1.36919 39.115 0.828574C38.5593 0.287955 37.8118 -0.00996905 37.0366 0.000254703" fill=""/>
</svg>

  );
};