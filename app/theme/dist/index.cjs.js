var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);
var import_react = require("@chakra-ui/react");

// src/components/index.ts
var components_exports = {};
__export(components_exports, {
  Badge: () => badge_default,
  Button: () => button_default,
  Checkbox: () => checkbox_default,
  CloseButton: () => close_button_default,
  Container: () => container_default,
  CustomSelect: () => custom_select_default,
  Divider: () => divider_default,
  FormLabel: () => form_label_default,
  Heading: () => heading_default,
  Input: () => input_default,
  Link: () => link_default,
  Popover: () => popover_default,
  Progress: () => progress_default,
  RadioCard: () => radio_card_default,
  Table: () => table_default,
  Tabs: () => tabs_default,
  Textarea: () => textarea_default
});

// src/components/badge.ts
var import_theme_tools = require("@chakra-ui/theme-tools");
var baseStyle = {
  textTransform: "normal",
  fontWeight: "medium",
  borderRadius: "2xl"
};
var sizes = {
  lg: {
    fontSize: "sm",
    px: "3",
    py: "1"
  },
  md: {
    fontSize: "sm",
    lineHeight: "1.25rem",
    px: "2.5",
    py: "0.5"
  },
  sm: {
    fontSize: "xs",
    lineHeight: "1.5",
    px: "2",
    py: "0.5"
  }
};
var variants = {
  subtle: (props) => ({
    bg: (0, import_theme_tools.mode)(
      (0, import_theme_tools.darken)(`${props.colorScheme}.50`, 2)(props.theme),
      (0, import_theme_tools.transparentize)(`${props.colorScheme}.200`, 0.16)(props.theme)
    )(props)
  })
};
var defaultProps = {
  size: "md",
  variant: "subtle"
};
var badge_default = {
  baseStyle,
  defaultProps,
  variants,
  sizes
};

// src/components/button.ts
var import_theme_tools2 = require("@chakra-ui/theme-tools");
var baseStyle2 = {
  ":focus:not(:focus-visible)": {
    boxShadow: "none"
  },
  fontWeight: "medium",
  borderRadius: "lg"
};
var sizes2 = {
  lg: {
    fontSize: "md"
  },
  xl: {
    h: "3.75rem",
    minW: "3.75rem",
    fontSize: "lg",
    px: 7
  }
};
var variants2 = {
  primary: (props) => props.theme.components["Button"]["variants"]["solid"]({
    ...props,
    variant: "solid",
    colorScheme: "brand"
  }),
  "primary-on-accent": () => ({
    bg: "brand.50",
    color: "brand.600",
    _hover: { bg: "brand.100" },
    _active: { bg: "brand.100" }
  }),
  secondary: (props) => props.theme.components["Button"]["variants"]["outline"]({
    ...props,
    variant: "outline",
    colorScheme: "gray"
  }),
  "secondary-on-accent": {
    color: "white",
    borderColor: "brand.50",
    borderWidth: "1px",
    _hover: { bg: "whiteAlpha.200" },
    _active: { bg: "whiteAlpha.200" }
  },
  outline: (props) => ({
    color: "emphasized",
    bg: (0, import_theme_tools2.mode)("white", "gray.800")(props),
    _hover: {
      bg: (0, import_theme_tools2.mode)(
        (0, import_theme_tools2.darken)("gray.50", 1)(props.theme),
        (0, import_theme_tools2.transparentize)("gray.700", 0.4)(props.theme)
      )(props)
    },
    _checked: {
      bg: (0, import_theme_tools2.mode)("gray.100", "gray.700")(props)
    },
    _active: {
      bg: (0, import_theme_tools2.mode)("gray.100", "gray.700")(props)
    }
  }),
  ghost: (props) => ({
    color: "emphasized",
    _hover: {
      bg: (0, import_theme_tools2.mode)((0, import_theme_tools2.darken)("gray.50", 1)(props.theme), (0, import_theme_tools2.darken)("gray.700", 4)(props.theme))(props)
    },
    _active: {
      bg: (0, import_theme_tools2.mode)((0, import_theme_tools2.darken)("gray.50", 1)(props.theme), (0, import_theme_tools2.darken)("gray.700", 4)(props.theme))(props)
    },
    _activeLink: {
      bg: (0, import_theme_tools2.mode)("gray.100", "gray.700")(props)
    }
  }),
  "ghost-on-accent": (props) => ({
    color: "brand.50",
    _hover: {
      bg: (0, import_theme_tools2.transparentize)("brand.500", 0.67)(props.theme)
    },
    _activeLink: {
      color: "white",
      bg: "bg-accent-subtle"
    }
  }),
  link: (props) => {
    if (props.colorScheme === "gray") {
      return {
        color: "muted",
        _hover: {
          textDecoration: "none",
          color: "default"
        },
        _active: {
          color: "default"
        }
      };
    }
    return {
      color: (0, import_theme_tools2.mode)(`${props.colorScheme}.600`, `${props.colorScheme}.200`)(props),
      _hover: {
        color: (0, import_theme_tools2.mode)(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props),
        textDecoration: "none"
      },
      _active: {
        color: (0, import_theme_tools2.mode)(`${props.colorScheme}.700`, `${props.colorScheme}.300`)(props)
      }
    };
  },
  "link-on-accent": () => {
    return {
      padding: 0,
      height: "auto",
      lineHeight: "normal",
      verticalAlign: "baseline",
      color: "brand.50",
      _hover: {
        color: "white"
      },
      _active: {
        color: "white"
      }
    };
  }
};
var button_default = {
  baseStyle: baseStyle2,
  variants: variants2,
  sizes: sizes2
};

