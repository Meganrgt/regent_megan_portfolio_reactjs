const FormInput = (props) => {
    return (
        <div class="form-floating mb-3">
            <input type={props.type} class="form-control" id={props.id} placeholder={props.placeholder} />
            <label for={props.id}>{props.label}</label>
        </div>
    );
}

export default FormInput;