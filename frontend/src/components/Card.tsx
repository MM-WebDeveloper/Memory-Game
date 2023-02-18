import styles from '../styles/Card.module.css';
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
				className={
					(flipped ? '' : `${styles['flipped']} `) + `${styles['card']}`
				}
				onClick={() => handleClick()}
				style={{ background: card.color }}
			>
				{card.name}
			</div>
			<div
				className={
					(flipped ? `${styles['flipped']} ` : '') +
					`${styles['card']} ` +
					`${styles['back']}`
				}
				onClick={() => handleClick()}
				style={{ background: '#582c4d' }}
			>
				?
			</div>
		</div>
	);
};
export default Card;
