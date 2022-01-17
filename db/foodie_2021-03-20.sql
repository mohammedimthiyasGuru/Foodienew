# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.23)
# Database: foodie
# Generation Time: 2021-03-20 11:28:44 +0000
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

LOCK TABLES `business` WRITE;
/*!40000 ALTER TABLE `business` DISABLE KEYS */;

INSERT INTO `business` (`biz_id`, `biz_name`, `biz_email`, `biz_contact`, `biz_address`, `biz_status`, `created_by`, `created_at`, `updated_by`, `updated_at`)
VALUES
	(1,'Foodie','biz@foodie.com','1234123412','#3, SDF, Malaysia','A',NULL,'2021-03-08 22:23:40',NULL,'2021-03-08 22:23:40');

/*!40000 ALTER TABLE `business` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;

INSERT INTO `category` (`cat_id`, `cat_name`, `cat_img`, `cat_pid`, `cat_status`, `created_by`, `created_at`, `updated_by`, `updated_at`)
VALUES
	(1,'Starter',NULL,NULL,'A',3,'2021-03-20 09:57:52',3,'2021-03-20 09:57:52'),
	(2,'Main dish',NULL,NULL,'A',3,'2021-03-20 09:58:13',3,'2021-03-20 09:58:13'),
	(4,'Dinner',NULL,NULL,'A',3,'2021-03-20 09:58:30',3,'2021-03-20 09:58:30'),
	(5,'Soft drinks',NULL,NULL,'A',3,'2021-03-20 09:58:41',3,'2021-03-20 09:58:41');

/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;


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
  `prod_avail_time` varchar(50) DEFAULT NULL,
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

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;

INSERT INTO `product` (`prod_id`, `prod_name`, `prod_desc`, `prod_img`, `prod_price`, `prod_avail_time`, `prod_status`, `cat_id`, `profile_id`, `created_by`, `created_at`, `updated_by`, `updated_at`)
VALUES
	(1,'Product','Product description','https://careerindemo.s3.ap-southeast-1.amazonaws.com/prodimgs/5958340362-logo.png',10.5,'6:00 AM to 11.00 PM','A',1,6,NULL,'2021-03-20 10:45:44',3,'2021-03-20 11:27:07'),
	(2,'Prod name','Prod description',NULL,10.5,'6:00 AM to 11.00 PM','A',2,6,3,'2021-03-20 11:04:41',3,'2021-03-20 11:04:41'),
	(4,'Prod name','Prod description',NULL,10.5,'6:00 AM to 11.00 PM','A',4,6,3,'2021-03-20 11:05:05',3,'2021-03-20 11:05:05'),
	(5,'Prod name','Prod description',NULL,10.5,'6:00 AM to 11.00 PM','A',4,6,3,'2021-03-20 11:05:09',3,'2021-03-20 11:05:09'),
	(6,'Prod name','Prod description',NULL,10.5,'6:00 AM to 11.00 PM','A',4,6,3,'2021-03-20 11:05:11',3,'2021-03-20 11:05:11');

/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;


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
  `profile_summary` varchar(6000) DEFAULT NULL,
  `profile_img` varchar(300) DEFAULT NULL,
  `profile_facebook` varchar(300) DEFAULT NULL,
  `profile_youtube` varchar(300) DEFAULT NULL,
  `profile_instagram` varchar(300) DEFAULT NULL,
  `profile_twitter` varchar(300) DEFAULT NULL,
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

LOCK TABLES `profile` WRITE;
/*!40000 ALTER TABLE `profile` DISABLE KEYS */;

