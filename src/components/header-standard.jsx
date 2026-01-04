import Image from "../assets/images/banner.jpg";

const HeaderStandard = (props) => {
    return (
        <div>
            <img className="object-fit-contain" width="100%" src={Image} alt="banner"/>
        </div>
    );
}

export default HeaderStandard;