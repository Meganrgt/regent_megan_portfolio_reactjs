const HeaderHP = (props) => {
    return (
        <><div id="headerhp">
            <h1>Bonjour je suis {props.name}</h1>
            <p className="h2">{props.job}</p>
            <button type="button" class="btn btn-danger">En savoir plus</button>
            </div></>
    );
}

export default HeaderHP;
