const Header = (props) => {
	return (
		<header>
			<h1>{props.title}</h1>
			<span className="stats">Players: {props.totalPlayers + 1}</span>
		</header>
	);
};

const Player = (props) => {
	return (
		<div className="player">
			<span className="player-name">{props.name}</span>
			<Counter score={props.score} />
		</div>
	);
};

const Counter = (props) => {
	return (
		<div className="counter">
			<button className="counter-action decrement"> - </button>
			<span className="counter-score">{props.score}</span>
			<button className="counter-action increment"> - </button>
		</div>
	);
};
const App = () => {
	return (
		<div className="scoreboard">
			<Header title="Scoreboard" totalPlayers={3} />
			{/* Players List */}
			<Player name="Guil" score={50} />
			<Player name="Roberto" score={40} />
			<Player name="Kris" score={60} />
			<Player name="Ean" score={30} />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