// src/components/checkbox.ts
var import_theme_tools3 = require("@chakra-ui/theme-tools");
var baseStyle3 = (props) => ({
  label: {
    color: "muted",
    fontWeight: "medium"
  },
  control: {
    bg: (0, import_theme_tools3.mode)("white", "gray.800")(props),
    borderRadius: "base"
  }
});
var sizes3 = {
  md: {
    label: {
      fontSize: "sm"
    }
  }
};
var defaultProps2 = {
  colorScheme: "brand"
};
var checkbox_default = {
  baseStyle: baseStyle3,
  sizes: sizes3,
  defaultProps: defaultProps2
};

// src/components/close-button.ts
var baseStyle4 = {
  _focus: {
    boxShadow: "none"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
};
var close_button_default = {
  baseStyle: baseStyle4
};

// src/components/container.ts
var baseStyle5 = {
  maxW: "7xl",
  px: { base: "4", md: "8" }
};
var container_default = { baseStyle: baseStyle5 };

// src/components/custom-select.ts
var import_theme_tools4 = require("@chakra-ui/theme-tools");
var parts = ["field", "menu", "option"];
var baseStyle6 = {
  field: {
    width: "100%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 50ms ease"
  },
  option: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  },
  menu: {
    minW: "3xs"
  }
};
var variants3 = {
  outline: (props) => ({
    menu: {
      bg: (0, import_theme_tools4.mode)("white", "gray.800")(props),
      boxShadow: (0, import_theme_tools4.mode)("sm", "sm-dark")(props),
      color: "inherit",
      minW: "3xs",
      py: "2",
      borderRadius: "md",
      borderWidth: "1px"
    },
    option: {
      _selected: {
        bg: (0, import_theme_tools4.mode)("gray.100", "gray.700")(props)
      }
    },
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: (0, import_theme_tools4.mode)("white", "gray.800")(props),
      _hover: {
        borderColor: (0, import_theme_tools4.mode)("gray.300", "whiteAlpha.400")(props)
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        borderColor: "inherit"
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: (0, import_theme_tools4.getColor)(props.theme, (0, import_theme_tools4.mode)("red.500", "red.300")(props)),
        boxShadow: `0 0 0 1px ${(0, import_theme_tools4.getColor)(props.theme, (0, import_theme_tools4.mode)("red.500", "red.300")(props))}`
      },
      _focus: {
        borderColor: (0, import_theme_tools4.mode)("brand.500", "brand.200")(props),
        boxShadow: (0, import_theme_tools4.mode)(
          `0px 0px 0px 1px ${(0, import_theme_tools4.transparentize)(`brand.500`, 1)(props.theme)}`,
          `0px 0px 0px 1px ${(0, import_theme_tools4.transparentize)(`brand.200`, 1)(props.theme)}`
        )(props)
      },
      _expanded: {
        borderColor: (0, import_theme_tools4.mode)("brand.500", "brand.200")(props),
        boxShadow: (0, import_theme_tools4.mode)(
          `0px 0px 0px 1px ${(0, import_theme_tools4.transparentize)(`brand.500`, 1)(props.theme)}`,
          `0px 0px 0px 1px ${(0, import_theme_tools4.transparentize)(`brand.200`, 1)(props.theme)}`
        )(props)
      }
    }
  })
};
var sizes4 = {
  sm: {
    field: {
      px: 3,
      h: 8,
      fontSize: "sm",
      borderRadius: "sm"
    },
    menu: {
      fontSize: "sm",
      borderRadius: "sm"
    },
    option: {
      px: 3,
      h: 8,
      fontSize: "sm"
    }
  },
  md: {
    field: {
      px: 4,
      h: 10,
      fontSize: "md",
      borderRadius: "md"
    },
    menu: {
      fontSize: "md",
      borderRadius: "md"
    },
    option: {
      px: 4,
      h: 10,
      fontSize: "md"
    }
  },
  lg: {
    field: {
      px: 4,
      h: 12,
      fontSize: "lg",
      borderRadius: "md"
    },
    menu: {
      fontSize: "lg",
      borderRadius: "md"
    },
    option: {
      px: 4,
      h: 12,
      fontSize: "lg"
    }
  }
};
var custom_select_default = {
  parts,
  baseStyle: baseStyle6,
  variants: variants3,
  sizes: sizes4,
  defaultProps: {
    size: "md",
    variant: "outline",
    colorScheme: "brand"
  }
};

