export const RgbToRgba = (rgb: string, alpha: number): string => {
  const rgbValues = rgb.match(/\d+/g); // Extract numeric values
  if (!rgbValues) throw new Error("Invalid RGB string");
  const [r, g, b] = rgbValues.map(Number);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
