import styles from '../styles/Winner.module.css';

interface WinnerProps {
	score: number;
}

const Winner = ({ score }: WinnerProps) => {
	return (
		<div className={styles['winner']}>
			<h2>YOU WON!</h2>
			<p>YOUR SCORE IS {score}!</p>
		</div>
	);
};
export default Winner;
