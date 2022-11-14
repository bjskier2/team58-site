/** @jsxImportSource theme-ui */

import { ComponentProps } from 'react';

export interface ContainerProps extends ComponentProps<'div'> {}

export const Container = (props: ContainerProps) => {
  return (
    <div
      {...props}
      sx={{
        textAlign: 'center',
        padding: '128px 16px',
      }}
    />
  );
};
