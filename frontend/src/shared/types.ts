export type CardType = {
	id: number;
	color: string;
	name: string;
};

export type CardProps = {
	card: CardType;
	flipped: boolean;
	flipHandler: (card: CardType) => void;
};
