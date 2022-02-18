import { useState } from "react"
import Edit from "./Edit"

function Booking({booking, onUpdate, onDelete}) {
    const {room, checkIn_date, checkOut_date, guest} = booking
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
            <span>{checkIn_date}</span>
            <span>{checkOut_date}</span>
            <span>{guest}</span>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={()=>{setEdit(true)}}>Edit</button>
                {edit && <Edit setEdit={setEdit} booking={booking} onUpdate={onUpdate} />}
        </div>
    )
}

export default Booking
