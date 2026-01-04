
const Accordion = (props) => {
    const anchor = "#" + props.target
    return (
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={anchor} aria-expanded="false">
              {props.accordionTitle}
            </button>
          </h2>
          <div id={props.target} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <h2>{props.accordionBodyTitle}</h2>
              {props.children}
            </div>
          </div>
      </div>
    );
}

export default Accordion;