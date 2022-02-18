import RoomCard from "./RoomCard"
import Filter from "./Filter"
import "./room.css"

function Room({rooms, onClear, fillRoom, fillGuest}) {
    return (
        <div className="r-container">
            <h1>Available Rooms</h1>
            <Filter onClear={onClear} fillRoom={fillRoom} fillGuest={fillGuest} />
            <div className="r-card">
                    {rooms.map((room)=>(
                        <RoomCard 
                            key={room.id}
                            room={room}
                        />
                    ))}
            </div>
        </div>
    )
}

export default Room
