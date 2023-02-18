import './_Winner.scss';

interface WinnerProps {
	score: number;
}

const Winner = ({ score }: WinnerProps) => {
	return (
		<div className='winner'>
			<h2>YOU WON!</h2>
			<p>YOUR SCORE IS {score}!</p>
		</div>
	);
};
export default Winner;
