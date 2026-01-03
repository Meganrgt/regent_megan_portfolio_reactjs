const Card = (props) => {
    return (
        <div class="card text-center" style={{width:'18 rem'}}>
            <img src={props.imageLink} class="card-img-top" alt={props.cardTitle} />
            <div class="card-body">
                <h5 class="card-title">{props.cardTitle}</h5>
                <p class="card-text">{props.cardText}</p>
                <a href="#" class="btn btn-primary">Voir le site</a>
            </div>
            <div className="card-footer">
                {props.cardFooter}
            </div>
        </div>
    );
}

export default Card;