import React, { useState } from 'react';
import { BiHelpCircle } from 'react-icons/bi';
import { QuickPortal } from './portal';
// import './HelpTip.scss';

export const HelpTip: React.FC<{
    text?: string;
    content?: JSX.Element;
    icon?: JSX.Element;
    iconColor?: string;
    hoverText?: string;
    tooltipPosition?: 'right' | 'top';
    tooltipClass?: string;
}> = ({ text, content, icon, iconColor, hoverText, tooltipPosition, tooltipClass }) => {
    const [showContent, setShowContent] = useState(false);
    const [renderCoords, setRenderCooords] = useState<[number, number]>([0, 0]);
    const handleMouseOver:
        | React.MouseEventHandler<Element>
        | React.FocusEventHandler<SVGElement>
        | undefined = (e: React.MouseEvent<Element>) => {
        if (tooltipPosition === 'right' || !tooltipPosition) {
            setRenderCooords([e.pageX + 10, e.pageY - 10]);
        }
        if (tooltipPosition === 'top') {
            setRenderCooords([e.pageX - 10, e.pageY - 50]);
        }
        setShowContent(true);
    };
    const handleMouseOut: React.MouseEventHandler<Element> | undefined = () => {
        setShowContent(false);
    };

    return (
        <div className="prp-help-tip">
            {icon &&
                !hoverText &&
                React.cloneElement(icon, {
                    onMouseOver: handleMouseOver as React.MouseEventHandler<Element>,
                    onMouseOut: handleMouseOut,
                })}
            {!icon && !hoverText && (
                <BiHelpCircle
                    onMouseOver={handleMouseOver as React.MouseEventHandler<Element>}
                    onMouseOut={handleMouseOut}
                    color={iconColor || '#2196F3'}
                    size="15px"
                />
            )}
            {hoverText && !icon && (
                <span
                    onMouseOver={handleMouseOver as React.MouseEventHandler<Element>}
                    onMouseOut={handleMouseOut}
                >
                    {hoverText}
                </span>
            )}
            {showContent && (content || text) && (
                <QuickPortal
                    className={`prp-help-tip-content ${tooltipClass || ''}`}
                    style={{
                        left: `${renderCoords[0]}px`,
                        top: `${renderCoords[1]}px`,
                    }}
                >
                    <div>
                        {hoverText && <strong>{hoverText}: </strong>}
                        {text}
                        {content}
                    </div>
                </QuickPortal>
            )}
        </div>
    );
};