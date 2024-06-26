import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const Surfspot = () => {

    const [spots, setSpots] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const surfspotLink = 'http://localhost:3000/surfspots';
    const favoritesLink = 'http://localhost:3000/favorites';

    useEffect(() => {
        const fetchSpots = async () => {
          try {
            const response = await axios.get(surfspotLink, {
              headers: { Authorization: `${localStorage.getItem('token')}` }
            });
            console.log("Fetched data:", response.data);
            setSpots(response.data);
          } catch (error) {
            console.error("There was an error fetching the favorite spots!", error);
          }
        };

        const fetchFavorites = async () => {
            try {
              const response = await axios.get(favoritesLink, {
                headers: { Authorization: `${localStorage.getItem('token')}` }
              });
              console.log("Fetched data:", response.data);
              setFavorites(response.data);
            } catch (error) {
              console.error("There was an error fetching the favorites!", error);
            }
          };
    
        fetchSpots();
        fetchFavorites();
    }, []);

    const isFavorite = (spotId) => {
        return favorites.some(favorite => favorite.surf_spot_id._id === spotId);
    };

    const handleFavorite = async (spotId) => {
        try {
          const response = await axios.post(favoritesLink, { surf_spot_id: spotId }, {
            headers: { Authorization: `${localStorage.getItem('token')}` }
          });
          console.log("Added to favorites:", response.data);
          setFavorites((prevFavorites) => [...prevFavorites, {
            ...response.data,
            surf_spot_id: { _id: response.data.surf_spot_id }
        }]);
        } catch (error) {
          console.error("There was an error adding the favorite spot!", error);
        }
    };

    return (
        <div className="surfspot-container">
        <h2>Surf Spots</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Location</th>
              <th>Image</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {spots.map(spot => (
              <tr key={spot._id}>
                <td>
                  <a href={`/surfspots/${spot._id}`}>{spot.name}</a>
                </td>
                <td>{spot.description}</td>
                <td>{spot.location}</td>
                <td><img src={spot.image} alt={spot.name} style={{ width: '100px' }} /></td>
                <td>
                {isFavorite(spot._id) ? (
                  <button disabled>Favorite</button>
                ) : (
                  <button onClick={() => handleFavorite(spot._id)}>Add to Favorites</button>
                )}
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default Surfspot
