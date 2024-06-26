import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/FavSpot.css';
import axios from 'axios';

const FavSpot = () => {
  const { id } = useParams();
  const [fav, setFavorite] = useState(null); // Initialize as null to check loading state
  const link = `http://localhost:3000/favorites/${id}`;

  useEffect(() => {
    const fetchFavorite = async () => {
      try {
        const response = await axios.get(link, {
          headers: { Authorization: `${localStorage.getItem('token')}` },
        });
        setFavorite(response.data);
      } catch (error) {
        console.error('There was an error fetching the favorite spot!', error);
      }
    };

    fetchFavorite();
  }, [id]);

  if (!fav) {
    return <div>Loading...</div>;
  }

  return (
    <div className="favspot-container">
      <h2 className="favspot-title">Favorite Spot Details</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fav.surf_spot_id.name}</td>
            <td>{fav.surf_spot_id.description}</td>
            <td>{fav.surf_spot_id.location}</td>
            <td>
              <div className="favspot-image-container">
                <img src={fav.surf_spot_id.image} alt={fav.surf_spot_id.name} className="favspot-image" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


export default FavSpot;
