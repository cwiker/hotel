import { useState } from "react"
import Edit from "./Edit"

function Booking({booking, onUpdate, onDelete}) {
    const {room, checkin_date, checkout_date, guest} = booking
    console.log(booking)
    const [edit, setEdit] = useState(false)

    function handleDelete() {
        fetch(`/bookings/${booking.id}`, {
          method: "DELETE",
        })
        onDelete(booking.id)
    }

    return (
        <div>
            <img src={room.image} alt={room.name} />
            <span>{room.name}</span>
            <span>{checkin_date}</span>
            <span>{checkout_date}</span>
            <span>{guest}</span><br/>
            <span>Total</span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={()=>{setEdit(true)}}>Edit</button>
                {edit && <Edit setEdit={setEdit} booking={booking} onUpdate={onUpdate} />}
        </div>
    )
}

export default Booking
