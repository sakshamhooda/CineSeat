
CREATE DATABASE cineseat;
USE cineseat;
-- Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);

-- Movies Table
CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    duration INT
);

-- Theaters Table
CREATE TABLE theaters (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    number_of_screens INT
);

-- Showtimes Table
CREATE TABLE showtimes (
    id SERIAL PRIMARY KEY,
    movie_id INT REFERENCES movies(id),
    theater_id INT REFERENCES theaters(id),
    showtime TIMESTAMP
);

-- Reservations Table
CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    showtime_id INT REFERENCES showtimes(id),
    seat_number VARCHAR(10),
    status VARCHAR(50)
);

INSERT INTO users (username, email, password) VALUES 
('rahul_sharma', 'rahul@example.com', 'password123'),
('sneha_gupta', 'sneha@example.com', 'password123'),
('ajay_kumar', 'ajay@example.com', 'password123'),
('priya_rao', 'priya@example.com', 'password123'),
('amit_singh', 'amit@example.com', 'password123');

-- Adding 8 sample movies
INSERT INTO movies (title, genre, duration) VALUES
('3 Idiots', 'Comedy', 170),
('Bahubali', 'Action', 159),
('Dangal', 'Drama', 161),
('Chhichhore', 'Comedy', 143),
('Gully Boy', 'Drama', 153),
('Piku', 'Drama', 123),
('Andhadhun', 'Thriller', 139),
('Tumbbad', 'Horror', 104);

-- Adding 28 sample theaters
INSERT INTO theaters (name, location, number_of_screens) VALUES
('Cineplex CubbonPark', 'Bengaluru-CubbonPark', 5),
('Cineplex Whitefield', 'Bengaluru-Whitefield', 7),
('PVR PunjabiBagh', 'Delhi-PunjabiBagh', 8),
('PVR Saket', 'Delhi-Saket', 6),
('Inox ConnaughtPlace', 'Delhi-ConnaughtPlace', 5),
('Cinepolis MG Road', 'Gurgaon-MGRoad', 6),
('PVR AmbienceMall', 'Gurgaon-AmbienceMall', 9),
('Cinepolis UdyogVihar', 'Gurgaon-UdyogVihar', 7),
('TTS Cinema AnnaNagar', 'Chennai-AnnaNagar', 5),
('PVR Velachery', 'Chennai-Velachery', 6),
('INOX Banjara Hills', 'Hyderabad-BanjaraHills', 7),
('PVR Hitech', 'Hyderabad-HitechCity', 8),
('One Cinema Kothrud', 'Pune-Kothrud', 5),
('RCH Hinjewadi', 'Pune-Hinjewadi', 6),
('PVR Andheri', 'Mumbai-Andheri', 9);

INSERT INTO showtimes (movie_id, theater_id, showtime) VALUES
(1, 1, '2024-09-01 10:00:00'),
(2, 2, '2024-09-01 13:00:00'),
(3, 3, '2024-09-01 16:00:00'),
(4, 4, '2024-09-01 19:00:00'),
(5, 5, '2024-09-01 21:00:00'),
(6, 6, '2024-09-01 18:00:00'),
(7, 7, '2024-09-01 14:00:00'),
(8, 8, '2024-09-01 20:00:00');

INSERT INTO reservations (user_id, showtime_id, seat_number, status) VALUES
(1, 1, 'A1', 'Confirmed'),
(2, 2, 'B1', 'Confirmed'),
(3, 3, 'C1', 'Confirmed'),
(4, 4, 'D1', 'Confirmed');