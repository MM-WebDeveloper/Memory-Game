type CardProps = {
	card: { id: number; color: string; name: string };
};

const Card = ({ card }: CardProps) => {
	return (
		<div key={card.id}>
			<div className='front card' style={{ background: card.color }}>
				{card.name}
			</div>
			<div
				className='back card'
				style={{ background: 'black', display: 'none' }}
			>
				?
			</div>
		</div>
	);
};
export default Card;
