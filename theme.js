// Keep Tailwind utilities (including dynamically created ones) on the shared palette.
const themeColors = {
  heading: 'rgb(var(--heading) / <alpha-value>)',
};

for (const [palette, shades] of Object.entries({
  slate: [100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  indigo: [200, 300, 400, 500, 600],
  emerald: [300, 400, 500],
  red: [400, 900, 950],
})) {
  themeColors[palette] = Object.fromEntries(
    shades.map(shade => [shade, `rgb(var(--${palette}-${shade}) / <alpha-value>)`])
  );
}

tailwind.config = {
  theme: {
    extend: {
      colors: themeColors,
    },
  },
};
