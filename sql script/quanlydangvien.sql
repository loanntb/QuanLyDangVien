-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 14, 2019 at 04:53 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quanlydangvien`
--

-- --------------------------------------------------------

--
-- Table structure for table `congtac`
--

CREATE TABLE `congtac` (
  `maCT` varchar(20) CHARACTER SET utf8 NOT NULL,
  `chucVu` varchar(60) CHARACTER SET utf8 NOT NULL,
  `noiCT` varchar(150) CHARACTER SET utf8 NOT NULL,
  `thoigianDen` varchar(30) CHARACTER SET utf8 NOT NULL,
  `thoigianDi` varchar(30) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `congtac`
--

INSERT INTO `congtac` (`maCT`, `chucVu`, `noiCT`, `thoigianDen`, `thoigianDi`) VALUES
('CT001', '', '', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `dangvien`
--

CREATE TABLE `dangvien` (
  `maDV` varchar(20) CHARACTER SET utf8 NOT NULL,
  `maCT` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `maKT` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `maKL` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `maXL` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `hoTen` varchar(60) CHARACTER SET utf8 NOT NULL,
  `ngaySinh` varchar(30) CHARACTER SET utf8 NOT NULL,
  `gioiTinh` varchar(10) CHARACTER SET utf8 NOT NULL,
  `CMTND` varchar(20) CHARACTER SET utf8 NOT NULL,
  `danToc` varchar(20) CHARACTER SET utf8 NOT NULL,
  `tonGiao` varchar(10) CHARACTER SET utf8 NOT NULL,
  `diaChi` varchar(150) CHARACTER SET utf8 NOT NULL,
  `ngheNhiep` varchar(150) CHARACTER SET utf8 NOT NULL,
  `ngayVaoDang` varchar(30) CHARACTER SET utf8 NOT NULL,
  `noiVaoDang` varchar(150) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `dangvien`
--

INSERT INTO `dangvien` (`maDV`, `maCT`, `maKT`, `maKL`, `maXL`, `hoTen`, `ngaySinh`, `gioiTinh`, `CMTND`, `danToc`, `tonGiao`, `diaChi`, `ngheNhiep`, `ngayVaoDang`, `noiVaoDang`) VALUES
('DV001', 'CT001', 'KT001', 'KL001', 'XL001', 'Nguyễn Văn a', '1989-06-19', 'Nam', '12345678', 'Kinh', 'Không', 'Nghệ An', 'abc', '2005-06-19', 'Đại học Vinh'),
('DV002', NULL, NULL, NULL, NULL, '', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `khenthuong`
--

CREATE TABLE `khenthuong` (
  `maKT` varchar(20) CHARACTER SET utf8 NOT NULL,
  `tenKT` varchar(30) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `khenthuong`
--

INSERT INTO `khenthuong` (`maKT`, `tenKT`) VALUES
('KT001', 'Giấy khen'),
('KT002', 'Huy hiệu');

-- --------------------------------------------------------

--
-- Table structure for table `kyluat`
--

CREATE TABLE `kyluat` (
  `maKL` varchar(20) CHARACTER SET utf8 NOT NULL,
  `tenKL` varchar(30) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `kyluat`
--

INSERT INTO `kyluat` (`maKL`, `tenKL`) VALUES
('KL001', 'Đình Chỉ');

-- --------------------------------------------------------

--
-- Table structure for table `xeploai`
--

CREATE TABLE `xeploai` (
  `maXL` varchar(20) CHARACTER SET utf8 NOT NULL,
  `tenXL` varchar(15) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_vietnamese_ci;

--
-- Dumping data for table `xeploai`
--

INSERT INTO `xeploai` (`maXL`, `tenXL`) VALUES
('XL001', 'Giỏi'),
('XL002', 'Khá');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `congtac`
--
ALTER TABLE `congtac`
  ADD PRIMARY KEY (`maCT`);

--
-- Indexes for table `dangvien`
--
ALTER TABLE `dangvien`
  ADD PRIMARY KEY (`maDV`),
  ADD KEY `maCT` (`maCT`),
  ADD KEY `maKT` (`maKT`),
  ADD KEY `maKL` (`maKL`),
  ADD KEY `maXL` (`maXL`);

--
-- Indexes for table `khenthuong`
--
ALTER TABLE `khenthuong`
  ADD PRIMARY KEY (`maKT`);

--
-- Indexes for table `kyluat`
--
ALTER TABLE `kyluat`
  ADD PRIMARY KEY (`maKL`);

--
-- Indexes for table `xeploai`
--
ALTER TABLE `xeploai`
  ADD PRIMARY KEY (`maXL`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `dangvien`
--
ALTER TABLE `dangvien`
  ADD CONSTRAINT `dangvien_ibfk_1` FOREIGN KEY (`maCT`) REFERENCES `congtac` (`maCT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dangvien_ibfk_2` FOREIGN KEY (`maKT`) REFERENCES `khenthuong` (`maKT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dangvien_ibfk_3` FOREIGN KEY (`maKL`) REFERENCES `kyluat` (`maKL`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dangvien_ibfk_4` FOREIGN KEY (`maXL`) REFERENCES `xeploai` (`maXL`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
