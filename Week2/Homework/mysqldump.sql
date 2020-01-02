-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: company_hyf
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `department`
--

DROP TABLE IF EXISTS `department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `department` (
  `dept_no` int(11) NOT NULL,
  `title` varchar(25) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `manager_name` varchar(25) DEFAULT NULL,
  `manager` int(11) DEFAULT NULL,
  PRIMARY KEY (`dept_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `department`
--

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department` VALUES (100,' Management',' responsible for the all the managemental tasks issues',' Leersum',' Wouter Kleijn',11),(200,' Education',' deal with educational issues',' Doorn',' Noer Paanakker',22),(300,' Human Resources',' for recruitment',' Driebergen',' Federico Fusco',33),(400,' Mentoring',' to follow each student for improvement',' Maarn',' Tjebbe Schalij',44),(500,' Catering',' deal with refreshment',' Amerongen',' Ramazan Ince',55);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `employee_no` int(11) NOT NULL,
  `full_name` varchar(25) DEFAULT NULL,
  `salary` int(6) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `manager` int(11) DEFAULT NULL,
  PRIMARY KEY (`employee_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (1,' Alex De Souza',1000,' Leersum-Netherlands',11),(2,' Brain Smith',2000,' Doorn',11),(3,' Cem Karaca',3500,' Driebergen',11),(4,' Danjumo Pedro',3500,' Maarssen',11),(5,' Emre Belezoglu',1500,' Maarn',11),(6,' Faruk Arslan',2500,' Baarn',22),(7,' Gokhan Yigit',5000,' Utrecht',22),(8,' Haldun Dormen',3500,' Houten',22),(9,' Ince Ramazan',2000,' Amerangon',22),(10,' Jacky Jen',8000,' Maarsbergen',22),(11,' Kadir Inanmaz',2000,' Zeist',33),(12,' Levent Sarigul',8500,' De Bilt',33),(13,' Mahmut Tuncer',2655,' Hilversum',33),(14,' Nihat Kahveci',13000,' Weert',33),(15,' Okan Buruk',4500,' Budel',33),(16,' Pehlivan Sari',2655,' Breda',44),(17,' Kadir Pembe',9500,' Gilze',44),(18,' Recep Inan',2655,' Breda',44),(19,' Sari Inek',1000,' Tilburg',44),(20,' Tarik Akan',5000,' Eindhoven',44);
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-02  1:58:12
