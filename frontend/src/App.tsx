import { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card';
const cardImages = [
	{ color: '#000', name: 'Black', matched: false },
	{ color: '#aec6d2', name: 'Sonic Blue', matched: false },
	{ color: '#ff0800', name: 'Candy Apple Red', matched: false },
	{ color: '#f1eee6', name: 'Olympic White', matched: false },
	{ color: '#3f5c94', name: 'Lake Placid Blue', matched: false },
	{ color: '#f3dde7', name: 'Mary Kaye White', matched: false },
];

interface ICard {
	id: number;
	color: string;
	name: string;
	matched: boolean;
}

const App = (): JSX.Element => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [turns, setTurns] = useState(0);
	const [firstFlip, setFirstFlip] = useState('');
	const [secondFlip, setSecondFlip] = useState('');

	useEffect(() => {
		if (firstFlip && secondFlip) {
			if (firstFlip === secondFlip) {
				const cardsUpdated = cards.map((card) => {
					if (card.color === firstFlip) {
						card.matched = true;
						return card;
					}
					return card;
				});

				setCards(cardsUpdated);
				resetFlips();
			} else {
				resetFlips();
			}
		}
	}, [firstFlip, secondFlip, cards]);

	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setCards(shuffledCards);
		setTurns(0);
	};

	const flipHandler = (color: string) => {
		firstFlip ? setSecondFlip(color) : setFirstFlip(color);
	};

	const resetFlips = () => {
		setFirstFlip('');
		setSecondFlip('');
		setTurns((prevTurns) => prevTurns + 1);
	};

	return (
		<div className='card-display'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className='card-grid'>
				{cards.map((card) => (
					<Card key={card.id} flipHandler={flipHandler} card={card} />
				))}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
};
export default App;
