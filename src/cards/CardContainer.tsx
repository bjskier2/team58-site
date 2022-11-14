/** @jsxImportSource theme-ui */

import { ComponentProps } from 'react';

export interface CardContainerProps extends ComponentProps<'div'> {
  cardsPerRow?: number | number[];
}

export const CardContainer = ({ cardsPerRow = [1, 2, 3, 4], ...props }: CardContainerProps) => {
  const cardWidth = getCardWidth(cardsPerRow);
  return (
    <div
      {...props}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        '& > div': {
          maxWidth: cardWidth,
          minWidth: cardWidth,
        },
      }}
    />
  );
};

function getCardWidth(cardsPerRow?: number | number[]) {
  if (typeof cardsPerRow === 'number') {
    return widthPercentage(cardsPerRow);
  } else {
    return cardsPerRow?.map(widthPercentage);
  }
}

function widthPercentage(count: number) {
  return `${100 / count}%`;
}
