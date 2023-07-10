-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Време на генериране: 10 юли 2023 в 14:06
-- Версия на сървъра: 10.4.27-MariaDB
-- Версия на PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данни: `petfinder`
--

-- --------------------------------------------------------

--
-- Структура на таблица `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `comment_text` varchar(255) NOT NULL,
  `comment_images` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Схема на данните от таблица `comments`
--

INSERT INTO `comments` (`id`, `post_id`, `comment_text`, `comment_images`, `date`) VALUES
(2, 1, 'test2', 'test2', '2023-07-10 11:53:54'),
(3, 1, 'test3', 'test3', '2023-07-10 11:53:54'),
(4, 1, 'tes42', 'test4', '2023-07-10 11:53:54'),
(5, 1, 'test5', 'test5', '2023-07-10 11:53:54'),
(6, 1, 'test6', 'test6', '2023-07-10 11:53:54'),
(7, 1, 'test7', 'test7', '2023-07-10 11:53:54'),
(8, 1, 'test8', 'test8', '2023-07-10 11:53:54'),
(9, 1, 'test9', 'test9', '2023-07-10 11:53:54'),
(10, 1, 'test10', 'test10', '2023-07-10 11:53:54'),
(11, 1, 'test11', 'test11', '2023-07-10 11:53:54'),
(12, 1, 'test12', 'test12', '2023-07-10 11:53:54'),
(13, 2, 'test', 'test', '2023-07-10 11:53:54'),
(14, 2, 'test2', 'test2', '2023-07-10 11:53:54'),
(15, 2, 'test3', 'test3', '2023-07-10 11:53:54'),
(16, 2, 'test2', 'test4', '2023-07-10 11:53:54'),
(17, 2, 'test5', 'test5', '2023-07-10 11:53:54'),
(18, 2, 'test6', 'test6', '2023-07-10 11:53:54'),
(19, 2, 'test7', 'test7', '2023-07-10 11:53:54'),
(20, 2, 'test8', 'test8', '2023-07-10 11:53:54'),
(21, 2, 'test9', 'test9', '2023-07-10 11:53:54'),
(22, 2, 'test10', 'test10', '2023-07-10 11:53:54'),
(23, 2, 'test11', 'test11', '2023-07-10 11:53:54'),
(24, 2, 'test12', 'test12', '2023-07-10 11:53:54');

-- --------------------------------------------------------

--
-- Структура на таблица `posts`
--

CREATE TABLE `posts` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `images` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Схема на данните от таблица `posts`
--

INSERT INTO `posts` (`id`, `title`, `text`, `images`, `phone`, `name`, `category`, `status`, `location`, `date`) VALUES
(1, 'test', 'test', 'http://localhost:3000/images/image-1688729093161.jfif', 'test', 'test', 'test', 'searching_for_owner', '', '2008-11-11 00:00:00'),
(2, 'test2', 'test2', 'http://localhost:3000/images/image-1688729093161.jfif', 'test2', 'test2', 'test2', 'searching_for_pet', '', '2008-11-11 00:00:00'),
(4, 'title', 'text', 'http://localhost:3000/images/image-1688729093161.jfif', 'phone', 'name', 'category', 'searching_for_owner', '', '2008-11-11 00:00:00'),
(5, 'idk', 'idk', 'http://localhost:3000/images/image-1688729093161.jfif', 'idk', 'idk', 'idk', 'found', '', '2008-11-11 00:00:00'),
(6, 'John', 'Doe', 'http://localhost:3000/images/image-1688734184598.png', 'John', 'Doe', 'John', 'searching_for_pet', '', '2008-11-11 00:00:00'),
(7, 'John', 'Doe', 'http://localhost:3000/images/image-1688973355606.jpg', 'John', 'Doe', 'John', 'searching_for_pet', '', '2008-11-11 00:00:00'),
(8, 'Тестов пост', 'ООО нее загубих си кученцетоо много е сладкоо и ми липсваааа', 'http://localhost:3000/images/image-1688979736460.webp', '08969696969', 'Монката', 'куче', 'searching_for_pet', '', '2023-07-10 12:02:16');

--
-- Indexes for dumped tables
--

--
-- Индекси за таблица `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`),
  ADD KEY `post_has_comments` (`post_id`);

--
-- Индекси за таблица `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Ограничения за дъмпнати таблици
--

--
-- Ограничения за таблица `comments`
--
ALTER TABLE `comments`
  ADD CONSTRAINT `post_has_comments` FOREIGN KEY (`post_id`) REFERENCES `posts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
