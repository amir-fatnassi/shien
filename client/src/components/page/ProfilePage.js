import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {updatePassword, updatePhoto} from '../../redux/userAuthontication/UserAuthList-action'
import { useHistory } from 'react-router-dom'
import defaultPoto from './user.png'
import './ProfilePage.css'

const ProfilePage = () => {
    const {user} = useSelector(state => state.User)
    const [expassword, setExpassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [photo, setPhoto] = useState()
    const [image, setImage] = useState(false)
    const [pass, setPass] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmitImage = e => {
        e.preventDefault();
        const newUs = new FormData();
        newUs.append("photo", photo);
        dispatch(updatePhoto(history, newUs))
    }

    const handleSubmitPassword = e => {
        e.preventDefault()
        const dat = {expassword, newPassword, confirmNewPassword}
        dispatch(updatePassword(history, dat))
    }


    return (
        <div>
        { user ?  (
                <div className='profile-container'>
                <div className='photo-profile'>
                    <img src={user?.photo ? `http://localhost:5000/public/data/uploads/${user.photo}` : defaultPoto}  alt="" />
                </div>
                <div>
                    <h2> Profile Name: {user?.name}</h2>
                    <h4> Your Email: {user?.email}</h4>
                    <p>discription: Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eaque nihil magni autem? Eius animi a perferendis enim sint illo architecto 
                        modi, optio labore et ex quaerat consequuntur facere, voluptate quia, dicta 
                        expedita rerum libero odit possimus qui nulla esse vel fugiat! Pariatur, eius 
                        necessitatibus. Et a ad est quam tempora.
                    </p>
                </div>
                <input
                    type="button"
                    value="Update image"
                    onClick={()=> setImage(!image)}
                    className="input-box-sign-togel"
                    />
                <div style={image ? { display:'block' }: {display:'none'}}>
                    <h2>update image</h2>
                    <form
                        action=""
                        onSubmit={handleSubmitImage}
                        className="admin-form"
                        encType="multipart/form-data"
                    >
                        <div className="admin-chon">
                            <input
                            type="file"
                            name="photo"
                            className="input-box-sign"
                            onChange={(e) => setPhoto(e.target.files[0])}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Update"
                            className="input-box-sign"
                            />
                    </form>
                </div>
                <input
                    type="button"
                    value="Update Password"
                    onClick={()=> setPass(!pass)}
                    style={{display:'block'}}
                    className="input-box-sign-togel"
                    />
                <div style={pass ? { display:'block' }: {display:'none'}}>
                    <h2>update password</h2>
                    <form
                        action=""
                        onSubmit={handleSubmitPassword}
                        className="admin-form"
                    >
                        <div className="admin-chon">
                            <input
                            type="password"
                            name="Password"
                            className="input-box-sign"
                            placeholder="Password"
                            onChange={(e) => setExpassword(e.target.value)}
                            />
                        </div>
                        <div className="admin-chon">
                            <input
                            type="text"
                            name="newPassword"
                            className="input-box-sign"
                            placeholder="New Password"
                            onChange={(e) => setNewPassword(e.target.value)}
                            />
                        </div>
                        <div className="admin-chon">
                            <input
                            type="text"
                            name="confirmNewPassword"
                            className="input-box-sign"
                            placeholder="Confirm New Password"
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Update"
                            className="input-box-sign"
                            />
                    </form>
                </div>
            </div>
        ): history.push('/login')}
        </div>
    )
}

export default ProfilePage