INSERT INTO `profile` (`profile_id`, `profile_first_name`, `profile_last_name`, `profile_biz_name`, `profile_biz_type`, `profile_email`, `profile_contact`, `profile_dob`, `profile_gender`, `profile_address`, `profile_location`, `profile_doc_menu`, `profile_summary`, `profile_img`, `profile_facebook`, `profile_youtube`, `profile_instagram`, `profile_twitter`, `profile_status`, `profile_pid`, `role_id`, `biz_id`, `created_by`, `created_at`, `updated_by`, `updated_at`)
VALUES
	(1,'Admin','Admin','Foodie',NULL,'biz@foodie.com','1234123412',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A',NULL,1,1,NULL,'2021-03-08 22:23:40',NULL,'2021-03-08 22:23:40'),
	(5,'Raj','Kumar','Raj Foods','Restrants','rajfoo@foodie.com','1234123412',NULL,NULL,'Address Line 1, Address Line 2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A',NULL,2,1,NULL,'2021-03-08 17:53:45',NULL,'2021-03-08 17:53:45'),
	(6,'First Name','Last Name','Business Name','Business Type','email@test.com','1234123412','2021-12-11','M','Address st1, st2, city, state, India, 234567','Location','https://careerindemo.s3.ap-southeast-1.amazonaws.com/menucards/0663405649-dl-udhay.jpeg','Summary about profile','https://careerindemo.s3.ap-southeast-1.amazonaws.com/profileimgs/2006537451-dl-udhay.jpeg','http://facebook.com','http://youtube.com','http://instagram.com','http://twitter.com','A',NULL,2,1,NULL,'2021-03-08 17:54:51',3,'2021-03-20 09:32:12'),
	(7,'Rajan','Kumar','Rajan Foods','Restrants','rajan@foodie.com','1234123412',NULL,NULL,'Address Line 1, Address Line 2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A',NULL,2,1,NULL,'2021-03-20 05:55:21',NULL,'2021-03-20 05:55:21'),
	(8,'Suthan','V','Suthan','Vendors','suthan@foodie.com','1212121212',NULL,NULL,'Address Line 1, Address Line 2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A',NULL,3,1,NULL,'2021-03-20 06:09:39',NULL,'2021-03-20 06:09:39'),
	(9,'Suthan','Vasanth','Suthanv','Vendors','suthank@foodie.com','1212121212',NULL,NULL,'Address Line 1, Address Line 2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A',NULL,3,1,NULL,'2021-03-20 06:10:34',NULL,'2021-03-20 06:10:34'),
	(10,'Sarath','K','KSarath','Vendors','sarath@foodie.com','1212121212',NULL,NULL,'Address Line 1, Address Line 2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'A',NULL,3,1,NULL,'2021-03-20 06:11:36',NULL,'2021-03-20 06:11:36');

/*!40000 ALTER TABLE `profile` ENABLE KEYS */;
UNLOCK TABLES;


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

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;

INSERT INTO `role` (`role_id`, `role_name`, `role_status`, `created_at`, `updated_at`)
VALUES
	(1,'Admin','A','2021-03-08 22:23:40','2021-03-08 22:23:40'),
	(2,'Merchant','A','2021-03-08 22:23:40','2021-03-08 22:23:40'),
	(3,'Vendor','A','2021-03-08 22:23:40','2021-03-08 22:23:40'),
	(4,'Rider','A','2021-03-08 22:23:40','2021-03-08 22:23:40'),
	(5,'Customer','A','2021-03-08 22:23:40','2021-03-08 22:23:40'),
	(6,'Sub Vendor','A','2021-03-08 22:23:40','2021-03-08 22:23:40');

/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `profile_id` int(11) DEFAULT NULL,
  `user_login` varchar(320) DEFAULT NULL,
  `user_password` varchar(100) DEFAULT NULL,
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

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;

INSERT INTO `user` (`user_id`, `profile_id`, `user_login`, `user_password`, `user_otp`, `user_status`, `created_by`, `created_at`, `updated_by`, `updated_at`)
VALUES
	(1,1,'biz@foodie.com','$2a$08$x2/XCaAjE.i5S9jhj8qHWuUtHnERPvzcbYaH1nCOuE3930eVGbYI.',NULL,'A',NULL,'2021-03-08 17:53:45',NULL,'2021-03-08 17:53:45'),
	(2,5,'rajfoo@foodie.com','$2a$08$BDVMl00.JtWmN3yVdDkcwesr1wWyaf3Jwem7hAsH6lAmLD1Fbjqr2',NULL,'A',NULL,'2021-03-08 17:53:45',NULL,'2021-03-08 18:38:21'),
	(3,6,'rajfood@foodie.com','$2a$08$myV/BUTZLFA7FwL89R6u8u89SjJdeWd6i9eo5ple0GhF71PB5aW4y',NULL,'A',NULL,'2021-03-08 17:54:51',NULL,'2021-03-20 05:41:34'),
	(4,7,'rajan@foodie.com','$2a$08$5ngNOtOafrlepx4kfmjbR.MzKsGjYezr1jYYHm6fT5Kv.b7L7c5bG',NULL,'A',NULL,'2021-03-20 05:55:21',NULL,'2021-03-20 05:56:12'),
	(5,8,'suthan@foodie.com','$2a$08$mv8.J0wiWThoa7i5B/oCuORyugISCpZ2N13uOqcEcHExWSttutlN.',NULL,'A',NULL,'2021-03-20 06:09:39',NULL,'2021-03-20 06:10:02'),
	(6,9,'suthank@foodie.com','$2a$08$RQ2i3UFzy5OpgqXVg7RTHOTBmYEkMwD6FWJGREhjkhTZnakSdKpSm',NULL,'A',NULL,'2021-03-20 06:10:34',NULL,'2021-03-20 06:11:00'),
	(7,10,'sarath@foodie.com','$2a$08$x2/XCaAjE.i5S9jhj8qHWuUtHnERPvzcbYaH1nCOuE3930eVGbYI.',NULL,'A',NULL,'2021-03-20 06:11:36',NULL,'2021-03-20 06:12:05');

/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
