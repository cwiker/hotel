import { useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import "./roomDetail.css"

function RoomDetail({currentUser, room, setRoom, handleAddbooking}) {
    const path = '/rooms'
    const { name, r_type, price, capacity, pets, breakfast, description, image  } = room
    const {id} = useParams();
    const bookingPath = currentUser ? `/${id}/bookings/new` : "/login"

    // localStorage.setItem("roomID",id)
    
    useEffect(()=>{
        fetch(`/rooms/${id}`)
        .then((r)=>r.json())
        .then((room)=>{
            setRoom(room);
        })
    },[setRoom, id])
    console.log(setRoom)

    return (
        <div className="rd-container">
            <div className="rd-card">
                <div className="rd-flex">
                    <div className="rd-desc">
                        <div>
                            <img className="rd-img" src={image} alt={name} />
                        </div>
                        <div className="rd-desc1">
                            <div className="rd-name">
                                <h3>{name}</h3>
                                <p className="rd-indent">{description}</p>
                            </div>
                            <div className="rd-desc2">
                                <div className="rd-desc3">
                                    <strong>Room type:</strong>
                                    <strong>Price:</strong>
                                    <strong>Max capacity:</strong>
                                    <strong>Pets:</strong>
                                    <strong>Breakfast:</strong>
                                </div>
                                <div className="rd-desc4">
                                    <span>{r_type}</span>
                                    <span>${price}</span>
                                    <span>{capacity} guests</span>
                                    <span>{pets? "Yes" : "No"}</span>
                                    <span>{breakfast? "Yes" : "No"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="rd-btn">
                        <div className="rd-btn1">
                            <Link to={path}><button className="rd-button">See other room</button></Link>
                        </div>
                        <div className="rd-btn2">
                            <Link to={bookingPath}><button className="rd-button">Book</button></Link> 
                        </div>
                    </div>
                </div>  
            </div> 
        </div>
    )
}

export default RoomDetail
