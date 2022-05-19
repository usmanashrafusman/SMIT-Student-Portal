import pxToRem from "../../function/pxToRem";
function navbar(theme, ownerState) {
  const { palette, transitions, breakpoints } = theme;
  const { transparentNavbar, absolute } = ownerState;

  const { primary } = palette;

  return {
    boxShadow: "#e4e5eb 0px 1px 2px 0px, #eaebee 0px 2px 6px 2px",
    backdropFilter:
      transparentNavbar || absolute
        ? "none"
        : `saturate(200%) blur(${pxToRem(30)})`,
    color: primary.main,
    top: 0,
    minHeight: pxToRem(75),
    display: "grid",
    alignItems: "center",
    paddingRight: absolute ? pxToRem(8) : 0,
    paddingLeft: absolute ? pxToRem(16) : 0,

    "& > *": {
      transition: transitions.create("all", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [breakpoints.up("sm")]: {
        minHeight: "auto",
        // padding: `${pxToRem(4)} ${pxToRem(16)}`,
      },
    },
  };
}

const navbarContainer = ({ breakpoints }) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "0",
    paddingBottom: "0",
  },
});

const navbarRow = ({ breakpoints }, { isMini }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  [breakpoints.up("md")]: {
    justifyContent: isMini ? "space-between" : "stretch",
    width: isMini ? "100%" : "max-content",
  },

  [breakpoints.up("xl")]: {
    justifyContent: "stretch !important",
    width: "max-content !important",
  },
});

const navbarIconButton = ({ breakpoints }) => ({
  px: 2,
  // borderRight: "1px solid lightgray",
  "& .material-icons, .material-icons-round": {
    fontSize: `1.75rem !important`,
  },

  "& .MuiTypography-root": {
    display: "none",

    [breakpoints.up("sm")]: {
      display: "inline-block",
      lineHeight: 1.2,
      ml: 0.5,
    },
  },
});

const navbarDesktopMenu = ({ breakpoints }) => ({
  display: "none !important",
  cursor: "pointer",

  [breakpoints.up("xl")]: {
    display: "inline-block !important",
  },
});

const navbarMobileMenu = ({ breakpoints }) => ({
  display: "inline-block",
  lineHeight: 0,

  [breakpoints.up("xl")]: {
    display: "none",
  },
});

export {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarDesktopMenu,
  navbarMobileMenu,
};
