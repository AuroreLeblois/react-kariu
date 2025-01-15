// function colorIsDarkAdvanced(bgColor) {
//   let color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
//   console.log(color);
  
//   let r = parseInt(color.substring(0, 2), 16); // hexToR
//   let g = parseInt(color.substring(2, 4), 16); // hexToG
//   let b = parseInt(color.substring(4, 6), 16); // hexToB
//   let uicolors = [r / 255, g / 255, b / 255];
//   let c = uicolors.map((col) => {
//     if (col <= 0.03928) {
//       return col / 12.92;
//     }
//     return Math.pow((col + 0.055) / 1.055, 2.4);
//   });
//   let L = (0.2126 * c[0]) + (0.7152 * c[1]) + (0.0722 * c[2]);
  
//   return L <= 0.179;
// }

export function styleAvatar(backgroundColor : string, shape: string, size: string, url: string, customWidthAndHeight: Number, fontFamily: string) {  
  const avatar = {
  color: "white",
  backgroundColor: url ? null : backgroundColor,
  display: "flex",
  justifyContent: "center",
  fontFamily: fontFamily ? fontFamily : "inherit",
  alignItems: "center",
  cursor: "default",
  margin: "auto",
  fontWeight: "bold",
  borderRadius: shape === "square" ? "15%" : "50%",
  width: "2rem",
  height: "2rem",
  fontSize: "1.25rem",
  backgroundSize: "cover", // Ajouté pour que l'image couvre la div
  backgroundPosition: "center", // Ajouté pour centrer l'image
  backgroundRepeat: "no-repeat", // Ajouté pour éviter la répétition de l'image
};
switch (size) {
  case "small":
    avatar.width = " 1.5rem";
    avatar.height = "1.5rem";
    avatar.fontSize = "0.75rem";
    break;
  case "medium":
    avatar.width = " 2rem";
    avatar.height = "2rem";
    avatar.fontSize = "1rem";
    break;
  case "large":
    avatar.width = "3rem";
    avatar.height = "3rem";
    avatar.fontSize = "1.5rem";
  break;
  default:
    avatar.width = " 2rem";
    avatar.height = "2rem";
    avatar.fontSize = "1rem";
  break;
}
if (customWidthAndHeight) {
  avatar.width = customWidthAndHeight+'px';
  avatar.height = customWidthAndHeight+'px';
}
return avatar
};