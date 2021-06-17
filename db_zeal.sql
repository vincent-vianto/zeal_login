-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 17, 2021 at 03:58 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_zeal`
--

-- --------------------------------------------------------

--
-- Table structure for table `Class`
--

CREATE TABLE `Class` (
  `id` int(11) NOT NULL,
  `image` varchar(250) NOT NULL,
  `imageName` varchar(250) NOT NULL,
  `title` varchar(250) NOT NULL,
  `subtitle` varchar(250) NOT NULL,
  `sertifikat` varchar(250) NOT NULL,
  `harga` decimal(10,0) NOT NULL,
  `kuota` int(11) NOT NULL,
  `namaMentor` varchar(250) NOT NULL,
  `link` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Class`
--

INSERT INTO `Class` (`id`, `image`, `imageName`, `title`, `subtitle`, `sertifikat`, `harga`, `kuota`, `namaMentor`, `link`) VALUES
(32, 'public/images/1623511244386-coding-screen.jpeg', 'Kelas Programming', 'Kelas Programming', 'Programming Javascript', 'Mengenal Javascript', '120000', 200, 'Hasan', 'http://sertifikat.com');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `id` int(11) NOT NULL,
  `nama` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  `telp` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`id`, `nama`, `email`, `password`, `telp`) VALUES
(7, 'vincent', 'vincent@gmail.com', '$2b$10$GlEzvunz3.KoQjk0dTjZEuJ8VLnJODEb8mgTiJgsoX.xJjRgiMrBu', '00812223232'),
(8, 'sana', 'sanna@gmail.com', '$2b$10$2JablxRv51vtY5rOzh1Fm.wYTcRQj8qFya/K5r5bu1jyxlenGC47S', '00812223232'),
(10, 'sada', 'sadasd@gmail.com', '$2b$10$.LORp504RgGtDil1A.y3bO0goCVNJeIkPYlP8XM63jgBlclGeLP4y', 'asdasdadsa'),
(11, 'sada', 'sadmasd@gmail.co', '$2b$10$kaVvRKVncjSyntMgx6eK3uWrOAa4cek0u3IRgUVgu3uyqh.CoEtDa', 'asdasdadsa'),
(12, 'sada', 'sadmasd@gmail.com', '$2b$10$VyIM3jDYIbx/ibuRfUPDsuEZfVyNI7bxo66SkrUASfQp1DRgt5MdW', 'asdasdadsa');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Class`
--
ALTER TABLE `Class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Class`
--
ALTER TABLE `Class`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
