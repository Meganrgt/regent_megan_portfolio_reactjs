const HeaderHP = (props) => {
    return (
        <div className="mb-5" id="headerhp">
            <h1>Bonjour je suis {props.name}</h1>
            <h2>{props.job}</h2>
            <button data-bs-toggle="modal" data-bs-target="#ModaleProfil" type="button" className="btn btn-danger">En savoir plus</button>
        </div>
    );
}

export default HeaderHP;