// src/components/divider.ts
var divider_default = {
  baseStyle: {
    opacity: 1
  }
};

// src/components/form-label.ts
var baseStyle7 = {
  color: "emphasized",
  mb: "1.5",
  fontSize: "sm"
};
var sizes5 = {
  sm: {
    _peerPlaceholderShown: {
      fontSize: "sm",
      top: "1.5",
      left: "4"
    }
  },
  md: {
    _peerPlaceholderShown: {
      fontSize: "md",
      top: "2",
      left: "4"
    }
  },
  lg: {
    _peerPlaceholderShown: {
      fontSize: "lg",
      top: "2.5",
      left: "4"
    }
  }
};
var variants4 = {
  inline: () => ({
    margin: 0,
    minW: "2xs"
  }),
  floating: () => ({
    position: "absolute",
    transition: "all 0.12s ease-in",
    pointerEvents: "none",
    top: "-27px",
    left: "0",
    _peerPlaceholderShown: {
      fontWeight: "normal",
      color: "subtle"
    },
    _peerFocus: {
      fontSize: "sm",
      fontWeight: "medium",
      top: "-27px",
      left: "0",
      color: "muted"
    }
  })
};
var defaultProps3 = {
  size: "md"
};
var form_label_default = {
  baseStyle: baseStyle7,
  sizes: sizes5,
  variants: variants4,
  defaultProps: defaultProps3
};

// src/components/heading.ts
var baseStyle8 = {
  fontWeight: "semibold"
};
var sizes6 = {
  "2xl": {
    fontSize: "7xl",
    lineHeight: "5.625rem",
    letterSpacing: "tight"
  },
  xl: {
    fontSize: "6xl",
    lineHeight: "4.5rem",
    letterSpacing: "tight"
  },
  lg: {
    fontSize: "5xl",
    lineHeight: "3.75rem",
    letterSpacing: "tight"
  },
  md: {
    fontSize: "4xl",
    lineHeight: "2.75rem",
    letterSpacing: "tight"
  },
  sm: {
    fontSize: "3xl",
    lineHeight: "2.375rem"
  },
  xs: {
    fontSize: "2xl",
    lineHeight: "2rem"
  }
};
var heading_default = {
  baseStyle: baseStyle8,
  sizes: sizes6
};

