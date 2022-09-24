import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export const QuickPortal: React.FC<{
    children: any;
    className?: string;
    element?: string;
    style?: object;
    renderIn?: HTMLElement;
}> = ({ children, className, element = 'div', style, renderIn = document.body }) => {
    const [container] = useState(() => {
        const el = document.createElement(element);
        const classNames = className?.split(' ').filter(item => item);
        if (classNames && classNames.length > 0) {
            classNames.forEach(portalClass => el.classList.add(portalClass));
        }
        if (style) {
            const styleString = style
                ? Object.keys(style).reduce((previous, current) => {
                    //   return previous.concat(`${current}: ${style[current]}; `);
                    return previous.concat(`${current}`)
                  }, '')
                : '';
            el.setAttribute('style', styleString);
        }
        return el;
    });

    useEffect(() => {
        renderIn.appendChild(container);
        return () => {
            renderIn.removeChild(container);
        };
    }, []);

    return createPortal(children, container);
};