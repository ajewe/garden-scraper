DROP TABLE IF EXISTS plants;

CREATE TABLE plants (
  plant_name VARCHAR(100) NOT NULL,
  plant_spacing_per_sqft VARCHAR(50),
  PRIMARY KEY (plant_name)
);

-- INSERT INTO plants
--   (plant_name, plant_spacing_per_sqft)
-- VALUES
--   (x, y)

-- LOAD DATA LOCAL INFILE './plantData.csv'
-- INTO TABLE plants
-- FIELDS TERMINATED BY ',' ENCLOSED BY '"'
-- LINES TERMINATED BY '/n';