// src/components/input.ts
var import_theme_tools5 = require("@chakra-ui/theme-tools");
var variants5 = {
  outline: (props) => ({
    field: {
      borderRadius: "lg",
      bg: (0, import_theme_tools5.mode)("white", "gray.800")(props),
      _hover: { borderColor: (0, import_theme_tools5.mode)("gray.300", "gray.600")(props) },
      _focus: {
        borderColor: (0, import_theme_tools5.mode)("brand.500", "brand.200")(props),
        boxShadow: (0, import_theme_tools5.mode)(
          `0px 0px 0px 1px ${(0, import_theme_tools5.transparentize)(`brand.500`, 1)(props.theme)}`,
          `0px 0px 0px 1px ${(0, import_theme_tools5.transparentize)(`brand.200`, 1)(props.theme)}`
        )(props)
      }
    },
    addon: {
      borderRadius: "lg",
      bg: (0, import_theme_tools5.mode)("gray.50", "gray.700")(props)
    }
  }),
  "outline-on-accent": (props) => ({
    field: {
      bg: "white",
      borderRadius: "lg",
      color: "gray.900",
      borderWidth: "1px",
      borderColor: "brand.50",
      _placeholder: {
        color: "gray.500"
      },
      _hover: {
        borderColor: "brand.100"
      },
      _focus: {
        borderColor: "brand.200",
        boxShadow: `0px 0px 0px 1px ${(0, import_theme_tools5.transparentize)(`brand.200`, 1)(props.theme)}`
      }
    }
  }),
  filled: (props) => {
    if (props.colorScheme === "gray") {
      return {
        field: {
          bg: (0, import_theme_tools5.mode)("white", "gray.800")(props),
          _hover: {
            borderColor: (0, import_theme_tools5.mode)("gray.200", "gray.700")(props),
            bg: (0, import_theme_tools5.mode)("white", "gray.700")(props)
          },
          _focus: {
            borderColor: "accent",
            bg: (0, import_theme_tools5.mode)("white", "gray.800")(props)
          }
        }
      };
    }
    return {
      field: {
        bg: "bg-accent-subtle",
        color: "on-accent",
        _placeholder: {
          color: "on-accent"
        },
        _hover: {
          borderColor: "brand.400",
          bg: "bg-accent-subtle"
        },
        _focus: {
          bg: "bg-accent-subtle",
          borderColor: "brand.300"
        }
      }
    };
  }
};
var sizes7 = {
  lg: {
    field: {
      fontSize: "md",
      borderRadius: "lg"
    }
  }
};
var input_default = {
  variants: variants5,
  sizes: sizes7,
  defaultProps: {
    colorScheme: "gray"
  }
};

// src/components/link.ts
var variants6 = {
  menu: () => ({
    borderRadius: "lg",
    _hover: {
      textDecoration: "none",
      bg: "bg-subtle"
    }
  })
};
var link_default = {
  variants: variants6
};

// src/components/popover.ts
var import_theme_tools6 = require("@chakra-ui/theme-tools");
var baseStyle9 = (props) => ({
  content: {
    borderWidth: "1px",
    boxShadow: (0, import_theme_tools6.mode)("lg", "lg-dark")(props),
    borderRadius: "lg",
    background: "bg-surface",
    overflow: "hidden"
  }
});
var popover_default = {
  baseStyle: baseStyle9
};

// src/components/progress.ts
var baseStyle10 = {
  track: {
    borderRadius: "base"
  }
};
var variants7 = {
  solid: {
    track: {
      bg: "bg-muted"
    }
  },
  "on-accent": {
    track: {
      bg: "transparent"
    },
    filledTrack: {
      bg: "brand.50"
    }
  }
};
var defaultProps4 = {
  colorScheme: "brand",
  variant: "solid"
};
var progress_default = {
  variants: variants7,
  baseStyle: baseStyle10,
  defaultProps: defaultProps4
};

// src/components/radio-card.ts
var import_theme_tools7 = require("@chakra-ui/theme-tools");
var baseStyle11 = (props) => ({
  borderWidth: "1px",
  borderRadius: "lg",
  p: "4",
  bg: "bg-surface",
  transitionProperty: "common",
  transitionDuration: "normal",
  _hover: { borderColor: (0, import_theme_tools7.mode)("gray.300", "gray.600")(props) },
  _checked: {
    borderColor: (0, import_theme_tools7.mode)("brand.500", "brand.200")(props),
    boxShadow: (0, import_theme_tools7.mode)(
      `0px 0px 0px 1px ${(0, import_theme_tools7.transparentize)(`brand.500`, 1)(props.theme)}`,
      `0px 0px 0px 1px ${(0, import_theme_tools7.transparentize)(`brand.200`, 1)(props.theme)}`
    )(props)
  }
});
var radio_card_default = {
  baseStyle: baseStyle11
};

