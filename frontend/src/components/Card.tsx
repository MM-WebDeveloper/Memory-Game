type CardProps = {
	card: { id: number; color: string; name: string };
	flipHandler: (card: string) => void;
};

const Card = ({ card, flipHandler }: CardProps) => {
	const handleClick = (color: string) => {
		flipHandler(color);
	};

	return (
		<div>
			<div
				className='front card'
				onClick={() => handleClick(card.color)}
				style={{ background: card.color }}
			>
				{card.name}
			</div>
			<div
				className='back card'
				onClick={() => handleClick(card.color)}
				style={{ background: 'black' }}
			>
				?
			</div>
		</div>
	);
};
export default Card;
