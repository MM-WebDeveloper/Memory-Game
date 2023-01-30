import { useState } from 'react';
import './App.css';
const cardImages = [
	{ color: '#9c7c38', name: 'Sunburst' },
	{ color: '#aec6d2', name: 'Sonic Blue' },
	{ color: '#ff0800', name: 'Candy Apple Red' },
	{ color: '#f1eee6', name: 'Olympic White' },
	{ color: '#3f5c94', name: 'Lake Placid Blue' },
	{ color: '#f3dde7', name: 'Mary Kay' },
];

interface Card {
	id: number;
	color: string;
	name: string;
}

const App = (): JSX.Element => {
	const [cards, setCards] = useState<Card[]>([]);
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
		<div>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>

			<div>
				{cards.map((card) => (
					<div className='' key={card.id}>
						<div>
							<div className='front card' style={{ background: card.color }}>
								<span>{card.name}</span>
							</div>
							<div className='back card' style={{ background: 'black' }}>
								<span>?</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<p>Turns: {turns}</p>
		</div>
	);
};
export default App;
