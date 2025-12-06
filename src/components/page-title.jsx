const H1Title = (props) => {
    return (
        <><div id="pagetitle"><h1>{props.title}</h1>
        <p>{props.description}</p>
        <hr></hr></div></>
    );
}

export default H1Title;