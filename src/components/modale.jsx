import React ,{useState, useEffect}from "react";
import ContactDetails from "./contact-details";


const Modale = (props) => {
    const[user,setUser] = useState([]);
    const getUser = async () => {
    const res =  await fetch ("https://api.github.com/users/github-john-doe");
    const json = await res.json();
    setUser(json);
    }
    useEffect(()=> {
        getUser();
    },[]);
    return (
        <div className="modal fade modal-lg" id="ModaleProfil" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-theme="dark">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Mon profil GitHub</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body row">
                            <div className="col-sm-6">
                                <img src={user.avatar_url} alt="Jonh Doe profil" className="object-fit-contain" width="100%"/>
                            </div>
                            <div className="col-sm-6">
                                <p><i class="bi bi-person"></i><a href={user.html_url} > John Doe</a></p>
                                <hr></hr>
                                <ContactDetails icon="bi bi-geo-alt" details={user.location}/>
                                <hr></hr>
                                <ContactDetails icon="bi bi-card-text" details={user.bio}/>
                                <hr></hr>
                                <ContactDetails icon="bi bi-box" label="Repositories :" details={user.public_repos}/>
                                <hr></hr>
                                <ContactDetails icon="bi bi-people" label="Followers :" details={user.followers}/>
                                <hr></hr>
                                <ContactDetails icon="bi bi-people" label="Following :" details={user.following}/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Modale;