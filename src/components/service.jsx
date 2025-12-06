const ServiceBlock = (props) => {
    return (
        <><div className="rounded border border-secondary-subtle col service-block">
            <h3 className="icontitle"><i className={props.icon}></i></h3>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            </div></>
    );
}

export default ServiceBlock;