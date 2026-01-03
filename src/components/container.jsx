const Container = ({children}) => {
    return (
        <><div className="container rounded shadow row mb-5 pt-3 pb-3">
            {children}
            </div></>
    );
}

export default Container;