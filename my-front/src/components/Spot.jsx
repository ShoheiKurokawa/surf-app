import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles/Spot.css'; // Make sure to update the CSS file name as well if needed
import axios from 'axios';

const Spot = () => {
  const { id } = useParams();
  const [spot, setSpot] = useState(null); // Initialize as null to check loading state
  const link = `http://localhost:3000/surfspots/${id}`;

  useEffect(() => {
    const fetchSpot = async () => {
      try {
        const response = await axios.get(link, {
          headers: { Authorization: `${localStorage.getItem('token')}` },
        });
        setSpot(response.data);
      } catch (error) {
        console.error('There was an error fetching the surf spot!', error);
      }
    };

    fetchSpot();
  }, [id]);

  if (!spot) {
    return <div>Loading...</div>;
  }

  return (
    <div className="surfspot-container">
      <h2 className="surfspot-title">Surf Spot Details</h2>
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
            <td>{spot.name}</td>
            <td>{spot.description}</td>
            <td>{spot.location}</td>
            <td>
              <div className="surfspot-image-container">
                <img src={spot.image} alt={spot.name} className="surfspot-image" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Spot;
