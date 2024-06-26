import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles/Dashboard.css';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const userLink = 'http://localhost:3000/auth/users';
  const favoritesLink = 'http://localhost:3000/favorites';

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(userLink, {
          headers: { Authorization: `${localStorage.getItem('token')}` }
        });
        setUserDetails(response.data.user);
      } catch (error) {
        console.error("There was an error fetching the user details!", error);
      }
    };

    const fetchFavorites = async () => {
      try {
        const response = await axios.get(favoritesLink, {
          headers: { Authorization: `${localStorage.getItem('token')}` }
        });
        setFavorites(response.data);
      } catch (error) {
        console.error("There was an error fetching the favorite spots!", error);
      }
    };

    fetchUserDetails();
    fetchFavorites();
  }, []);

  const handleDeleteFavorite = async (favId) => {
    try {
      await axios.delete(`${favoritesLink}/${favId}`, {
        headers: { Authorization: `${localStorage.getItem('token')}` }
      });
      setFavorites(favorites.filter(favorite => favorite._id !== favId));
    } catch (error) {
      console.error("There was an error deleting the favorite spot!", error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>User Details</h2>
      {userDetails ? (
        <div className="user-details">
          <p>ID: {userDetails.id}</p>
          <p>Email: {userDetails.email}</p>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}

      <h2>Favorite Surf Spots</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {favorites.map(fav => (
            fav.surf_spot_id && (
              <tr key={fav._id}>
                <td>
                  <a href={`/favorites/${fav.surf_spot_id._id}`}>{fav.surf_spot_id.name}</a>
                </td>
                <td>{fav.surf_spot_id.description}</td>
                <td>{fav.surf_spot_id.location}</td>
                <td><img src={fav.surf_spot_id.image} alt={fav.surf_spot_id.name} /></td>
                <td><button onClick={() => handleDeleteFavorite(fav._id)}>Delete</button></td>
              </tr>
            )
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
