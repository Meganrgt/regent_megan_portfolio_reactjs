const FormInput = (props) => {
    return (
        <div class="form-floating mb-3">
            <input type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} required/>
            <label for={props.id}>{props.label}</label>
        </div>
    );
}

export default FormInput;