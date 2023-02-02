import { useState } from 'react';
import './App.scss';
import Card from './components/Card';
const cardImages = [
	{ color: '#000', name: 'Black' },
	{ color: '#aec6d2', name: 'Sonic Blue' },
	{ color: '#ff0800', name: 'Candy Apple Red' },
	{ color: '#f1eee6', name: 'Olympic White' },
	{ color: '#3f5c94', name: 'Lake Placid Blue' },
	{ color: '#f3dde7', name: 'Mary Kaye White' },
];

interface ICard {
	id: number;
	color: string;
	name: string;
}

const App = (): JSX.Element => {
	const [cards, setCards] = useState<ICard[]>([]);
	const [turns, setTurns] = useState(0);
	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		console.log(shuffledCards);
		setCards(shuffledCards);
		setTurns(0);
	};

	return (
		<div className='card-display'>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div className='card-list'>
				{cards.map((card) => (
					<Card card={card} />
				))}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
};
export default App;
