/** @jsxImportSource theme-ui */

import { ComponentProps } from 'react';

export interface CardImageProps extends ComponentProps<'div'> {
  src: string;
}

export const CardImage = ({ src, ...props }: CardImageProps) => {
  return (
    <div
      {...props}
      sx={{
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderTopLeftRadius: '0.25rem',
        borderTopRightRadius: '0.25rem',
        overflow: 'hidden',
        position: 'relative',
        transition: 'filter 0.5s cubic-bezier(.43,.41,.22,.91)',
        backgroundImage: `url(${src})`,
        height: 300,
        '&::before': {
          content: '""',
          display: 'block',
          paddingTop: '56.25%',
        },
      }}
      className="card-image"
    />
  );
};
