export interface validateProps {
    minWidth: number;
    maxWidth: number;
    isMobile?: boolean;
}

export interface ContentProps  {
    ssr?: boolean;
    children: any;
}

export interface FnIsMobileProps {
    httpRequest?: any;
    minWidth?: number;
    maxWidth?: number;
}
