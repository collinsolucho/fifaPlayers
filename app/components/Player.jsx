import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

export function Player({ player }) {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);

  const {
    name = "Unknown Player",
    team = "Unknown Team",
    nationality = "Unknown",
    jerseyNumber = 0,
    age = 0,
    imageUrl = "https://via.placeholder.com/300x400?text=Player+Image",
  } = player;

  const cardStyle = {
    border: "none",
    borderRadius: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    backgroundColor: "#ffffff",
    overflow: "hidden",
    position: "relative",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "280px",
  };

  const imageStyle = {
    height: "100%",
    minHeight: "280px",
    objectFit: "cover",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    filter: "brightness(1.1) contrast(1.1)",
    transition: "all 0.3s ease",
    opacity: imageLoading ? 0.7 : 1,
  };

  const mobileImageStyle = {
    height: "200px",
    objectFit: "cover",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "0px",
    filter: "brightness(1.1) contrast(1.1)",
    transition: "all 0.3s ease",
    opacity: imageLoading ? 0.7 : 1,
  };

  const loadingStyle = {
    height: "100%",
    minHeight: "280px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    color: "#666",
    fontSize: "1.2rem",
  };

  const mobileLoadingStyle = {
    height: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    color: "#666",
    fontSize: "1.2rem",
  };

  const contentStyle = {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    padding: "1.5rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const mobileContentStyle = {
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const titleStyle = {
    color: "#2c3e50",
    fontWeight: "800",
    fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
    marginBottom: "1.5rem",
    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
    background: "linear-gradient(45deg, #2c3e50, #3498db)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: "1.2",
  };

  const detailStyle = {
    color: "#34495e",
    fontSize: "clamp(0.85rem, 2vw, 1rem)",
    marginBottom: "0.8rem",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    flexWrap: "wrap",
  };

  const labelStyle = {
    color: "#7f8c8d",
    fontWeight: "600",
    fontSize: "clamp(0.75rem, 1.8vw, 0.85rem)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  };

  const valueStyle = {
    color: "#2c3e50",
    fontWeight: "700",
    fontSize: "clamp(0.85rem, 2vw, 1rem)",
  };

  const jerseyNumberStyle = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "linear-gradient(45deg, #ff6b6b, #ee5a24)",
    color: "white",
    borderRadius: "50%",
    width: "clamp(35px, 8vw, 40px)",
    height: "clamp(35px, 8vw, 40px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 10,
  };

  const handleImageLoad = () => {
    setImageLoading(false);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
  };

  return (
    <Card
      className="player-card mb-4"
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.2)";
        if (!imageError) {
          const img = e.currentTarget.querySelector("img");
          if (img) img.style.transform = "scale(1.05)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
        if (!imageError) {
          const img = e.currentTarget.querySelector("img");
          if (img) img.style.transform = "scale(1)";
        }
      }}
    >
      {/* Desktop Layout */}
      <Row className="g-0 d-none d-md-flex">
        <Col md={4} style={{ position: "relative" }}>
          {imageError ? (
            <div style={loadingStyle}>
              <div>Image Unavailable</div>
            </div>
          ) : (
            <Card.Img
              variant="top"
              src={imageUrl}
              alt={name}
              style={imageStyle}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
          <div style={jerseyNumberStyle}>{jerseyNumber}</div>
        </Col>
        <Col md={8}>
          <div style={contentStyle}>
            <Card.Title className="player-name" style={titleStyle}>
              {name}
            </Card.Title>
            <div>
              <div style={detailStyle}>
                <span style={labelStyle}>Team:</span>
                <span style={valueStyle}>{team}</span>
              </div>
              <div style={detailStyle}>
                <span style={labelStyle}>Nationality:</span>
                <span style={valueStyle}>{nationality}</span>
              </div>
              <div style={detailStyle}>
                <span style={labelStyle}>Age:</span>
                <span style={valueStyle}>{age} years</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* Mobile Layout */}
      <div className="d-md-none">
        <div style={{ position: "relative" }}>
          {imageError ? (
            <div style={mobileLoadingStyle}>
              <div>Image Unavailable</div>
            </div>
          ) : (
            <Card.Img
              variant="top"
              src={imageUrl}
              alt={name}
              style={mobileImageStyle}
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
          <div style={jerseyNumberStyle}>{jerseyNumber}</div>
        </div>
        <div style={mobileContentStyle}>
          <Card.Title className="player-name" style={titleStyle}>
            {name}
          </Card.Title>
          <div>
            <div style={detailStyle}>
              <span style={labelStyle}>Team:</span>
              <span style={valueStyle}>{team}</span>
            </div>
            <div style={detailStyle}>
              <span style={labelStyle}>Nationality:</span>
              <span style={valueStyle}>{nationality}</span>
            </div>
            <div style={detailStyle}>
              <span style={labelStyle}>Age:</span>
              <span style={valueStyle}>{age} years</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
