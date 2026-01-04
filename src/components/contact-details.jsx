const ContactDetails = (props) => {
    return (
            <p><i className={props.icon}></i> {props.label} {props.details}</p>
    );
}

export default ContactDetails;