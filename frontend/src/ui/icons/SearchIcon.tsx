import { SvgIcon, SvgIconProps } from '@mui/material';

export const SearchIcon = (props: SvgIconProps) => (
  <SvgIcon aria-label="SearchIcon" {...props}>
    <path
      d="M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="white"
      strokeWidth="2"
    />
    <path
      d="M21.5 21.5L17 17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </SvgIcon>
);
