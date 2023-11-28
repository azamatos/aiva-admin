import * as React from "react";

// next imports
import NextLinkComposed from "NextLinkComposed";

// M-UI
import MuiLink from "@mui/material/Link";

// types
import { LinkProps } from "./types/link";

// =============================|| Custom Link Component ||============================= //

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { as: linkAs, href, noLinkStyle, role, ...other },
  ref
) {
  return (
    <MuiLink
      component={NextLinkComposed}
      linkAs={linkAs}
      ref={ref}
      to={href}
      {...other}
    />
  );
});

export default Link;
