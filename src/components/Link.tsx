import type { AnchorHTMLAttributes, ReactNode } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    path: string;
    children: ReactNode;
};

const Link = ({ path, children, ...props }: LinkProps) => {
    return (
        <a href={path} {...props}>
            {children}
        </a>
    );
};

export default Link;