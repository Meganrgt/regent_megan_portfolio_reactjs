
const Competence = (props) => {
    const barWidth = props.competenceLevel
    return (
        <><p>
            {props.competenceName} {props.competenceLevel}
        </p>
        <div className="progress" role="progressbar" aria-valuemin="0" aria-valuemax="100">
        <div className={props.barColor} style= {{width: barWidth}}></div></div></>
            );    
        };
    
export default Competence;