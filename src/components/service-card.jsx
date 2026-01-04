const ServiceCard = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card text-center">
                <div className="card-body">
                    <h2 className="card-title icontitle"><i className={props.icon}></i></h2>
                    <h3 className="card-subtitle mb-2">{props.title}</h3>
                    <p className="card-text" >{props.description}</p>
                </div>
            </div>
        </div>
        
    );
}

export default ServiceCard;