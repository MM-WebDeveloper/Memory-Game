import { useEffect, useState } from 'react';
import './App.scss';
import Card from './components/Card';
import { cardImages } from './cardsData';
import { ICard } from './shared/interfaces';
import Winner from './components/Winner';

const App = (): JSX.Element => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [score, setScore] = useState(0);
	const [firstFlip, setFirstFlip] = useState<ICard | null>(null);
	const [secondFlip, setSecondFlip] = useState<ICard | null>(null);
	const [turns, setTurns] = useState(0);

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
				setTurns((prevTurns) => prevTurns + 1);
				resetFlips();
			} else {
				setTimeout(() => resetFlips(), 1000);
			}
		}
	}, [firstFlip, secondFlip, cards]);

	const shuffleCards = () => {
		setTurns(0);
		resetFlips();
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));
		setCards(shuffledCards);
		setScore(0);
	};

	const flipHandler = (card: ICard) => {
		if (firstFlip && secondFlip) {
			return;
		}
		firstFlip ? setSecondFlip(card) : setFirstFlip(card);
	};

	const resetFlips = () => {
		setFirstFlip(null);
		setSecondFlip(null);
		setScore((prevScore) => prevScore + 1);
	};

	return (
		<div className='card-display'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>
			{turns === 6 ? (
				<Winner score={score} />
			) : (
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
					<p>Score: {score}</p>
				</div>
			)}
		</div>
	);
};
export default App;
