export declare function styleButton(backgroundColor: string, shape: string, primary: boolean, size: string, disabled: boolean): {
    color: string;
    boxShadow: string;
    backgroundColor: string;
    fontFamily: string[];
    fontWeight: string;
    border: number;
    borderRadius: string;
    cursor: string;
    display: string;
    position: string;
    overflow: string;
    transform: string;
    fontSize: string;
    padding: string;
    lineHeight: number;
    '&:': {
        display: string;
        position: string;
        width: string;
        height: string;
        top: number;
        left: number;
        pointerEvents: string;
        backgroundImage: string;
        backgroundRepeat: string;
        backgroundPosition: string;
        transform: string;
        opacity: number;
        transition: string;
    };
    '*:active:after': {
        transform: string;
        opacity: number;
        transition: string;
    };
    '.kariuButton:active:after': {
        transform: string;
        opacity: string;
        transition: string;
    };
    'button.ripple': {
        position: string;
        borderRadius: string;
        transform: string;
        animation: string;
    };
    '@keyframes ripple': {
        to: {
            transform: string;
            opacity: number;
        };
    };
    '.kariuButton--primary': {
        color: string;
        backgroundColor: string;
    };
    '.kariuButton--secondary': {
        color: string;
        backgroundColor: string;
        boxShadow: string;
    };
};
