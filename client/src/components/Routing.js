import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Room from "./Room";
import Account from "./Account";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import RoomDetail from "./RoomDetail";
import FormBooking from "./FormBooking";

function Routing({currentUser, setCurrentUser}) {
    const [rooms, setRooms] = useState([])
    const [room, setRoom] = useState({})
    const [bookings, setBookings] = useState([])
    const [roomFilter, setRoomFilter] = useState("All")
    const [guestFilter, setGuestFilter] = useState("all")

    useEffect(()=>{
        fetch("/rooms")
        .then((r)=>r.json())
        .then((setRooms))
    },[])

    useEffect(()=>{
        fetch("/bookings")
        .then((r)=>r.json())
        .then((setBookings))
    },[])

    function handleAddbooking(newBooking){
        setBookings([...bookings, newBooking])
    }

    const display = rooms
        .filter((room) => {
            if (roomFilter === "All"){
                return true;
            }else{
                return room.r_type === roomFilter;
            } 
        })
        // .filter((room) => {
        //     if (guestFilter === "all"){
        //         return true;
        //     }else{
        //         return room.capacity === guestFilter;
        //     } 
        // })

    function handleClear(){
        setRoomFilter("All")
        setGuestFilter("all")
    }
    
    function handleRoomFilter(event) {
        setRoomFilter(event.target.value);
    }

    function handleGuestFilter(event) {
        setGuestFilter(event.target.value);
    }

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/rooms" element={<Room rooms={display} onClear={handleClear} fillRoom={handleRoomFilter} fillGuest={handleGuestFilter} />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/account" element={<Account currentUser={currentUser} bookings={bookings} setBookings={setBookings} />} />
                <Route path="/rooms/:id" element={<RoomDetail currentUser={currentUser} room={room} handleAddbooking={handleAddbooking} setRoom={setRoom} />} />
                <Route path="/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser} roomID={room.id}/>} />
                <Route path="/signup" element={<Signup setCurrentUser={setCurrentUser} roomID={room.id}/>} />
                <Route path="/:id/bookings/new" element={<FormBooking roomID={room.id} setRoom={setRoom} addBooking={handleAddbooking} currentUser={currentUser} room={room} />} />
            </Routes>
        </div>
    )
}

export default Routing
