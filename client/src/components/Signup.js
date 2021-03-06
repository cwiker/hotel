import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./login_signup.css"

function Signup({setCurrentUser, roomID}) {
  const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    // const path = `/rooms/${roomID}`
    const [formData, setFromData] = useState({
      full_name:"",
      username: "",
      email:"",
      password: "",
    });

    function handleChange(e){
      setFromData({
          ...formData,
          [e.target.name]: e.target.value
      });
    };

    function handleSubmit(e){
      e.preventDefault();

      const userData = {...formData};
      fetch("/signup", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
      })
      .then((r) => {
          if (r.ok) {
              r.json().then((user) => {
                  setCurrentUser(user);
                  const path = roomID ? `/rooms/${roomID}` : "/"
                  navigate(path)
                  setFromData({
                    full_name:"",
                    username: "",
                    email:"",
                    password: "",
                  });
            });
          } else {
            r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    return (
      <div className="ls-container">
        <form className="ls-form" onSubmit={handleSubmit}>
            <h2>Sign up here</h2>
                <input 
                    className="ls-input"
                    id="full_name"
                    type="text"
                    name="full_name"
                    placeholder="Fullname"
                    value={formData.full_name}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className="ls-input"
                    id="username-signup"
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className="ls-input"
                    id="email-signup"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <br />
                <input 
                    className="ls-input"
                    id="password-signup"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <br />
                {errors.map((err) => (
                    <li className="ls-error" key={err}>{err}</li>
                ))}
                <button className="ls-button" type="submit">Signup</button>
                <p>Already have an account? <Link to="/login" className="ls-link">Login</Link></p>
          </form>
      </div>
    );
}

export default Signup
