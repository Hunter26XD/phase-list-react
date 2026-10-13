function PhaseCard(props) {
    return (
        <div>
            <h3>Day {props.day} - {props.title}</h3>
            <p>{props.description}</p>
        </div>
    );
}

export default PhaseCard;