// src/components/StudentPreferenceForm.jsx
import React, { useState } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import './StudentPreferenceForm.css';

export function StudentPreferenceForm() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Get name and college from URL parameters
  const initialName = searchParams.get('name') || "";
  const initialCollege = searchParams.get('college') || "";

  // Set initial state from URL parameters
  const [name, setName] = useState(initialName);
  const [collegeDetails, setCollegeDetails] = useState(initialCollege);
  
  const [rollNumber, setRollNumber] = useState("");
  const [gender, setGender] = useState("");
  const [batch, setBatch] = useState("");
  const [preferredLocation, setPreferredLocation] = useState("");
  const [desiredRoommates, setDesiredRoommates] = useState("");
  const [roomType, setRoomType] = useState("");
  const [amenities, setAmenities] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleAmenityChange = (amenity, checked) => {
    if (checked) {
      setAmenities((prev) => [...prev, amenity]);
    } else {
      setAmenities((prev) => prev.filter((a) => a !== amenity));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!name || !collegeDetails || !rollNumber || !gender || !batch || !preferredLocation || !roomType) {
      setError("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Submitting preferences:", {
        name,
        rollNumber,
        gender,
        batch,
        preferredLocation,
        desiredRoommates,
        roomType,
        amenities,
      });

      alert("Your preferences have been submitted successfully!");
      navigate("/confirmation");
    } catch (err) {
      setError("Failed to submit preferences. Please try again.");
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="card-container">
      <div className="preference-card">
        <div className="card-header">
          <h2 className="card-title">Hostel Room Preference Form</h2>
          <p className="card-description">
            Please fill out your preferences for hostel room allocation.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="card-content">
            {error && <p className="error-message">{error}</p>}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="collegeDetails">College Details</label>
                <input
                  id="collegeDetails"
                  type="text"
                  placeholder="e.g., University of Technology"
                  value={collegeDetails}
                  onChange={(e) => setCollegeDetails(e.target.value)}
                  required
                />
              </div>
            </div>
            {/* The rest of your form fields */}
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="rollNumber">Roll Number / Email</label>
                <input
                  id="rollNumber"
                  type="text"
                  placeholder="2023CS001 or john.doe@example.com"
                  value={rollNumber}
                  onChange={(e) => setRollNumber(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="batch">Batch</label>
                <select id="batch" value={batch} onChange={(e) => setBatch(e.target.value)} required>
                  <option value="">Select batch</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="preferredLocation">Preferred Hostel Location</label>
                <select id="preferredLocation" value={preferredLocation} onChange={(e) => setPreferredLocation(e.target.value)} required>
                  <option value="">Select a hostel location</option>
                  <option value="north-wing">North Wing</option>
                  <option value="south-wing">South Wing</option>
                  <option value="east-block">East Block</option>
                  <option value="west-block">West Block</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="desiredRoommates">Desired Roommates (Roll Numbers/Emails, comma-separated)</label>
              <input
                id="desiredRoommates"
                type="text"
                placeholder="e.g., 2023CS002, jane.doe@example.com"
                value={desiredRoommates}
                onChange={(e) => setDesiredRoommates(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="roomType">Room Type</label>
              <select id="roomType" value={roomType} onChange={(e) => setRoomType(e.target.value)} required>
                <option value="">Select room type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="triple">Triple</option>
              </select>
            </div>
            <div className="form-group">
              <label>Amenities Preferences</label>
              <div className="amenities-grid">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="wifi"
                    checked={amenities.includes("Wi-Fi")}
                    onChange={(e) => handleAmenityChange("Wi-Fi", e.target.checked)}
                  />
                  <label htmlFor="wifi">Wi-Fi</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="ac"
                    checked={amenities.includes("AC")}
                    onChange={(e) => handleAmenityChange("AC", e.target.checked)}
                  />
                  <label htmlFor="ac">AC</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="studyTable"
                    checked={amenities.includes("Study Table")}
                    onChange={(e) => handleAmenityChange("Study Table", e.target.checked)}
                  />
                  <label htmlFor="studyTable">Study Table</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="attachedBathroom"
                    checked={amenities.includes("Attached Bathroom")}
                    onChange={(e) => handleAmenityChange("Attached Bathroom", e.target.checked)}
                  />
                  <label htmlFor="attachedBathroom">Attached Bathroom</label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="balcony"
                    checked={amenities.includes("Balcony")}
                    onChange={(e) => handleAmenityChange("Balcony", e.target.checked)}
                  />
                  <label htmlFor="balcony">Balcony</label>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Preferences"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}