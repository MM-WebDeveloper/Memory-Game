import { CardProps } from '../shared/types';

const Card = ({ card, flipped, flipHandler }: CardProps) => {
	const handleClick = () => {
		if (flipped) {
			return;
		}
		flipHandler(card);
	};

	return (
		<div>
			<div
				className={(flipped ? '' : 'flipped') + ' front card'}
				onClick={() => handleClick()}
				style={{ background: card.color }}
			>
				{card.name}
			</div>
			<div
				className={(flipped ? 'flipped' : '') + ' back card'}
				onClick={() => handleClick()}
				style={{ background: 'black' }}
			>
				?
			</div>
		</div>
	);
};
export default Card;
