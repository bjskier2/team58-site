/** @jsxImportSource theme-ui */

import { ThemeUIStyleObject } from '@theme-ui/css';
import { ComponentProps, HTMLAttributeAnchorTarget } from 'react';
import { Flex } from 'theme-ui';

export interface CardProps extends ComponentProps<'div'> {
  img?: string;
  imgStyle?: ThemeUIStyleObject;
  height?: number;
  bottomColor?: string;
  href?: string;
  target?: HTMLAttributeAnchorTarget | undefined;
}

export const Card = ({
  children,
  height = 700,
  img,
  imgStyle,
  bottomColor,
  href,
  target,
  ...props
}: CardProps) => {
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        padding: '1rem',
        flex: `1 1 ${height - 250}px`,
        transition: 'all .2s ease-in-out',
        textDecoration: 'none',
        '&:hover': {
          transform: 'scale(1.02)',
        },
        '&:hover .card-image': {
          filter: 'grayscale(0.2)',
        },
        minHeight: height,
      }}
    >
      <Flex
        sx={{
          backgroundColor: 'white',
          borderRadius: '0.25rem',
          boxShadow: '0 20px 40px -14px rgba(0,0,0,0.25)',
          flexDirection: 'column',
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          ...(bottomColor
            ? { borderBottom: `4px solid`, borderBottomColor: bottomColor, borderRadius: 6 }
            : {}),
        }}
      >
        {children}
      </Flex>
    </div>
  );
};
