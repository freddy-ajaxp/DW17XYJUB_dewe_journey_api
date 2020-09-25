-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2020 at 09:10 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dw17-final`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookmarkxes`
--

CREATE TABLE `bookmarkxes` (
  `id` int(11) NOT NULL,
  `journeyId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bookmarkxes`
--

INSERT INTO `bookmarkxes` (`id`, `journeyId`, `userId`, `createdAt`, `updatedAt`) VALUES
(28, 12, 1, '2020-09-25 05:53:13', '2020-09-25 05:53:13'),
(29, 14, 1, '2020-09-25 05:53:17', '2020-09-25 05:53:17'),
(30, 13, 1, '2020-09-25 05:53:20', '2020-09-25 05:53:20');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20200831072900-create-userx.js'),
('20200831073143-create-tripx.js'),
('20200831073343-create-bookmarkx.js');

-- --------------------------------------------------------

--
-- Table structure for table `tripxes`
--

CREATE TABLE `tripxes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` text,
  `content` text,
  `image` varchar(255) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tripxes`
--

INSERT INTO `tripxes` (`id`, `title`, `description`, `content`, `image`, `userId`, `createdAt`, `updatedAt`) VALUES
(12, 'I have been to Merlin’s Camelot – Château de Pierrefonds in France', '<p>I&rsquo;m a <s>big</s><strong> HUGE </strong>film and TV fan! It&rsquo;s why I work in the industry for goodness sake! So when I was able to visit <strong>Ch&acirc;teau de Pierrefonds</strong>&nbsp;in France I was thrilled! Many of you may know it from the <strong>TV series &lsquo;Merlin&rsquo; where it served as Camelot</strong>. Let me tell you, it is as magical as Merlin himself! I was just in awe of the castle! It&rsquo;s tremendous and magnificently beautiful! Tucked in a small town in France, it&rsquo;s not a big tourist attraction so I felt as if I had the castle to myself. I&rsquo;d love to go back again some day!</p>\r\n', 'I’m a big HUGE film and TV fan! It’s why I work in the industry for goodness sake! So when I was able to visit Château de Pierrefonds in France I was thrilled! Many of you may know it from the TV series ‘Merlin’ where it served as Camelot. Let me tell you, it is as magical as Merlin himself! I was just in awe of the castle! It’s tremendous and magnificently beautiful! Tucked in a small town in France, it’s not a big tourist attraction so I felt as if I had the castle to myself. I’d love to go back again some day!', '1_i_have_been_to_merlin_s_camelot___ch_teau_de_pierrefonds_in_france.JPG', 1, '2020-08-16 02:03:44', '2020-09-16 02:03:44'),
(13, 'Climbing 300 feet high in Bangladesh', '<p>Oh, what a wonderful experience it was! The first time I was able to <strong>climb about 300 feet high hill at Rijuk Waterfall</strong>, Ruma in the Bandarban district of Bangladesh. Yeah, last year during Rainy Season I got the chance to visit one of the most natural and beautiful Rijuk Waterfall. I got scared of heights, it was risky to climb because of rainfall, but <strong>I didn&rsquo;t take a single moment to think when I got an offer to climb</strong>. And of course, I didn&rsquo;t forget to manage a smiling snap while climbing that hill.</p>\r\n', 'Oh, what a wonderful experience it was! The first time I was able to climb about 300 feet high hill at Rijuk Waterfall, Ruma in the Bandarban district of Bangladesh. Yeah, last year during Rainy Season I got the chance to visit one of the most natural and beautiful Rijuk Waterfall. I got scared of heights, it was risky to climb because of rainfall, but I didn’t take a single moment to think when I got an offer to climb. And of course, I didn’t forget to manage a smiling snap while climbing that hill.', '1_climbing_300_feet_high_in_bangladesh.JPG', 1, '2020-09-16 02:04:50', '2020-09-16 02:04:50'),
(14, 'What happens in Venice stays in Venice – my Selfie Stick Fiasco', '<p>There I was. In Venice. In Italy. For real. A backpacker visiting a house transformed into a beautiful museum. I had just discovered there was a magnificent terrace perched on the Grand Canal. I completely fell in love with the place. The colors, the sparkling water, the calm of this hidden gem, a real happy place.</p>\r\n\r\n<blockquote>\r\n<p>I wanted to immortalize this singular moment.</p>\r\n</blockquote>\r\n\r\n<p>So I took it out, for the first time, this mystery object that everyone was talking about, this thing that is supposed to be an essential because it takes your pictures to the next level. I had finally given in and purchased a selfie stick.</p>\r\n\r\n<p>I was shy to use it, a bit of a rookie technology.</p>\r\n\r\n<p>So I waited to be alone. I deployed it and put my phone on it like it should have been. But it was not. Unfortunately.</p>\r\n\r\n<p>It fell apart and it was not supposed to.</p>\r\n\r\n<p>My phone dropped on the floor and it was not supposed to.</p>\r\n\r\n<p>It slid and went directly underneath the small opening of the fence. And it was not supposed to.</p>\r\n\r\n<p>So there I was. In Venice. Admiring and cursing the Grand Canal. For real.</p>\r\n\r\n<p>&ndash; &ndash; &ndash;</p>\r\n\r\n<h2>Our guide to Venice</h2>\r\n\r\n<p>When heading to Venice, make sure you take a look at our tips to <a href=\"https://hostelgeeks.com/hidden-venice-travel-tips/\">discover&nbsp;the hidden Venice</a> with our 6 secrets. Does it still exist? Yes, and we will&nbsp;help you to find your own piece of Venice.</p>\r\n\r\n<p><strong>Food on a budget:</strong></p>\r\n\r\n<p>Here is our guide to <a href=\"https://hostelgeeks.com/where-to-eat-in-venice-on-budget/\">where to eat in Venice</a> &ndash; 22 places recommended by locals.</p>\r\n\r\n<p><strong>A stunning hostel:</strong></p>\r\n\r\n<p>Check out as well the best hostel in Venice, the COMBO Hostel &ndash; it is a former monastery. Here is our full hostel <a href=\"https://hostelgeeks.com/we-crociferi-venice-review/\">review of COMBO Hostel</a>.</p>\r\n', 'There I was. In Venice. In Italy. For real. A backpacker visiting a house transformed into a beautiful museum. I had just discovered there was a magnificent terrace perched on the Grand Canal. I completely fell in love with the place. The colors, the sparkling water, the calm of this hidden gem, a real happy place.I wanted to immortalize this singular moment.So I took it out, for the first time, this mystery object that everyone was talking about, this thing that is supposed to be an essential because it takes your pictures to the next level. I had finally given in and purchased a selfie stick.I was shy to use it, a bit of a rookie technology.So I waited to be alone. I deployed it and put my phone on it like it should have been. But it was not. Unfortunately.It fell apart and it was not supposed to.My phone dropped on the floor and it was not supposed to.It slid and went directly underneath the small opening of the fence. And it was not supposed to.So there I was. In Venice. Admiring and cursing the Grand Canal. For real.– – –Our guide to VeniceWhen heading to Venice, make sure you take a look at our tips to discover the hidden Venice with our 6 secrets. Does it still exist? Yes, and we will help you to find your own piece of Venice.Food on a budget:Here is our guide to where to eat in Venice – 22 places recommended by locals.A stunning hostel:Check out as well the best hostel in Venice, the COMBO Hostel – it is a former monastery. Here is our full hostel review of COMBO Hostel.', '1_what_happens_in_venice_stays_in_venice___my_selfie_stick_fiasco.JPG', 1, '2020-09-16 02:06:24', '2020-09-16 02:06:24');

-- --------------------------------------------------------

--
-- Table structure for table `userxes`
--

CREATE TABLE `userxes` (
  `id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `picture` varchar(255) DEFAULT 'default.png',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userxes`
--

INSERT INTO `userxes` (`id`, `fullname`, `email`, `password`, `phone`, `address`, `picture`, `createdAt`, `updatedAt`) VALUES
(1, 'Freddy A P', 'examplex@gmail.com', '$2b$10$H76iEKql6XQ4TvEvFiXhcehSJfGHakhuVq8/eLFH/toCl1BhelPs.', '021', 'address', 'profile_1.JPG', '2020-08-16 09:21:27', '2020-09-22 07:30:14'),
(2, 'examplex2', 'examplex@gmail.com', '$2b$10$H76iEKql6XQ4TvEvFiXhcehSJfGHakhuVq8/eLFH/toCl1BhelPs.', '021', 'address', 'https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80', '2020-08-16 09:21:27', '2020-08-16 09:21:27'),
(3, 'Full Name', 'examplea@gmail.com', '$2b$10$FNUp.kswaYL8oWGXa4PN1.sIjr8d4xMTEQIdwGUqvr5Ug40Ux9uR2', 'aasd', 'asdasd\n', NULL, '2020-08-31 09:34:18', '2020-08-31 09:34:18'),
(4, 'xaasd', 'xasda@gmail.com', '$2b$10$ynsK5qYFLnsTa3v5EC0dE.VXurIQmquIN61.QTfp4WTHjvOmzWaVC', '021', 'address', 'default_profile_picture.jpg', '2020-09-04 04:33:57', '2020-09-04 04:33:57'),
(5, '', '', '$2b$10$XhDWau04kgaMuQXGwVuo.uo436RmX05dZVnGHMRG03QPnEDZwNFrK', '', '', 'default_profile_picture.jpg', '2020-09-09 06:11:23', '2020-09-09 06:11:23'),
(6, 'sebelum presentasi', 'sebelum@gmail.com', '$2b$10$DtjNI8yIckRAGgBOXdEgoemPwvRbMfI9MsLxvtmGXRdOn/7PRRCYS', '123', 'nama adress', 'profile_6.JPG', '2020-09-09 06:40:52', '2020-09-09 06:41:23'),
(7, 'pengguna baru presentasi', 'penggunabaru@gmail.com', '$2b$10$UBgjsjEk83u2LlZ8/VwXO.o58OI5nWZFpcdYZ9WEkQlXiEBsj433u', '021', 'address', 'profile_7.JPG', '2020-09-09 07:10:33', '2020-09-09 07:39:54'),
(8, 'asdasdasdasd', 'examplasdase2@gmail.com', '$2b$10$OoLMKSxlkYePwHQ9u5Llmu0X46yYqnKe14tRzlh4sij8D8C4Ydq2.', '13123', 'asdasd', 'default_profile_picture.jpg', '2020-09-15 23:39:39', '2020-09-15 23:39:39'),
(9, 'naksd', 'asdasdasda21example@gmail.com', '$2b$10$ra0TaKVe72inhvWtAWmla.Egclxz7HbW.h6P/5z/BCxDLpne1uhgK', '123', '12asd', 'default.png', '2020-09-16 00:02:24', '2020-09-16 00:02:24'),
(10, 'siapanama', 'example@gmail.comasdasd', '$2b$10$lMEMw5EeyNUFlMnVcQNxyeGOuaWEu.Z8voMUsyK20TT1xhTDXWr1q', '790890', 'asd', 'default.png', '2020-09-16 01:17:42', '2020-09-16 01:17:42'),
(11, 'aasdasdasd', 'example@gmail.com', '$2b$10$VD8vNe1d2Q3DC/X99bGIN.nbae3poYnhboD9oIVKGCo.OGITDL4oK', '13123', 'sadasd', 'default.png', '2020-09-16 03:03:45', '2020-09-16 03:03:45'),
(12, 'siapa saja', 'jhas67example@gmail.com', '$2b$10$vp40MatAbL69vu.R8ynPRe3fz1OI3Cf20hFYbcsvWLLIPrsZ1/Mu6', '5612312', 'asdasdasd', 'default.png', '2020-09-16 03:18:20', '2020-09-16 03:18:20'),
(13, 'sebelum presentasi', 'asdasdasd@asdasd.com', '$2b$10$Hlq8bWACH8mW/rBH0o/.EOynR8kL2ZdhG5TOiCNhSRi.IUtZz84WG', '13123123', 'asdasd', 'default.png', '2020-09-16 06:55:44', '2020-09-16 06:55:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookmarkxes`
--
ALTER TABLE `bookmarkxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `journeyId` (`journeyId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `tripxes`
--
ALTER TABLE `tripxes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `userxes`
--
ALTER TABLE `userxes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookmarkxes`
--
ALTER TABLE `bookmarkxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
--
-- AUTO_INCREMENT for table `tripxes`
--
ALTER TABLE `tripxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `userxes`
--
ALTER TABLE `userxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookmarkxes`
--
ALTER TABLE `bookmarkxes`
  ADD CONSTRAINT `bookmarkxes_ibfk_3` FOREIGN KEY (`journeyId`) REFERENCES `tripxes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bookmarkxes_ibfk_4` FOREIGN KEY (`userId`) REFERENCES `userxes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tripxes`
--
ALTER TABLE `tripxes`
  ADD CONSTRAINT `tripxes_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `userxes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
