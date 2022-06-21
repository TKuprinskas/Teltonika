import React from 'react';

import { colors } from 'styles/colors';

import { IconProps } from './Icons';
import HamburgerMenu from './Icons/HamburgerMenu';

const ICON_SIZE = '22';

const Icon = ({
    type,
    color = colors.black,
    width = ICON_SIZE,
    height = ICON_SIZE,
    disabled = false,
    ...props
}) => {
    const params = { width, height, color, disabled };

    return {
        menu: <HamburgerMenu {...params} {...props} />,
    }[type];
};

export default Icon;
