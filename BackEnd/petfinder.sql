-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Време на генериране: 12 юли 2023 в 13:32
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
(1, 'Кучето ми Пепи избяга! Моля помогнете!', 'Кучето ми Пепи избяга от вкъщи и отиде в посока 27 блок на квартал Тева', 'http://localhost:3000/images/image-1689078937755.webp', '08969696969', 'Георги', 'Куче', 'searching_for_pet', 'Перник', '2023-07-11 15:35:37'),
(2, 'Котето ми просто си излезе!', 'Котето ми Гошко просто излезе от вкъщи и не се върна. Моля ако го видите в областта на кв. Мошино да ми се обадите незабавно!', 'http://localhost:3000/images/image-1689079062215.jpg', '08969696969', 'Петър', 'Котка', 'searching_for_pet', 'Перник', '2023-07-11 15:37:42'),
(3, 'Загубих си котето ', 'Моля ви помогнете ми да си взема мацките от Тева!', 'http://localhost:3000/images/image-1689082368438.jpg', '0888987876', 'Денислав Димчев', 'Котка', 'searching_for_pet', 'Перник', '2023-07-11 16:32:48');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

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
