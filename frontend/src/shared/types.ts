import { ICard } from './interfaces';

export type CardProps = {
	card: ICard;
	flipped: boolean;
	flipHandler: (card: ICard) => void;
};
