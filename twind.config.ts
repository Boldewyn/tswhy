const colors = {
  cerise: {
    DEFAULT: "#D926D9",
    "50": "#F4C2F4",
    "100": "#F1B1F1",
    "200": "#EB8EEB",
    "300": "#E56CE5",
    "400": "#DF49DF",
    "500": "#D926D9",
    "600": "#A91EA9",
    "700": "#791579",
    "800": "#4A0D4A",
    "900": "#1A051A",
  },
  cinnabar: {
    DEFAULT: "#E34F26",
    "50": "#F8D3C9",
    "100": "#F6C4B7",
    "200": "#F1A792",
    "300": "#EC8A6E",
    "400": "#E86C4A",
    "500": "#E34F26",
    "600": "#B93B18",
    "700": "#872B11",
    "800": "#561B0B",
    "900": "#240B05",
  },
  cyan: {
    DEFAULT: "#00D8FF",
    "50": "#B8F4FF",
    "100": "#A3F1FF",
    "200": "#7AEBFF",
    "300": "#52E4FF",
    "400": "#29DEFF",
    "500": "#00D8FF",
    "600": "#00A8C7",
    "700": "#00798F",
    "800": "#004957",
    "900": "#001A1F",
  },
  "fuel-yellow": {
    DEFAULT: "#EE9F2F",
    "50": "#FCEDD9",
    "100": "#FAE5C6",
    "200": "#F7D3A0",
    "300": "#F4C27A",
    "400": "#F1B055",
    "500": "#EE9F2F",
    "600": "#D48311",
    "700": "#A0630D",
    "800": "#6C4309",
    "900": "#382305",
  },
  "gray-chateau": {
    DEFAULT: "#9CA0A6",
    "50": "#FCFCFD",
    "100": "#F2F2F3",
    "200": "#DCDEE0",
    "300": "#C7C9CC",
    "400": "#B1B5B9",
    "500": "#9CA0A6",
    "600": "#7E848B",
    "700": "#63686E",
    "800": "#484C51",
    "900": "#2E3033",
  },
  mariner: {
    DEFAULT: "#3178C6",
    "50": "#BFD6EF",
    "100": "#AFCCEB",
    "200": "#8EB7E3",
    "300": "#6EA2DB",
    "400": "#4D8DD3",
    "500": "#3178C6",
    "600": "#265D99",
    "700": "#1B416C",
    "800": "#10263F",
    "900": "#040B12",
  },
  "ripe-lemon": {
    DEFAULT: "#F7DF1E",
    "50": "#FDF8CF",
    "100": "#FDF5BC",
    "200": "#FBF094",
    "300": "#FAEA6D",
    "400": "#F8E545",
    "500": "#F7DF1E",
    "600": "#D5BF08",
    "700": "#9F8E06",
    "800": "#695E04",
    "900": "#332D02",
  },
  strikemaster: {
    DEFAULT: "#8D538D",
    "50": "#D9BFD9",
    "100": "#D1B2D1",
    "200": "#C298C2",
    "300": "#B37EB3",
    "400": "#A465A4",
    "500": "#8D538D",
    "600": "#6A3E6A",
    "700": "#462946",
    "800": "#231523",
    "900": "#000000",
  },
  sushi: {
    DEFAULT: "#6CC240",
    "50": "#D7EECB",
    "100": "#CBEABC",
    "200": "#B3E09D",
    "300": "#9CD67E",
    "400": "#84CC5F",
    "500": "#6CC240",
    "600": "#549931",
    "700": "#3D6F23",
    "800": "#254416",
    "900": "#0E1908",
  },
} as const;

/** @type {Omit<import("$fresh/plugins/twind.ts").Options, "selfURL">} */
export default {
  theme: {
    colors: {
      black: "#000000",
      blue: colors.mariner,
      cyan: colors.cyan,
      gray: colors["gray-chateau"],
      green: colors.sushi,
      magenta: colors.cerise,
      orange: colors["fuel-yellow"],
      purple: colors.strikemaster,
      red: colors.cinnabar,
      yellow: colors["ripe-lemon"],
      white: "#ffffff",
      primary: colors.mariner,
    },
    fontFamily: {
      body: [
        "Open Sans",
        "ui-sans-serif",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      header: [
        "Wellfleet",
        "ui-sans-serif",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
      ],
      mono: [
        "JetBrains Mono",
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  preflight: {
    "@import":
      "url('https://fonts.googleapis.com/css2?family=JetBrains+Mono&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Wellfleet&display=swap');",
  },
};
