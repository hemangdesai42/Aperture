import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/upload";

function Upload() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [photo, setPhoto] = useState("");
    const [album, setAlbum] = useState("");
    const [user, setUser] = useState("");
    // const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/photos" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.uploadImage({ photo, album, user }));
    };


return (
    <div className="upload-page">
        <div className="upload-container">
            <div className="upload-container">
                <h1>Upload a CityScape!</h1>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="photo-container">
                    <div>
                        <input
                            type="text"
                            value={photo}
                            onChange={(e) => setPhoto(e.target.value)}
                            required
                            placeholder="Photo Url"
                        />
                    </div>
                </div>

            
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
);
}

export default Upload;