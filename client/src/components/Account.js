import Booking from "./Booking"
import "./account.css"
import { Link } from "react-router-dom";

function Account({currentUser, bookings, setBookings}) {

    function handleupdate(updateBooking){
        const updateBookings = bookings.map((booking) => {
            if (booking.id === updateBooking.id){
                return updateBooking
            }else{
                return booking
            }
        });
        setBookings(updateBookings)
    }

    function handleDelete(id){
        const updateBookings = bookings.filter((booking) => booking.id !== id);
        setBookings(updateBookings)
    }

    return (
        <div className="ac-container">
            {currentUser? (
                <div>
                    <h4>Hi, {currentUser.username}</h4>
                    <h1>Your Booking</h1>
                    {bookings.map((booking)=>(
                        <Booking 
                            key={booking.id}
                            booking={booking}
                            onUpdate={handleupdate}
                            onDelete={handleDelete}
                    />
                ))}   
                </div>  
            ):(
                <p>Please <Link className="ac-link" to="/login">login</Link> or <Link className="ac-link" to="/signup">signup</Link></p>
            )}
            
        </div>
    )
}

export default Account