// src/components/table.ts
var import_theme_tools8 = require("@chakra-ui/theme-tools");
var baseStyle12 = {
  table: {
    bg: "bg-surface",
    whiteSpace: "nowrap"
  },
  th: {
    fontWeight: "medium",
    textTransform: "normal",
    letterSpacing: "normal",
    borderTopWidth: "1px",
    whiteSpace: "nowrap"
  }
};
var variants8 = {
  simple: (props) => ({
    th: {
      color: "muted",
      bg: (0, import_theme_tools8.mode)("gray.50", (0, import_theme_tools8.transparentize)("gray.700", 0.4)(props.theme))(props)
    }
  }),
  striped: (props) => ({
    th: {
      color: "muted",
      borderBottomWidth: "0px"
    },
    thead: {
      "th,td": {
        borderWidth: "0px"
      }
    },
    tbody: {
      tr: {
        "th,td": {
          borderWidth: "0px"
        },
        "&:last-of-type": {
          "th, td": {
            borderBottomWidth: "1px"
          }
        },
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "0px"
          },
          td: {
            bg: (0, import_theme_tools8.mode)("gray.50", (0, import_theme_tools8.transparentize)("gray.700", 0.4)(props.theme))(props)
          }
        }
      }
    }
  })
};
var sizes8 = {
  md: {
    th: {
      lineHeight: "1.25rem"
    },
    td: {
      fontSize: "sm"
    }
  }
};
var table_default = {
  sizes: sizes8,
  baseStyle: baseStyle12,
  variants: variants8
};

// src/components/tabs.ts
var baseStyle13 = {
  tab: {
    fontWeight: "medium",
    color: "muted",
    _focus: {
      boxShadow: "none"
    },
    _focusVisible: {
      boxShadow: "base"
    }
  }
};
var withLine = (props) => {
  const { orientation, size } = props;
  const isVertical = orientation === "vertical";
  const borderProp = orientation === "vertical" ? "borderStart" : "borderBottom";
  const marginProp = isVertical ? "marginStart" : "marginBottom";
  const horizontalStyles = {
    pt: "0",
    pb: "4.5",
    px: "1",
    justifyContent: "start",
    ":not(:last-child)": {
      me: "4"
    }
  };
  const verticalStyles = {
    justifyContent: "start",
    px: size === "lg" ? "3.5" : "3",
    ":not(:last-child)": {
      mb: "2"
    }
  };
  return {
    tablist: {
      [borderProp]: "1px solid",
      borderColor: "inherit"
    },
    tab: {
      color: "muted",
      [borderProp]: "2px solid transparent",
      [marginProp]: "-1px",
      _selected: {
        color: "accent",
        [borderProp]: "2px solid"
      },
      _active: {
        bg: "transparent"
      },
      ...isVertical ? verticalStyles : horizontalStyles
    }
  };
};
var enclosed = {
  tab: {
    _selected: {
      color: "accent"
    }
  }
};
var variants9 = {
  "with-line": withLine,
  enclosed
};
var sizes9 = {
  md: {
    tab: {
      fontSize: "sm",
      lineHeight: "1.25rem",
      py: "2"
    }
  },
  lg: {
    tab: {
      fontSize: "md",
      py: "2.5"
    }
  }
};
var tabs_default = { baseStyle: baseStyle13, variants: variants9, sizes: sizes9 };

