export function styleAvatar(backgroundColor : string, shape: string, size: string, url: String, customWidthAndHeight: Number, fontFamily: string) {
  const avatar = {
  color: 'inherit',
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
  fontSize: "1.25rem"
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