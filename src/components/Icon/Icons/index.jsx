import React, { CSSProperties } from 'react';

export const ImgIcon = ({ ...props }) => (
    <img {...props} alt={props.alt || 'icon'} />
);
