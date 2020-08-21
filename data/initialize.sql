
CREATE TABLE plants (
  id INT NOT NULL AUTO_INCREMENT,
  plant_name VARCHAR(100) NOT NULL,
  plant_spacing_per_sqft VARCHAR(10),
  PRIMARY KEY (id)
);

INSERT INTO plants
  (plant_name, plant_spacing_per_sqft)
VALUES
  (x, y)