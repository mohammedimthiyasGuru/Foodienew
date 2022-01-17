# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.23)
# Database: foodie
# Generation Time: 2021-03-08 16:46:09 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table announcement
# ------------------------------------------------------------

DROP TABLE IF EXISTS `announcement`;

CREATE TABLE `announcement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ann_title` varchar(150) DEFAULT NULL,
  `ann_category` varchar(150) DEFAULT NULL,
  `ann_panel` varchar(150) DEFAULT NULL,
  `ann_message` varchar(1000) DEFAULT NULL,
  `ann_attachment` varchar(600) DEFAULT NULL,
  `ann_from` date DEFAULT NULL,
  `ann_to` date DEFAULT NULL,
  `ann_status` varchar(1) DEFAULT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `profile_id` (`profile_id`),
  CONSTRAINT `announcement_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table business
# ------------------------------------------------------------

DROP TABLE IF EXISTS `business`;

CREATE TABLE `business` (
  `biz_id` int(11) NOT NULL AUTO_INCREMENT,
  `biz_name` varchar(100) DEFAULT NULL,
  `biz_email` varchar(320) DEFAULT NULL,
  `biz_contact` varchar(20) DEFAULT NULL,
  `biz_address` varchar(500) DEFAULT NULL,
  `biz_status` varchar(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`biz_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table category
# ------------------------------------------------------------

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `cat_id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(100) DEFAULT NULL,
  `cat_img` varchar(600) DEFAULT NULL,
  `cat_pid` int(11) DEFAULT NULL,
  `cat_status` varchar(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table order_dtl
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_dtl`;

CREATE TABLE `order_dtl` (
  `order_dtl_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_id` int(11) DEFAULT NULL,
  `prod_id` int(11) DEFAULT NULL,
  `prod_qty` int(11) DEFAULT NULL,
  `prod_price` double DEFAULT NULL,
  `prod_total_price` double DEFAULT NULL,
  `order_dtl_status` varchar(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`order_dtl_id`),
  KEY `order_id` (`order_id`),
  KEY `prod_id` (`prod_id`),
  CONSTRAINT `order_dtl_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `order_mst` (`order_id`),
  CONSTRAINT `order_dtl_ibfk_2` FOREIGN KEY (`prod_id`) REFERENCES `product` (`prod_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table order_mst
# ------------------------------------------------------------

DROP TABLE IF EXISTS `order_mst`;

CREATE TABLE `order_mst` (
  `order_id` int(11) NOT NULL AUTO_INCREMENT,
  `order_no` varchar(10) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `order_location` varchar(300) DEFAULT NULL,
  `order_status` varchar(1) DEFAULT NULL,
  `merchant` int(11) DEFAULT NULL,
  `customer` int(11) DEFAULT NULL,
  `rider` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `merchant` (`merchant`),
  KEY `customer` (`customer`),
  KEY `rider` (`rider`),
  CONSTRAINT `order_mst_ibfk_1` FOREIGN KEY (`merchant`) REFERENCES `profile` (`profile_id`),
  CONSTRAINT `order_mst_ibfk_2` FOREIGN KEY (`customer`) REFERENCES `profile` (`profile_id`),
  CONSTRAINT `order_mst_ibfk_3` FOREIGN KEY (`rider`) REFERENCES `profile` (`profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table product
# ------------------------------------------------------------

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `prod_id` int(11) NOT NULL AUTO_INCREMENT,
  `prod_name` varchar(100) DEFAULT NULL,
  `prod_desc` varchar(2000) DEFAULT NULL,
  `prod_img` varchar(600) DEFAULT NULL,
  `prod_price` double DEFAULT NULL,
  `prod_avail_time` varchar(10) DEFAULT NULL,
  `prod_status` varchar(1) DEFAULT NULL,
  `cat_id` int(11) DEFAULT NULL,
  `profile_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`prod_id`),
  KEY `profile_id` (`profile_id`),
  KEY `cat_id` (`cat_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`profile_id`),
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`cat_id`) REFERENCES `category` (`cat_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table profile
# ------------------------------------------------------------

DROP TABLE IF EXISTS `profile`;

CREATE TABLE `profile` (
  `profile_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_first_name` varchar(150) DEFAULT NULL,
  `profile_last_name` varchar(150) DEFAULT NULL,
  `profile_biz_name` varchar(150) DEFAULT NULL,
  `profile_biz_type` varchar(50) DEFAULT NULL,
  `profile_email` varchar(320) DEFAULT NULL,
  `profile_contact` varchar(15) DEFAULT NULL,
  `profile_dob` date DEFAULT NULL,
  `profile_gender` varchar(1) DEFAULT NULL,
  `profile_address` varchar(500) DEFAULT NULL,
  `profile_location` varchar(300) DEFAULT NULL,
  `profile_doc_menu` varchar(600) DEFAULT NULL,
  `profile_status` varchar(1) DEFAULT NULL,
  `profile_pid` int(11) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL,
  `biz_id` int(11) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`profile_id`),
  KEY `biz_id` (`biz_id`),
  KEY `role_id` (`role_id`),
  KEY `profile_pid` (`profile_pid`),
  CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`biz_id`) REFERENCES `business` (`biz_id`),
  CONSTRAINT `profile_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`),
  CONSTRAINT `profile_ibfk_3` FOREIGN KEY (`profile_pid`) REFERENCES `profile` (`profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(50) DEFAULT NULL,
  `role_status` varchar(1) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_id` int(11) DEFAULT NULL,
  `user_login` varchar(320) DEFAULT NULL,
  `user_password` varchar(50) DEFAULT NULL,
  `user_otp` varchar(10) DEFAULT NULL,
  `user_status` varchar(1) DEFAULT NULL,
  `created_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  KEY `profile_id` (`profile_id`),
  CONSTRAINT `user_ibfk_1` FOREIGN KEY (`profile_id`) REFERENCES `profile` (`profile_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
