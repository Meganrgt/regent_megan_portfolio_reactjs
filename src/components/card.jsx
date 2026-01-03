const Card = (props) => {
    return (
        <div className="col">
            <div className="card text-center" style={{width:'18 rem'}}>
                <img src={props.imageLink} class="card-img-top" alt={props.cardTitle} />
                <div class="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    <a href="#" class="btn btn-primary">Voir le site</a>
                </div>
                <div className="card-footer">
                    {props.cardFooter}
                </div>
            </div>
        </div>
    );
}

export default Card;