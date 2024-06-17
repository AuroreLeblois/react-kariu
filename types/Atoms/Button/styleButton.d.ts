export declare function styleButton(backgroundColor: string, shape: string, primary: boolean, size: string): {
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
    '*:after': {
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
    '.kariu-button:active:after': {
        transform: string;
        opacity: string;
        transition: string;
    };
    'button.ripple': {
        position: string;
        borderRadius: string;
        transform: string;
        animation: string;
        backgroundColor: string;
    };
    '@keyframes ripple': {
        to: {
            transform: string;
            opacity: number;
        };
    };
    '.kariu-button--primary': {
        color: string;
        backgroundColor: string;
    };
    '.kariu-button--secondary': {
        color: string;
        backgroundColor: string;
        boxShadow: string;
    };
};
