import ExternalIcon from "./ExternalIcon";

function Icon({icon, size = 24, color}) {
  if (!icon) return;
  let props = { icon, size, color };

  switch (icon) {
    case "ExternalIcon":
      return <ExternalIcon {...props} />;
  }
}

export default Icon;