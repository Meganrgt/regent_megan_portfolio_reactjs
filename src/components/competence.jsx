
const Competence = (props) => {
    const barWidth = props.competenceLevel
    return (
        <>
            <p className="m-0">
                {props.competenceName} {props.competenceLevel}
            </p>
            <div className="progress mb-4" role="progressbar" aria-valuemin="0" aria-valuemax="100">
                <div className={props.barColor} style= {{width: barWidth}}></div>
            </div>
        </>
            );    
        };
    
export default Competence;