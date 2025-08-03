import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Player } from "./Player";
import { players } from "../data/players";

export function PlayersList() {
  const headerStyle = {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    padding: "clamp(1.5rem, 4vw, 2rem) 0",
    marginBottom: "clamp(2rem, 5vw, 3rem)",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
  };

  const titleStyle = {
    fontSize: "clamp(2rem, 6vw, 3rem)",
    fontWeight: "800",
    marginBottom: "0.5rem",
    textShadow: "0 4px 8px rgba(0,0,0,0.3)",
    lineHeight: "1.2",
  };

  const subtitleStyle = {
    fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
    opacity: "0.9",
    fontWeight: "300",
    marginBottom: "0",
  };

  const containerStyle = {
    padding: "clamp(1rem, 3vw, 2rem) 0",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    minHeight: "100vh",
  };

  const rowStyle = {
    margin: "0 -10px",
  };

  const colStyle = {
    padding: "0 10px",
  };

  return (
    <div style={containerStyle}>
      <Container fluid className="px-3 px-md-4">
        <div style={headerStyle}>
          <h1 style={titleStyle}>⚽ FIFA Players</h1>
          <p style={subtitleStyle}>
            Discover the world's greatest football stars
          </p>
        </div>

        <Row style={rowStyle}>
          {players.map((player, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              lg={4}
              xl={3}
              className="mb-4"
              style={colStyle}
            >
              <Player player={player} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
