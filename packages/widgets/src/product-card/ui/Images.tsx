import { cx } from 'class-variance-authority';
import type { FC } from 'react';
import type { ProductItem } from '../types';

interface Props {
  images: ProductItem['images'];
  count: number;
}

const widthClassList: Record<number, string> = {
  1: 'w-full',
  2: 'w-1/2',
  3: 'w-1/3',
};

export const Images: FC<Props> = ({ images, count }) => {
  const imgs = images.slice(0, count);
  const widthClass = widthClassList[imgs.length] ?? 1;

  const isLast = (key: number) => {
    return key === imgs.length - 1;
  };

  return imgs.map(({ id, title, src }, key) => (
    <div
      key={id}
      className={cx(
        widthClass,
        'h-full overflow-hidden',
        !isLast(key) && 'border-r border-white/20',
      )}
    >
      <img src={src} alt={title} className="w-full h-full object-cover" />
    </div>
  ));
};
