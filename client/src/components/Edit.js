import { useState } from "react"

function Edit({setEdit, booking, onUpdate}) {
    const [inDate, setInDate] = useState(booking.checkinDate)
    const [outDate, setOutDate] = useState(booking.checkoutDate)
    const [guest, setGuest] = useState(booking.guest)
    const [errors, setErrors] = useState([])

    function handleUpdate(updatedCard) {
        onUpdate(updatedCard)
    }

    function handleFormUpdate(e) {
        e.preventDefault();
        fetch(`/bookings/${booking.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                checkin_date:inDate,
                checkout_date:outDate,
                guest:guest
            })
        })
        .then((r) => {
            if (r.ok){
                r.json().then((newEdit) => {
                    handleUpdate(newEdit)
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
        <div>
            <form onSubmit={handleFormUpdate}>
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
                {errors.map((err) => (
                    <li className="text-red-600" key={err}>{err}</li>
                ))}
                <button onClick={()=>setEdit(false)} >Cancel</button>
                <button type="submit">Confirm</button>
            </form>
        </div>
    )
}

export default Edit
