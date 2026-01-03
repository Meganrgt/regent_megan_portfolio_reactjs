const PageTitle = (props) => {
    return (
        <div className="pt-5 pb-5" id="pagetitle">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <hr className="text-primary hrtitle"></hr>
        </div>
    );
}

export default PageTitle;