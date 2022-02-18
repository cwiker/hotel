import { useState } from 'react'
import { useNavigate, Link, useParams } from "react-router-dom"
import "./formBooking.css"

function FormBooking({addBooking, currentUser, room}) {
    const [inDate, setInDate] = useState('')
    const [outDate, setOutDate] = useState('')
    const [guest, setGuest] = useState('')
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();
    const path = '/rooms'
    const params = useParams()
    const roomID = params.id
    console.log(roomID)

    function handleSubmit(e){
        e.preventDefault();
        fetch('/bookings',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                room_id:roomID,
                checkin_date:inDate,
                checkout_date:outDate,
                guest:guest
            })
        })
        .then((r) => {
            if (r.ok){
                r.json().then((newBooking) => {
                    addBooking(newBooking)
                    navigate("/account")
                    setInDate('')
                    setOutDate('')
                    setGuest('')
                })
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }
    return (
        <div className="fb-container">
            <h4>Hi, {currentUser.username}</h4>
            <h3>Booking for {room.name}</h3>
            <img className="fb-img" src={room.image} alt="room" />
            <form className="fb-form" onSubmit={handleSubmit}>
                <input
                    className="fb-input"
                    type="date"
                    name="inDate"
                    value={inDate}
                    placeholder="yyyy/mm/dd"
                    onChange={(e) => setInDate(e.target.value)}
                />
                <br/>
                <input
                    className="fb-input"
                    type="date"
                    name="outDate"
                    value={outDate}
                    placeholder="yyyy/mm/dd"
                    onChange={(e) => setOutDate(e.target.value)}
                />
                <br/>
                <input
                    className="fb-input"
                    type="number"
                    name="guest"
                    value={guest}
                    placeholder="Guest number"
                    onChange={(e) => setGuest(e.target.value)}
                />
                {/* <p>num of nigth(s)</p> */}
                <p>Total: {room.total}</p>
                <div className="fb-error-div">
                    {errors.map((err) => (
                        <li className="fb-error" key={err}>{err}</li>
                    ))}
                </div>
                <Link to={path}><button className="fb-button">Cancel</button></Link>
                <button className="fb-button" type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default FormBooking
