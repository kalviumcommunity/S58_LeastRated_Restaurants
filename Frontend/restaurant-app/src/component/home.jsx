import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import logo from '../assets/logo.png';
import home_logo from '../assets/home_logo.png';
import dots_icons from '../assets/dots_icons.png';
import share from '../assets/share.png';
import Form from './Form.jsx';
import { Link } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]); // Initialize data state with an empty array
  const [showform, setShowform] = useState(false);
  const [isloggedin, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/routes/Getdata")
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(error => {
        console.log(error);
      });

    setIsLoggedIn(document.cookie);
  }, [isloggedin]);

  useEffect(() => {
    axios.get("http://localhost:8080/routes/GetUser")
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, []);

  const handleAddClick = () => {
    setShowform(true);
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/routes/Deletedata/${id}`)
      .then((user) => {
        console.log("deleted");
      })
      .catch(error => console.log("Error while deleting:", error));
  };

  const handleLogout = () => {
    document.cookie = "token=; expires=Tue, 19 Jan 1976 03:14:07 GMT; path=/";
    axios.get("http://localhost:8080/routes/logout")
      .then(res => {
        alert(res.data.message);
        setIsLoggedIn(false);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleChange = async (e) => {
    if (e === "all") {
      try {
        const response = await axios.get("http://localhost:8080/routes/Getdata");
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    } else {
      try {
        const response = await axios.get(`http://localhost:8080/routes/Getdata?Created_by=${e}`);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  };

  return (
    <>
      <div className='header'>
        <img className='logo' src={logo} alt="logo" />
        <label>Select a signed-in user:</label>
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="all">All</option>
          {users.map((username) => (
            <option value={username}>{username}</option>
          ))}
        </select>
        <img className='home-logo' src={home_logo} alt="home_logo" />
        <img className='dots-logo' src={dots_icons} alt="dots-icons" />
        <img className='share-btn' src={share} alt="share" />
        {
          isloggedin ? <button onClick={handleLogout}>Log Out</button> :
            <Link to="/Sign-In-Page">
              <button>Log in</button>
            </Link>
        }
      </div>
      <div className='main'>
        <div>
          {data.map(user => {
            return (
              <>
                <div>{user.Id}</div>
                <div>{user.Name}</div>
                <div>{user.Location}</div>
                <div>{user.Ratings}</div>
                <div>{user.Reviews}</div>
                <div>{user.Created_by}</div>
                <Link to={`./update/${user._id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </>
            )
          })}
        </div>
        <Link to="/form">
          <button onClick={handleAddClick}>Add Restaurant+++++</button>
        </Link>
      </div>
      {showform && <Form />}
    </>
  )
}

export default Home;
