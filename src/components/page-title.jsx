const PageTitle = (props) => {
    return (
        <><h1>{props.title}</h1>
        <p>{props.description}</p>
        <hr></hr></>
    );
}

export default PageTitle;