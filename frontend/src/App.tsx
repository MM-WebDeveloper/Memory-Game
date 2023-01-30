import { useState } from 'react';

const cardImages = [
	{ src: '/img/html-logo' },
	{ src: '/img/css-logo' },
	{ src: '/img/js-logo' },
	{ src: '/img/react-logo' },
	{ src: '/img/sass-logo' },
	{ src: '/img/react-logo' },
];

interface Card {
	id: number;
	src: string;
}

const App = (): JSX.Element => {
	const [cards, setCards] = useState<Card[]>([]);
	// shuffle cards
	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: Math.random() }));

		console.log(shuffledCards);
		setCards(shuffledCards);
	};

	return (
		<div>
			<h1>Memory Game</h1>
			<button onClick={shuffleCards}>New Game</button>
		</div>
	);
};
export default App;
