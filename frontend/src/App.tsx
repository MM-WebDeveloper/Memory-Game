import { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card';
import { cardImages } from './cardsData';

interface ICard {
	id: number;
	color: string;
	name: string;
	matched: boolean;
}

const App = (): JSX.Element => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [turns, setTurns] = useState(0);
	const [firstFlip, setFirstFlip] = useState<ICard | null>(null);
	const [secondFlip, setSecondFlip] = useState<ICard | null>(null);

	useEffect(() => {
		if (firstFlip && secondFlip) {
			if (firstFlip.color === secondFlip.color) {
				const cardsUpdated = cards.map((card) => {
					if (card.color === firstFlip.color) {
						card.matched = true;
						return card;
					}
					return card;
				});

				setCards(cardsUpdated);
				resetFlips();
			} else {
				setTimeout(() => resetFlips(), 1000);
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

	const flipHandler = (card: any) => {
		firstFlip ? setSecondFlip(card) : setFirstFlip(card);
	};

	const resetFlips = () => {
		setFirstFlip(null);
		setSecondFlip(null);
		setTurns((prevTurns) => prevTurns + 1);
	};

	return (
		<div className='card-display'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className='card-grid'>
				{cards.map((card) => (
					<Card
						key={card.id}
						flipHandler={flipHandler}
						flipped={
							card.matched ||
							card.id === firstFlip?.id ||
							card.id === secondFlip?.id
						}
						card={card}
					/>
				))}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
};
export default App;
