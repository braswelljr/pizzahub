module.exports = {
  purge: {
    mode: "all",
    enabled: true,
    content: ["./public/index.html","./public/scripts/index.min.js"],
    preserveHtmlElements: true
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  theme: {
    extend: {
      boxShadow: theme => ({
        '3xl': '0 60px 100px -25px rgba(0, 0, 0, 0.25)',
        '4xl': '0 1200px 175px -50px rgba(0, 0, 0, 0.25)'
      }),
      spacing: theme => ({
        "72": "18rem",
        "80": "20rem",
        "96": "24rem",
        "102": "28rem",
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "192": "48rem",
        "204": "56rem"
      }),
      rotate: theme => ({
        "-15": "-15deg",
        "-30": "-30deg",
        "-75": "-75deg",
        "-105": "-105deg",
        "-120": "-120deg",
        "15": "15deg",
        "30": "30deg",
        "75": "75deg",
        "105": "105deg",
        "120": "120deg",
      }),
      zIndex: theme => ({
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90",
        "100": "100",
        "-10": "-10",
        "-20": "-20",
        "-30": "-30",
        "-40": "-40",
        "-50": "-50",
        "-60": "-60",
        "-70": "-70",
        "-80": "-80",
        "-90": "-90",
        "-100": "-100"
      })
    },
    fontFamily: {},
  },
  variants: {
    accessibility: ["responsive", "focus", "hover", "active"],
    borderStyle: ["responsive", "hover", "active", "group-hover"],
    divideStyle: ["responsive", "hover", "focus", "active", "group-hover"],
    gradientColorStops: [
      "responsive",
      "hover",
      "focus",
      "active",
      "group-hover"
    ],
    height: ["responsive", "hover", "focus"],
    outLine: ["responsive", "hover", "focus", "active"],
    padding: ["responsive", "hover", "focus", "active", "group-hover"],
    space:  ["responsive", "hover", "focus", "active", "group-hover"],
    width: ["responsive", "hover", "focus", "active"],
    zIndex: ["responsive", "hover", "focus"]
  },
  plugins: [],
}
