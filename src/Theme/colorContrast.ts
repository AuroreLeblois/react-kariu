/**
 * Fonction to determine if the text should be black or white depending on the background color
 * @param backgroundColor - The background color to evaluate
 * @returns 'black' or 'white' depending on the relative luminance
 */
export function getContrastTextColor(backgroundColor: string): string {
    // Convert the hexadecimal color to RGB
    let r, g, b;
    
    // Format #RRGGBB
    if (backgroundColor.startsWith('#')) {
      const hex = backgroundColor.slice(1);
      if (hex.length === 3) {
        // Format #RGB
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else {
        // Format #RRGGBB
        r = parseInt(hex.slice(0, 2), 16);
        g = parseInt(hex.slice(2, 4), 16);
        b = parseInt(hex.slice(4, 6), 16);
      }
    } else if (backgroundColor.startsWith('rgb')) {
      // Format rgb(r, g, b) ou rgba(r, g, b, a)
      const values = backgroundColor.match(/\d+/g);
      if (values && values.length >= 3) {
        r = parseInt(values[0]);
        g = parseInt(values[1]);
        b = parseInt(values[2]);
      } else {
        return 'black'; // Valeur par défaut si le format n'est pas reconnu
      }
    } else {
      return 'black'; // Valeur par défaut pour les autres formats
    }
    
    // Calcul de la luminosité relative selon WCAG
    // https://www.w3.org/TR/WCAG20-TECHS/G17.html
    const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
    
    // Si la luminance est supérieure à 0.5, utiliser du texte noir, sinon du texte blanc
    return luminance > 0.5 ? 'black' : 'white';
  }