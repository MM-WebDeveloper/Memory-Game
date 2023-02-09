import './_Winner.scss';

interface WinnerProps {
	score: number;
}

const Winner = ({ score }: WinnerProps) => {
	return (
		<div className='winner'>
			<h2>You Won!</h2>
			<p>Your score is {score}!</p>
		</div>
	);
};
export default Winner;
