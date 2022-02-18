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
            <form onSubmit={handleSubmit}>
                <p>Hi, {currentUser.username}</p>
                <h5>Booking for {room.name}</h5>
                <input
                    type="date"
                    name="inDate"
                    value={inDate}
                    placeholder="yyyy/mm/dd"
                    onChange={(e) => setInDate(e.target.value)}
                />
                <input
                    type="date"
                    name="outDate"
                    value={outDate}
                    placeholder="yyyy/mm/dd"
                    onChange={(e) => setOutDate(e.target.value)}
                />
                <input
                    type="number"
                    name="guest"
                    value={guest}
                    placeholder="Guest number"
                    onChange={(e) => setGuest(e.target.value)}
                />
                <p>num of nigth(s)</p>
                <p>Total num*price</p>
                {errors.map((err) => (
                    <li className="text-red-600" key={err}>{err}</li>
                ))}
                <button><Link to={path}>Cancel</Link></button>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default FormBooking
