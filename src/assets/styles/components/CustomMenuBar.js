import { secondaryColor } from "../../configs";

function menuItem() {
  // const { palette, borders, transitions } = theme;

  // const { secondary, light, dark } = palette;
  // const { borderRadius } = borders;

  return {
    display: "flex",
    alignItems: "center",
    width: "100%",
    color: secondaryColor[0],
    borderRadius: 5,
    // transition: transitions.create("background-color", {
    //   easing: transitions.easing.easeInOut,
    //   duration: transitions.duration.standard,
    // }),

    "& *": {
      transition: "color 100ms linear",
    },

    "&:not(:last-child)": {
      mb: 1,
    },

    "&:hover": {
      backgroundColor: secondaryColor[1],
    },
  };
}

export default menuItem;