// src/components/textarea.ts
var import_theme_tools9 = require("@chakra-ui/theme-tools");
var variants10 = {
  outline: (props) => ({
    borderRadius: "lg",
    bg: (0, import_theme_tools9.mode)("white", "gray.800")(props),
    _hover: { borderColor: (0, import_theme_tools9.mode)("gray.300", "gray.600")(props) },
    _focus: {
      borderColor: (0, import_theme_tools9.mode)("brand.500", "brand.200")(props),
      boxShadow: (0, import_theme_tools9.mode)(
        `0px 0px 0px 1px ${(0, import_theme_tools9.transparentize)(`brand.500`, 1)(props.theme)}`,
        `0px 0px 0px 1px ${(0, import_theme_tools9.transparentize)(`brand.200`, 1)(props.theme)}`
      )(props)
    }
  })
};
var textarea_default = {
  variants: variants10
};

// src/foundations/index.ts
var foundations_exports = {};
__export(foundations_exports, {
  fonts: () => fonts_default,
  semanticTokens: () => tokens_default,
  shadows: () => shadows_default,
  styles: () => styles_default
});

// src/foundations/fonts.ts
var fonts_default = {
  heading: "InterVariable, -apple-system, system-ui, sans-serif",
  body: "InterVariable, -apple-system, system-ui, sans-serif"
};

// src/foundations/shadows.ts
var shadows_default = {
  xs: "0px 1px 2px rgba(16, 24, 40, 0.05)",
  sm: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 2px 4px rgba(48, 49, 51, 0.1)",
  md: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 4px 8px rgba(48, 49, 51, 0.1)",
  lg: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 8px 16px rgba(48, 49, 51, 0.1)",
  xl: "0px 0px 1px rgba(48, 49, 51, 0.05), 0px 16px 24px rgba(48, 49, 51, 0.1)",
  "xs-dark": "0px 1px 3px rgba(11, 12, 17, 0.9)",
  "sm-dark": "0px 2px 4px rgba(11, 12, 17, 0.9)",
  "md-dark": "0px 4px 8px rgba(11, 12, 17, 0.9)",
  "lg-dark": "0px 8px 16px rgba(11, 12, 17, 0.9)",
  "xl-dark": "0px 16px 24px rgba(11, 12, 17, 0.9)"
};

// src/foundations/styles.ts
var import_theme_tools10 = require("@chakra-ui/theme-tools");
var styles_default = {
  global: (props) => ({
    body: {
      color: "default",
      bg: "bg-canvas"
    },
    "*::placeholder": {
      opacity: 1,
      color: "muted"
    },
    "*, *::before, &::after": {
      borderColor: (0, import_theme_tools10.mode)("gray.200", "gray.700")(props)
    },
    "html,body": {
      height: "100%"
    },
    "#__next, #root": {
      display: "flex",
      flexDirection: "column",
      minH: "100%"
    }
  })
};

// src/foundations/tokens.ts
var tokens_default = {
  colors: {
    "bg-canvas": {
      default: "gray.50",
      _dark: "gray.900"
    },
    "bg-surface": {
      default: "white",
      _dark: "gray.800"
    },
    "bg-subtle": {
      default: "gray.50",
      _dark: "gray.700"
    },
    "bg-muted": {
      default: "gray.100",
      _dark: "gray.600"
    },
    default: {
      default: "gray.900",
      _dark: "white"
    },
    inverted: {
      default: "white",
      _dark: "gray.900"
    },
    emphasized: {
      default: "gray.700",
      _dark: "gray.100"
    },
    muted: {
      default: "gray.600",
      _dark: "gray.300"
    },
    subtle: {
      default: "gray.500",
      _dark: "gray.400"
    },
    border: {
      default: "gray.200",
      _dark: "gray.700"
    },
    accent: {
      default: "brand.500",
      _dark: "brand.200"
    },
    success: {
      default: "green.600",
      _dark: "green.200"
    },
    error: {
      default: "red.600",
      _dark: "red.200"
    },
    "bg-accent": "brand.600",
    "bg-accent-subtle": "brand.500",
    "bg-accent-muted": "brand.400",
    "on-accent": "white",
    "on-accent-muted": "brand.50",
    "on-accent-subtle": "brand.100"
  }
};

// src/index.ts
var theme = (0, import_react.extendTheme)({
  ...foundations_exports,
  components: { ...components_exports },
  colors: { ...import_react.theme.colors, brand: import_react.theme.colors.blue },
  space: {
    "4.5": "1.125rem"
  }
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  theme
});
//# sourceMappingURL=index.cjs.js.map