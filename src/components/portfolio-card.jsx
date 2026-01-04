const PortfolioCard = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card text-center">
                <img src={props.imageLink} class="card-img-top" alt={props.cardTitle} />
                <div class="card-body">
                    <h5 className="card-title">{props.cardTitle}</h5>
                    <p className="card-text">{props.cardText}</p>
                    <a href="#!" class="btn btn-primary">Voir le site</a>
                </div>
                <div className="card-footer">
                    {props.cardFooter}
                </div>
            </div>
        </div>
    );
}

export default PortfolioCard;