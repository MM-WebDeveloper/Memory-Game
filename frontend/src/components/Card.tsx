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
				className={(flipped ? '' : 'flipped') + ' card'}
				onClick={() => handleClick()}
				style={{ background: card.color }}
			>
				{card.name}
			</div>
			<div
				className={(flipped ? 'flipped' : '') + ' back card'}
				onClick={() => handleClick()}
				style={{ background: '#582c4d' }}
			>
				?
			</div>
		</div>
	);
};
export default Card;
