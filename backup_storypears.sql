-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: storypears
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `emotions`
--

DROP TABLE IF EXISTS `emotions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `emotions` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `emotions_name_index` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2721 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emotions`
--

LOCK TABLES `emotions` WRITE;
/*!40000 ALTER TABLE `emotions` DISABLE KEYS */;
INSERT INTO `emotions` VALUES (2707,'Anticipation'),(2710,'Awe'),(2712,'Bewilderment'),(2719,'Depression'),(2714,'Desolation'),(2704,'Euphoria'),(2717,'Indignation'),(2718,'Intrigue'),(2713,'Longing'),(2720,'Love'),(2705,'Melancholy'),(2716,'Nostalgia'),(2706,'Rage'),(2711,'Revulsion'),(2708,'Serenity'),(2715,'Silly'),(2709,'Trepidation');
/*!40000 ALTER TABLE `emotions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feelings`
--

DROP TABLE IF EXISTS `feelings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feelings` (
  `id` char(36) NOT NULL,
  `sentence` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feelings`
--

LOCK TABLES `feelings` WRITE;
/*!40000 ALTER TABLE `feelings` DISABLE KEYS */;
INSERT INTO `feelings` VALUES ('1b3040ec-3afd-11ee-be56-0242ac120002','Amidst the silence of shattered dreams'),('240ca34a-3afd-11ee-be56-0242ac120002','Hope bloomed like a fragile flower'),('2d80b628-3afd-11ee-be56-0242ac120002','Echoes of regret in every sigh'),('38209224-3afd-11ee-be56-0242ac120002','A symphony of emotions in the quiet night'),('c9999b20-3afc-11ee-be56-0242ac120002','With tears as delicate as morning dew'),('d3571cc8-3afc-11ee-be56-0242ac120002','In the shadow of sorrow\'s embrace'),('de1488f8-3afc-11ee-be56-0242ac120002','A heartache whispered by the breeze'),('e9d783d4-3afc-11ee-be56-0242ac120002','Joyful laughter danced upon the stars'),('f46fe9e4-3afc-11ee-be56-0242ac120002','Lost in the labyrinth of longing'),('fed0d5ce-3afc-11ee-be56-0242ac120002','Love\'s fire burning bright within');
/*!40000 ALTER TABLE `feelings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `genre_id` varchar(36) NOT NULL,
  `genre_name` varchar(50) NOT NULL,
  PRIMARY KEY (`genre_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES ('09008dce-3633-11ee-be56-0242ac120002','Thriller'),('1e1fe9f2-3633-11ee-be56-0242ac120002','Drama'),('33246760-3633-11ee-be56-0242ac120002','Comedy'),('3abbaf10-4669-11ee-be56-0242ac120002','Adventure'),('42001db0-3633-11ee-be56-0242ac120002','Fantasy'),('51a65068-3633-11ee-be56-0242ac120002','Horror'),('55a2ec8c-3aaa-11ee-be56-0242ac120002','Dystopain'),('5a4988b6-3633-11ee-be56-0242ac120002','Mystery'),('691ef5a8-3aaa-11ee-be56-0242ac120002','Historical Fiction'),('77465ba8-3aaa-11ee-be56-0242ac120002','Western'),('f6afd2ce-3632-11ee-be56-0242ac120002','Romance'),('ff9b5746-3632-11ee-be56-0242ac120002','Science Fiction');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `halfstories`
--

DROP TABLE IF EXISTS `halfstories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `halfstories` (
  `id` char(36) NOT NULL,
  `title` varchar(100) NOT NULL,
  `date` date DEFAULT NULL,
  `genre_name` varchar(50) DEFAULT NULL,
  `genre_id` char(36) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `halfstory_id` char(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `halfstories`
--

LOCK TABLES `halfstories` WRITE;
/*!40000 ALTER TABLE `halfstories` DISABLE KEYS */;
INSERT INTO `halfstories` VALUES ('e2bf7150-367f-11ec-8d3d-0242ac130003','The Enchanted Amulet','2023-08-14','Fantasy','42001db0-3633-11ee-be56-0242ac120002','2023-09-01 21:42:08','2023-09-01 21:42:08','3'),('e2bf735a-367f-11ec-8d3d-0242ac130003','Shadows of Deceit','2023-08-15','Mystery','5a4988b6-3633-11ee-be56-0242ac120002','2023-09-01 21:42:08','2023-09-01 21:42:08','1'),('e2bf747a-367f-11ec-8d3d-0242ac130003','Love\'s Whisper','2023-08-16','Romance','f6afd2ce-3632-11ee-be56-0242ac120002','2023-09-01 21:42:08','2023-09-01 21:42:08','2');
/*!40000 ALTER TABLE `halfstories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  `migration_time` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=203 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (1,'20230808150152_create_genres_table.js',1,'2023-08-08 15:29:22'),(4,'20230808150220_create_stories_table.js',2,'2023-08-14 02:12:07'),(5,'20230808152003_create_users_table.js',3,'2023-08-14 12:14:51'),(6,'20230814014834_create_emotions_table.js',4,'2023-08-14 12:18:08'),(7,'20230814021705_create_users_table.js',5,'2023-08-14 12:22:13'),(8,'20230814134502_create_prompts_table.js',6,'2023-08-14 14:02:50'),(10,'20230814144521_create_feelings_table.js',7,'2023-08-14 14:56:56'),(39,'20230814233831_create_prompts_table.js',8,'2023-08-16 20:04:41'),(40,'20230814233957_create_feelings_table.js',8,'2023-08-16 20:04:41'),(41,'20230815010724_create_halfstory_table.js',8,'2023-08-16 20:04:41'),(42,'20230816195443_recreate_feelings_table.js',9,'2023-08-16 20:09:40'),(43,'20230816195642_recreate_feelings_table.js',10,'2023-08-16 20:13:22'),(49,'20230816200534_update_users_id_to_uuid.js',11,'2023-08-17 19:27:46'),(50,'20230816201246_create_feelings_table.js',11,'2023-08-17 19:27:46'),(51,'20230817191311_create_user_table.js',11,'2023-08-17 19:27:46'),(52,'20230817191833_create_halfstory_table.js',12,'2023-08-17 19:29:09'),(53,'20230817194220_update_stories_table.js',13,'2023-08-17 19:45:27'),(54,'20230818011728_update_user_github_table.js',14,'2023-08-18 01:18:42'),(55,'20230818014107_update_user_github_table.js',15,'2023-08-18 01:44:03'),(56,'20230818191313_update_users_github.js',16,'2023-08-18 19:35:34'),(59,'20230818195028_temp_alter_haflstories_table.js',17,'2023-08-18 19:57:34'),(63,'20230818195219_remove_foreign_keys_from_stories.js',18,'2023-08-18 20:06:40'),(64,'20230818200955_update_users_table.js',19,'2023-08-18 20:10:15'),(66,'20230819005142_update_users_google_fb_table.js',20,'2023-08-19 01:07:02'),(68,'20230819200758_create_users_id_table.js',21,'2023-08-19 20:14:25'),(71,'20230819202909_make_password_nullable.js',22,'2023-08-19 20:33:12'),(114,'20230821161936_add_defaults_and_constraints.js',23,'2023-08-27 21:25:29'),(115,'20230821215728_update_users_length_pass.js',23,'2023-08-27 21:25:29'),(116,'20230822123937_update_users_password.js',23,'2023-08-27 21:25:29'),(117,'20230827211906_create_users_table.js',1,'2023-08-27 21:30:23'),(118,'20230827213123_remove_image_column.js',24,'2023-08-27 21:31:54'),(126,'20230827213307_add_links_column.js',25,'2023-08-28 15:39:25'),(127,'20230828135339_create_story_content_table.js',25,'2023-08-28 15:39:25'),(128,'20230828140512_drop_userIds_stories_halfstories.js',26,'2023-08-28 15:47:09'),(162,'20230828120000_add_default_user_id_to_story_contents.js',27,'2023-08-29 20:48:14'),(163,'20230828143844_add_halfstory_id_to_stories.js',27,'2023-08-29 20:48:14'),(164,'20230828143930_add_halfstory_id_to_halfstories.js',27,'2023-08-29 20:48:14'),(165,'20230828144119_remove_story_stories.js',27,'2023-08-29 20:48:14'),(166,'20230828144256_remove_story_halfstories.js',27,'2023-08-29 20:48:14'),(167,'20230829205059_remove_default_value_from_id.js',28,'2023-08-29 20:51:28'),(168,'20230829205141_add_genre_columns_to_story_contents.js',29,'2023-08-29 20:53:19'),(169,'20230829210742_remove_user_id_column.js',30,'2023-08-29 21:08:20'),(170,'20230829211132_add_user_genre_to_story_contents.js',31,'2023-08-29 21:12:39'),(171,'20230829213636_add_emotion_to_stories.js',32,'2023-08-29 21:40:07'),(172,'20230829215216_remove_emotion_from_stories.js',33,'2023-08-29 21:52:40'),(173,'20230829221727_remove_user_id_from_story_contents.js',34,'2023-08-29 22:17:46'),(174,'20230829221824_add_user_id_to_story_contents.js',35,'2023-08-29 22:18:41'),(175,'20230829222353_drop_genre_id_column.js',36,'2023-08-29 22:24:25'),(176,'20230829224007_remove_genre_id_from_story_contents.js',37,'2023-08-29 22:41:09'),(177,'20230829224925_add_title_contents.js',38,'2023-08-29 22:50:53'),(178,'20230830000851_your_migration_name.js',39,'2023-08-30 00:09:49'),(190,'20230830002939_remove_story_contents.js',40,'2023-08-30 03:11:23'),(191,'20230830011042_remove_contents.js',40,'2023-08-30 03:11:23'),(192,'20230830012423_add_contents.js',40,'2023-08-30 03:11:23'),(193,'20230830022107_recreate_contents_table.js',41,'2023-08-30 03:12:07'),(194,'20230830032306_drop_contents_table.js',42,'2023-08-30 03:24:26'),(196,'20230830160038_genre_null_contents.js',43,'2023-08-30 17:21:40'),(198,'20230830171845_create_story_contents.js',44,'2023-08-30 18:36:02'),(200,'20230830185750_create_story_contents.js',45,'2023-08-30 19:00:37'),(201,'20230901231125_update_password_length.js',46,'2023-09-01 23:12:13'),(202,'20230902121820_create_refresh_token_table.js',47,'2023-09-02 14:39:11');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (3,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prompts`
--

DROP TABLE IF EXISTS `prompts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prompts` (
  `id` char(36) NOT NULL,
  `sentence` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prompts`
--

LOCK TABLES `prompts` WRITE;
/*!40000 ALTER TABLE `prompts` DISABLE KEYS */;
INSERT INTO `prompts` VALUES ('43d07daa-3afd-11ee-be56-0242ac120002','The moon hung low in the night sky, casting an eerie glow over the deserted town.'),('4c77fce4-3afd-11ee-be56-0242ac120002','In the heart of the forest, a hidden door beckoned, its ancient carvings telling tales of forgotten magic.'),('576eac7e-3afd-11ee-be56-0242ac120002','The sound of thunder rumbled in the distance as the old mansion creaked with every gust of wind.'),('60d60906-3afd-11ee-be56-0242ac120002','Amidst the bustling city, a street musician played a haunting melody that seemed to touch the souls of passersby.'),('a169ae04-3afe-11ee-be56-0242ac120002','On a remote island, a group of explorers stumbled upon a cave filled with shimmering crystals of unknown origin.'),('a24f8c12-3afe-11ee-be56-0242ac120002','The train\'s whistle echoed through the canyon as it made its way along the treacherous tracks carved into the mountainside.'),('a32b76e2-3afe-11ee-be56-0242ac120002','A single rose lay on the doorstep, accompanied by a cryptic note that left her heart racing.'),('a4d83f14-3afe-11ee-be56-0242ac120002','As the first snowflakes fell, a mysterious figure appeared, leaving intricate ice sculptures in their wake.'),('a6e983ee-3afe-11ee-be56-0242ac120002','In the futuristic city, neon lights illuminated the streets as hovercars glided silently above.'),('a8f5a9b6-3afe-11ee-be56-0242ac120002','The old bookstore held more than just books; its shelves hid secrets waiting to be uncovered.'),('aae7bc08-3afe-11ee-be56-0242ac120002','Under the starry night sky, a campfire crackled as friends shared stories of their wildest adventures.'),('acfe0e2a-3afe-11ee-be56-0242ac120002','In a world where magic had been forgotten, a young sorceress discovered an ancient spellbook that could change everything.'),('aed9c44e-3afe-11ee-be56-0242ac120002','The ancient map led to a hidden temple, rumored to grant immense power to those who dared to enter.'),('b0ec2d54-3afe-11ee-be56-0242ac120002','As the clock struck midnight, the abandoned amusement park came to life with an otherworldly glow.'),('b2db7db4-3afe-11ee-be56-0242ac120002','A sudden blackout plunged the city into darkness, and strange creatures began to emerge from the shadows.'),('b4dc077a-3afe-11ee-be56-0242ac120002','Beneath the waves, a mermaid\'s song lured sailors to their doom, but one sailor was determined to break the curse.'),('b6e4d956-3afe-11ee-be56-0242ac120002','In a land where dreams were real, a young dreamer discovered the key to controlling the world of imagination.'),('b8ee972c-3afe-11ee-be56-0242ac120002','The old lighthouse keeper had seen many storms, but this one was unlike anything he had ever witnessed.'),('baec687e-3afe-11ee-be56-0242ac120002','A peculiar shop appeared on the corner, its sign promising to fulfill any wish for the right price.'),('bce5d0ca-3afe-11ee-be56-0242ac120002','Among the ruins of an ancient civilization, an archaeologist unearthed a journal that revealed a forgotten history.');
/*!40000 ALTER TABLE `prompts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refresh_tokens`
--

DROP TABLE IF EXISTS `refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refresh_tokens` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `expires_at` timestamp NOT NULL,
  PRIMARY KEY (`id`),
  KEY `refresh_tokens_user_id_foreign` (`user_id`),
  CONSTRAINT `refresh_tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refresh_tokens`
--

LOCK TABLES `refresh_tokens` WRITE;
/*!40000 ALTER TABLE `refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `sid` varchar(255) NOT NULL,
  `sess` json NOT NULL,
  `expired` datetime NOT NULL,
  PRIMARY KEY (`sid`),
  KEY `sessions_expired_index` (`expired`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stories`
--

DROP TABLE IF EXISTS `stories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stories` (
  `id` char(36) NOT NULL,
  `title` varchar(100) NOT NULL,
  `date` date DEFAULT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `genre_id` char(36) DEFAULT NULL,
  `halfstory_id` char(36) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stories`
--

LOCK TABLES `stories` WRITE;
/*!40000 ALTER TABLE `stories` DISABLE KEYS */;
INSERT INTO `stories` VALUES ('580e40ce-3614-11ee-be56-0242ac120002','Chasing the Horizon','2023-02-15','Mystery','5a4988b6-3633-11ee-be56-0242ac120002','3'),('726e18fe-3614-11ee-be56-0242ac120002','The Fragrance of Memories','2023-06-10','Romance','f6afd2ce-3632-11ee-be56-0242ac120002','2'),('80abdfaa-3614-11ee-be56-0242ac120002','Notes from the Underground','2023-04-03','Science Fiction','ff9b5746-3632-11ee-be56-0242ac120002','1');
/*!40000 ALTER TABLE `stories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `story_contents`
--

DROP TABLE IF EXISTS `story_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `story_contents` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `story_id` char(36) NOT NULL,
  `user_id` int unsigned DEFAULT NULL,
  `emotion` varchar(255) DEFAULT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `title` varchar(255) NOT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=101 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `story_contents`
--

LOCK TABLES `story_contents` WRITE;
/*!40000 ALTER TABLE `story_contents` DISABLE KEYS */;
INSERT INTO `story_contents` VALUES (28,'70e9e760-45ec-4fe7-a405-9ec57cf83587',61,NULL,'Mystery','2023-08-30 23:09:58','2023-08-30 23:09:58','The Mansion Mystery','Detective Smith stared at the crime scene, trying to make sense of the clues. It was a dark and stormy night, and the old mansion was shrouded in mystery. He knew this case would test his skills like never before.'),(29,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',62,NULL,'Science Fiction','2023-08-30 23:09:58','2023-08-30 23:09:58','The Colonization of Mars','In the year 3025, humans had colonized Mars. Advanced technology had made it possible for humans to build thriving cities on the Red Planet. John, a brilliant scientist, was working on a project to terraform Mars and make it habitable for future generations.'),(30,'3f52aa34-dbf9-42e4-977f-eedae1332e3a',63,NULL,'Fantasy','2023-08-30 23:09:58','2023-08-30 23:09:58','The Magical Forest','Once upon a time in a magical forest, there lived a wise old wizard named Merlin. He had a long white beard and a pointed hat, and his cottage was hidden deep within the woods. Merlin was known throughout the land for his incredible knowledge of spells and potions.'),(31,'a5c40a68-9c22-429e-8f61-274b82694764',64,NULL,'Adventure','2023-08-30 23:09:58','2023-08-30 23:09:58','The Knight\'s Quest','Once upon a time, in a land far away, there was a brave knight named Sir Arthur. He embarked on a quest to rescue a captured princess from the clutches of a fearsome dragon.'),(32,'7f06d8a2-8ff5-4c2b-9e46-59f212a59851',65,NULL,'Romance','2023-08-30 23:09:58','2023-08-30 23:09:58','Sunset Dreams','In a quiet village by the sea, a young artist named Emily painted the most beautiful sunsets. Her art captured the hearts of all who saw it and brought joy to her fellow villagers.'),(33,'90b01bc1-56f9-4cc4-9099-7a4e990ed9e9',66,NULL,'Drama','2023-08-30 23:09:58','2023-08-30 23:09:58','Cross-Country Adventure','In the bustling city of New York, a group of friends embarked on a road trip of a lifetime. Their adventures took them from the bright lights of Times Square to the serene beauty of the Grand Canyon.'),(34,'f3b60b9f-5ad0-4be0-8654-dab3b56f147e',67,NULL,'Drama','2023-08-30 23:09:58','2023-08-30 23:09:58','Culinary Delights','In the heart of Paris, a talented chef named Sophie prepared exquisite dishes that delighted diners from around the world. Her culinary creations were a symphony of flavors that left a lasting impression.'),(35,'847fc65a-783d-47c1-b7f2-fad4f313a924',68,NULL,'Fantasy','2023-08-30 23:09:58','2023-08-30 23:09:58','The Sorcerer\'s Quest','In a world filled with magic, a young sorcerer named Liam embarked on a quest to unlock the secrets of an ancient spell. His journey led him to hidden realms and unimaginable challenges.'),(36,'05f9ff87-90e6-41c2-bb4d-6a4be0c582ae',69,NULL,'Drama','2023-08-30 23:09:58','2023-08-30 23:09:58','Behind the Scenes','On the set of a blockbuster film, director Mia worked tirelessly to bring a story to life. Her vision and dedication transformed the script into a cinematic masterpiece.'),(37,'c64d5a80-9c3e-4620-8c94-b4b74580e2a2',70,NULL,'Science Fiction','2023-08-30 23:09:58','2023-08-30 23:09:58','Galactic Explorers','In a distant galaxy, a spaceship named Seraphim embarked on a journey to explore uncharted worlds. Captain Noah and his crew encountered strange creatures and unraveled cosmic mysteries.'),(38,'462d201a-a46c-40ac-a55c-7c848ef767ef',64,'Intrigue',NULL,'2023-08-30 23:09:58','2023-08-30 23:09:58','My Fantasy Story','In the land of dreams, where adventures take flight,\n               A world of magic and mystery, in the soft moonlight.\n               Intrigue fills the air, as the plot unwinds,\n               My curiosity awakened, in these dreamy confines.\n               Mysterious paths and riddles, leading far and wide,\n               In this realm of enigma, where secrets do hide.'),(39,'462d201a-a46c-40ac-a55c-7c848ef767ef',65,'Indignation',NULL,'2023-08-30 23:09:58','2023-08-30 23:09:58','My Fantasy Story','In the realm of nightmares, where shadows creep,\n               A world of darkness and fear, in the silence, so deep.\n               Indignation ignites, as injustice takes its toll,\n               My anger burns within, as I fight to gain control.\n               Injustices and battles, in this eerie night,\n               In this world of fury, where I choose to fight.'),(40,'462d201a-a46c-40ac-a55c-7c848ef767ef',66,'Nostalgia',NULL,'2023-08-30 23:09:58','2023-08-30 23:09:58','My Fantasy Story','In the realm of memories, where echoes resound,\n               A world of nostalgia, where the past is found.\n               Nostalgia lingers in the air, as I reminisce,\n               My heart aches with longing, for the moments I miss.\n               Memories and tears, intertwined so tight,\n               In this world of yesteryears, where emotions take flight.'),(41,'462d201a-a46c-40ac-a55c-7c848ef767ef',67,'Rage',NULL,'2023-08-30 23:09:58','2023-08-30 23:09:58','My Fantasy Story','In the realm of anger, where fury does rise,\n               A world of rage and fire, where vengeance lies.\n               Rage consumes the heart, as I seek retribution,\n               My wrath unrelenting, in this furious resolution.\n               Conflict and battles, in this fierce fight,\n               In this world of fury, where I choose to smite.'),(42,'462d201a-a46c-40ac-a55c-7c848ef767ef',68,'Silly',NULL,'2023-08-30 23:09:58','2023-08-30 23:09:58','My Fantasy Story','In the realm of ecstasy, where joy takes its reign,\n               A world of rapture and bliss, without a hint of pain.\n               Rapture fills the senses, as I dance with glee,\n               My heart overflows, in this moment of ecstasy.\n               Laughter and delight, in this joyful night,\n               In this world of happiness, where everything is bright.'),(43,'462d201a-a46c-40ac-a55c-7c848ef767ef',69,'Revulsion',NULL,'2023-08-30 23:09:58','2023-08-30 23:09:58','My Fantasy Story','In the realm of disgust, where repulsion resides,\n               A world of revulsion and loathing, where darkness abides.\n               Revulsion twists the gut, as I turn away in disdain,\n               My senses overwhelmed, by this revolting bane.\n               Horror and disgust, in this dreadful plight,\n               In this world of repulsion, where I shun from sight.'),(56,'70e9e760-45ec-4fe7-a405-9ec57cf83587',69,NULL,'Mystery','2023-09-01 16:23:49','2023-09-01 16:23:49','The Mansion Mystery','His gloved hand carefully lifted a tarnished silver locket from the floor, a glint of moonlight revealing an engraved initial. The scent of old books mingled with the unmistakable metallic tang of fear. The scene told a story of struggle, a silent witness to a battle fought in the depths of the night.\n\nSmith\'s mind raced, connecting invisible threads between the scattered clues. A torn letter lay discarded on an antique desk, its fragments hinting at a forbidden romance. He traced the edges of a shattered vase, a mosaic of shattered dreams mirroring the shattered glass.\n\nAs thunder rumbled outside, he paced the room, lost in thought. The storm\'s fury echoed the turmoil within him. He knew this case was unlike any other. The puzzle before him was intricate, the players enigmatic, and the stakes higher than ever. The mansion seemed to mock him, its grandeur masking the twisted minds that had inhabited its corridors.'),(57,'70e9e760-45ec-4fe7-a405-9ec57cf83587',61,NULL,'Mystery','2023-09-01 16:28:03','2023-09-01 16:28:03','The Mansion Mystery','A flash of lightning briefly illuminated a hidden compartment in the wall. Smith\'s heart quickened as he uncovered a set of faded photographs. Faces from another era stared back at him, their expressions a mix of joy and melancholy. Each photograph held a story, a chapter in the mansion\'s enigmatic history.\n\nDrawing his coat tighter around him, Smith vowed to peel back the layers of secrecy, to shine a light on the shadows that had festered within the mansion\'s walls. He knew that beneath the stormy surface, a tempest of human desires and frailties churned.\n\nWith a resolute breath, he stepped further into the heart of the mystery, the weight of history and justice heavy upon his shoulders. Detective Smith was determined to bring clarity to the chaos, to restore order where darkness had thrived, and to ensure that the mansion\'s secrets would finally find their voice in the light of truth.'),(58,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',61,NULL,'Science Fiction','2023-09-01 17:29:15','2023-09-01 17:29:15','The Colonization of Mars','\nJohn\'s dedication to the terraforming project was unwavering. He spent countless hours in his state-of-the-art laboratory, poring over data and simulations, determined to crack the code of making Mars a hospitable environment. He had the support of the entire scientific community and access to cutting-edge technology, including advanced atmospheric processors and genetic engineering techniques. The key challenge was to thicken the Martian atmosphere and create a stable ecosystem that could sustain human life.\n\nWith each breakthrough, John\'s excitement grew. He successfully developed a series of genetically modified plants capable of thriving in Mars\' harsh conditions, slowly releasing oxygen and absorbing carbon dioxide. These plants, known as \"Marsian Greens,\" covered vast tracts of the Martian surface, turning it from barren red to a vibrant green. As the oxygen levels began to rise, John\'s dream of a self-sustaining Martian biosphere felt more attainable than ever before.\n\nHowever, challenges loomed on the horizon. The process of terraforming Mars was a delicate balance of science and ethics. The planet had its own unique ecosystem, albeit a simple one, and some argued that introducing Earth life could have unintended consequences. John found himself at the center of heated debates about the potential impact on native Martian microbes and the long-term stability of the transformed environment. Striking the right balance between preserving Mars\' original character and creating a suitable home for humans became a moral dilemma that weighed heavily on his shoulders.'),(59,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',61,NULL,'Science Fiction','2023-09-01 17:30:18','2023-09-01 17:30:18','The Colonization of Mars','Despite the ethical debates, John remained resolute in his belief that humanity could learn from its past mistakes and tread carefully while reshaping a new world. The progress he and his team made in terraforming technology was unprecedented, offering a glimmer of hope for the future of Mars as a second home for humanity. With determination in his heart and a vision of a thriving, habitable Martian landscape, John continued to push the boundaries of science, bringing the dream of a new frontier closer to reality with each passing day.'),(60,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',61,NULL,'Science Fiction','2023-09-01 17:36:11','2023-09-01 17:36:11','The Colonization of Mars','Despite the ethical debates, John remained resolute in his belief that humanity could learn from its past mistakes and tread carefully while reshaping a new world. The progress he and his team made in terraforming technology was unprecedented, offering a glimmer of hope for the future of Mars as a second home for humanity. With determination in his heart and a vision of a thriving, habitable Martian landscape, John continued to push the boundaries of science, bringing the dream of a new frontier closer to reality with each passing day.'),(61,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',61,NULL,'Science Fiction','2023-09-01 17:36:35','2023-09-01 17:36:35','The Colonization of Mars','Despite the ethical debates, John remained resolute in his belief that humanity could learn from its past mistakes and tread carefully while reshaping a new world. The progress he and his team made in terraforming technology was unprecedented, offering a glimmer of hope for the future of Mars as a second home for humanity. With determination in his heart and a vision of a thriving, habitable Martian landscape, John continued to push the boundaries of science, bringing the dream of a new frontier closer to reality with each passing day.'),(62,'a5c40a68-9c22-429e-8f61-274b82694764',63,NULL,'Adventure','2023-09-01 17:37:38','2023-09-01 17:37:38','The Knight\'s Quest','Sir Arthur\'s journey led him through dense forests, treacherous mountains, and mystical valleys. Along the way, he encountered magical creatures that tested his courage and wit. Armed with his trusty sword and unwavering determination, he overcame each challenge.\n\nFinally, he reached the lair of the fearsome dragon. The ground shook as the dragon roared, its fiery breath lighting up the cavern. Undeterred, Sir Arthur stepped forward, ready to face the beast. With every swing of his sword, he dodged the dragon\'s flames and struck back with precision.\n\nAs the battle raged on, the princess watched from her cage, her hope rekindled by Sir Arthur\'s bravery. Seeing an opportunity, she used a hidden tool to unlock the cage. Just as the dragon was about to unleash its most devastating attack, the princess dashed out and handed Sir Arthur a shining shield.\n\nWith newfound strength, Sir Arthur defended against the dragon\'s fiery onslaught. The shield\'s magic absorbed the flames and channeled the energy into his sword. With a mighty blow, he pierced the dragon\'s heart, ending its reign of terror. The dragon let out a final, mournful cry before collapsing.\n\nExhausted but victorious, Sir Arthur and the princess emerged from the dragon\'s lair. Grateful for his heroism, the princess thanked him and shared tales of her own courage during captivity. They returned to the kingdom, where celebrations erupted to honor their triumph over adversity.\n\nSir Arthur\'s quest had not only saved the princess but also united the kingdom. His tale became a legend, inspiring generations to come. He had proven that bravery, determination, and the support of unlikely allies could overcome even the most formidable challenges. And so, in the land far away, the legacy of Sir Arthur lived on, reminding all that within every heart beats the spirit of a true hero.'),(63,'90b01bc1-56f9-4cc4-9099-7a4e990ed9e9',63,NULL,'Drama','2023-09-01 17:38:21','2023-09-01 17:38:21','Cross-Country Adventure','Leaving the city behind, the group of friends set off in their trusty van, excitement in the air. The road trip was a mix of laughter, singing along to their favorite tunes, and spontaneous detours to explore hidden gems along the way. Their first stop was Philadelphia, where they indulged in cheesesteaks and explored historic landmarks.\n\nContinuing west, the friends marveled at the changing landscapes outside their windows. They camped under the starry skies, sharing stories around a crackling campfire. As they neared the Grand Canyon, anticipation built, and when they finally arrived, they were left in awe of the breathtaking expanse before them.\n\nDays turned into nights as they hiked along the canyon\'s rim, capturing stunning photographs and making memories that would last a lifetime. They even met fellow travelers and exchanged tales of their journeys, forging connections that transcended geographic boundaries.'),(64,'05f9ff87-90e6-41c2-bb4d-6a4be0c582ae',63,NULL,'Drama','2023-09-01 17:38:30','2023-09-01 17:38:30','Behind the Scenes','Leaving the city behind, the group of friends set off in their trusty van, excitement in the air. The road trip was a mix of laughter, singing along to their favorite tunes, and spontaneous detours to explore hidden gems along the way. Their first stop was Philadelphia, where they indulged in cheesesteaks and explored historic landmarks.\n\nContinuing west, the friends marveled at the changing landscapes outside their windows. They camped under the starry skies, sharing stories around a crackling campfire. As they neared the Grand Canyon, anticipation built, and when they finally arrived, they were left in awe of the breathtaking expanse before them.\n\nDays turned into nights as they hiked along the canyon\'s rim, capturing stunning photographs and making memories that would last a lifetime. They even met fellow travelers and exchanged tales of their journeys, forging connections that transcended geographic boundaries.'),(65,'462d201a-a46c-40ac-a55c-7c848ef767ef',63,'Silly',NULL,'2023-09-01 17:38:40','2023-09-01 17:38:40','My Fantasy Story','Leaving the city behind, the group of friends set off in their trusty van, excitement in the air. The road trip was a mix of laughter, singing along to their favorite tunes, and spontaneous detours to explore hidden gems along the way. Their first stop was Philadelphia, where they indulged in cheesesteaks and explored historic landmarks.\n\nContinuing west, the friends marveled at the changing landscapes outside their windows. They camped under the starry skies, sharing stories around a crackling campfire. As they neared the Grand Canyon, anticipation built, and when they finally arrived, they were left in awe of the breathtaking expanse before them.\n\nDays turned into nights as they hiked along the canyon\'s rim, capturing stunning photographs and making memories that would last a lifetime. They even met fellow travelers and exchanged tales of their journeys, forging connections that transcended geographic boundaries.'),(66,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',64,NULL,'Science Fiction','2023-09-01 17:39:05','2023-09-01 17:39:05','The Colonization of Mars','Leaving the city behind, the group of friends set off in their trusty van, excitement in the air. The road trip was a mix of laughter, singing along to their favorite tunes, and spontaneous detours to explore hidden gems along the way. Their first stop was Philadelphia, where they indulged in cheesesteaks and explored historic landmarks.\n\nContinuing west, the friends marveled at the changing landscapes outside their windows. They camped under the starry skies, sharing stories around a crackling campfire. As they neared the Grand Canyon, anticipation built, and when they finally arrived, they were left in awe of the breathtaking expanse before them.\n\nDays turned into nights as they hiked along the canyon\'s rim, capturing stunning photographs and making memories that would last a lifetime. They even met fellow travelers and exchanged tales of their journeys, forging connections that transcended geographic boundaries.'),(67,'90b01bc1-56f9-4cc4-9099-7a4e990ed9e9',64,NULL,'Drama','2023-09-01 17:39:12','2023-09-01 17:39:12','Cross-Country Adventure','Leaving the city behind, the group of friends set off in their trusty van, excitement in the air. The road trip was a mix of laughter, singing along to their favorite tunes, and spontaneous detours to explore hidden gems along the way. Their first stop was Philadelphia, where they indulged in cheesesteaks and explored historic landmarks.\n\nContinuing west, the friends marveled at the changing landscapes outside their windows. They camped under the starry skies, sharing stories around a crackling campfire. As they neared the Grand Canyon, anticipation built, and when they finally arrived, they were left in awe of the breathtaking expanse before them.\n\nDays turned into nights as they hiked along the canyon\'s rim, capturing stunning photographs and making memories that would last a lifetime. They even met fellow travelers and exchanged tales of their journeys, forging connections that transcended geographic boundaries.'),(68,'90b01bc1-56f9-4cc4-9099-7a4e990ed9e9',64,NULL,'Drama','2023-09-01 17:39:22','2023-09-01 17:39:22','Cross-Country Adventure','Leaving the city behind, the group of friends set off in their trusty van, excitement in the air. The road trip was a mix of laughter, singing along to their favorite tunes, and spontaneous detours to explore hidden gems along the way. Their first stop was Philadelphia, where they indulged in cheesesteaks and explored historic landmarks.\n\nContinuing west, the friends marveled at the changing landscapes outside their windows. They camped under the starry skies, sharing stories around a crackling campfire. As they neared the Grand Canyon, anticipation built, and when they finally arrived, they were left in awe of the breathtaking expanse before them.\n\nDays turned into nights as they hiked along the canyon\'s rim, capturing stunning photographs and making memories that would last a lifetime. They even met fellow travelers and exchanged tales of their journeys, forging connections that transcended geographic boundaries.'),(69,'70e9e760-45ec-4fe7-a405-9ec57cf83587',61,NULL,'Mystery','2023-09-01 21:39:04','2023-09-01 21:39:04','The Mansion Mystery','Detective Smith stared at the crime scene, trying to make sense of the clues. It was a dark and stormy night, and the old mansion was shrouded in mystery. He knew this case would test his skills like never before.'),(70,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',62,NULL,'Science Fiction','2023-09-01 21:39:04','2023-09-01 21:39:04','The Colonization of Mars','In the year 3025, humans had colonized Mars. Advanced technology had made it possible for humans to build thriving cities on the Red Planet. John, a brilliant scientist, was working on a project to terraform Mars and make it habitable for future generations.'),(71,'3f52aa34-dbf9-42e4-977f-eedae1332e3a',63,NULL,'Fantasy','2023-09-01 21:39:04','2023-09-01 21:39:04','The Magical Forest','Once upon a time in a magical forest, there lived a wise old wizard named Merlin. He had a long white beard and a pointed hat, and his cottage was hidden deep within the woods. Merlin was known throughout the land for his incredible knowledge of spells and potions.'),(72,'a5c40a68-9c22-429e-8f61-274b82694764',64,NULL,'Adventure','2023-09-01 21:39:04','2023-09-01 21:39:04','The Knight\'s Quest','Once upon a time, in a land far away, there was a brave knight named Sir Arthur. He embarked on a quest to rescue a captured princess from the clutches of a fearsome dragon.'),(73,'7f06d8a2-8ff5-4c2b-9e46-59f212a59851',65,NULL,'Romance','2023-09-01 21:39:04','2023-09-01 21:39:04','Sunset Dreams','In a quiet village by the sea, a young artist named Emily painted the most beautiful sunsets. Her art captured the hearts of all who saw it and brought joy to her fellow villagers.'),(74,'90b01bc1-56f9-4cc4-9099-7a4e990ed9e9',66,NULL,'Drama','2023-09-01 21:39:04','2023-09-01 21:39:04','Cross-Country Adventure','In the bustling city of New York, a group of friends embarked on a road trip of a lifetime. Their adventures took them from the bright lights of Times Square to the serene beauty of the Grand Canyon.'),(75,'f3b60b9f-5ad0-4be0-8654-dab3b56f147e',67,NULL,'Drama','2023-09-01 21:39:04','2023-09-01 21:39:04','Culinary Delights','In the heart of Paris, a talented chef named Sophie prepared exquisite dishes that delighted diners from around the world. Her culinary creations were a symphony of flavors that left a lasting impression.'),(76,'847fc65a-783d-47c1-b7f2-fad4f313a924',68,NULL,'Fantasy','2023-09-01 21:39:04','2023-09-01 21:39:04','The Sorcerer\'s Quest','In a world filled with magic, a young sorcerer named Liam embarked on a quest to unlock the secrets of an ancient spell. His journey led him to hidden realms and unimaginable challenges.'),(77,'05f9ff87-90e6-41c2-bb4d-6a4be0c582ae',69,NULL,'Drama','2023-09-01 21:39:04','2023-09-01 21:39:04','Behind the Scenes','On the set of a blockbuster film, director Mia worked tirelessly to bring a story to life. Her vision and dedication transformed the script into a cinematic masterpiece.'),(78,'c64d5a80-9c3e-4620-8c94-b4b74580e2a2',70,NULL,'Science Fiction','2023-09-01 21:39:04','2023-09-01 21:39:04','Galactic Explorers','In a distant galaxy, a spaceship named Seraphim embarked on a journey to explore uncharted worlds. Captain Noah and his crew encountered strange creatures and unraveled cosmic mysteries.'),(79,'462d201a-a46c-40ac-a55c-7c848ef767ef',64,'Intrigue',NULL,'2023-09-01 21:39:04','2023-09-01 21:39:04','My Fantasy Story','In the land of dreams, where adventures take flight,\n               A world of magic and mystery, in the soft moonlight.\n               Intrigue fills the air, as the plot unwinds,\n               My curiosity awakened, in these dreamy confines.\n               Mysterious paths and riddles, leading far and wide,\n               In this realm of enigma, where secrets do hide.'),(80,'462d201a-a46c-40ac-a55c-7c848ef767ef',65,'Indignation',NULL,'2023-09-01 21:39:04','2023-09-01 21:39:04','My Fantasy Story','In the realm of nightmares, where shadows creep,\n               A world of darkness and fear, in the silence, so deep.\n               Indignation ignites, as injustice takes its toll,\n               My anger burns within, as I fight to gain control.\n               Injustices and battles, in this eerie night,\n               In this world of fury, where I choose to fight.'),(81,'462d201a-a46c-40ac-a55c-7c848ef767ef',66,'Nostalgia',NULL,'2023-09-01 21:39:04','2023-09-01 21:39:04','My Fantasy Story','In the realm of memories, where echoes resound,\n               A world of nostalgia, where the past is found.\n               Nostalgia lingers in the air, as I reminisce,\n               My heart aches with longing, for the moments I miss.\n               Memories and tears, intertwined so tight,\n               In this world of yesteryears, where emotions take flight.'),(82,'462d201a-a46c-40ac-a55c-7c848ef767ef',67,'Rage',NULL,'2023-09-01 21:39:04','2023-09-01 21:39:04','My Fantasy Story','In the realm of anger, where fury does rise,\n               A world of rage and fire, where vengeance lies.\n               Rage consumes the heart, as I seek retribution,\n               My wrath unrelenting, in this furious resolution.\n               Conflict and battles, in this fierce fight,\n               In this world of fury, where I choose to smite.'),(83,'462d201a-a46c-40ac-a55c-7c848ef767ef',68,'Silly',NULL,'2023-09-01 21:39:04','2023-09-01 21:39:04','My Fantasy Story','In the realm of ecstasy, where joy takes its reign,\n               A world of rapture and bliss, without a hint of pain.\n               Rapture fills the senses, as I dance with glee,\n               My heart overflows, in this moment of ecstasy.\n               Laughter and delight, in this joyful night,\n               In this world of happiness, where everything is bright.'),(84,'462d201a-a46c-40ac-a55c-7c848ef767ef',69,'Revulsion',NULL,'2023-09-01 21:39:04','2023-09-01 21:39:04','My Fantasy Story','In the realm of disgust, where repulsion resides,\n               A world of revulsion and loathing, where darkness abides.\n               Revulsion twists the gut, as I turn away in disdain,\n               My senses overwhelmed, by this revolting bane.\n               Horror and disgust, in this dreadful plight,\n               In this world of repulsion, where I shun from sight.'),(85,'70e9e760-45ec-4fe7-a405-9ec57cf83587',61,NULL,'Mystery','2023-09-01 21:42:08','2023-09-01 21:42:08','The Mansion Mystery','Detective Smith stared at the crime scene, trying to make sense of the clues. It was a dark and stormy night, and the old mansion was shrouded in mystery. He knew this case would test his skills like never before.'),(86,'38dbbd48-720d-4f71-94e3-6c1c4860e0f2',62,NULL,'Science Fiction','2023-09-01 21:42:08','2023-09-01 21:42:08','The Colonization of Mars','In the year 3025, humans had colonized Mars. Advanced technology had made it possible for humans to build thriving cities on the Red Planet. John, a brilliant scientist, was working on a project to terraform Mars and make it habitable for future generations.'),(87,'3f52aa34-dbf9-42e4-977f-eedae1332e3a',63,NULL,'Fantasy','2023-09-01 21:42:08','2023-09-01 21:42:08','The Magical Forest','Once upon a time in a magical forest, there lived a wise old wizard named Merlin. He had a long white beard and a pointed hat, and his cottage was hidden deep within the woods. Merlin was known throughout the land for his incredible knowledge of spells and potions.'),(88,'a5c40a68-9c22-429e-8f61-274b82694764',64,NULL,'Adventure','2023-09-01 21:42:08','2023-09-01 21:42:08','The Knight\'s Quest','Once upon a time, in a land far away, there was a brave knight named Sir Arthur. He embarked on a quest to rescue a captured princess from the clutches of a fearsome dragon.'),(89,'7f06d8a2-8ff5-4c2b-9e46-59f212a59851',65,NULL,'Romance','2023-09-01 21:42:08','2023-09-01 21:42:08','Sunset Dreams','In a quiet village by the sea, a young artist named Emily painted the most beautiful sunsets. Her art captured the hearts of all who saw it and brought joy to her fellow villagers.'),(90,'90b01bc1-56f9-4cc4-9099-7a4e990ed9e9',66,NULL,'Drama','2023-09-01 21:42:08','2023-09-01 21:42:08','Cross-Country Adventure','In the bustling city of New York, a group of friends embarked on a road trip of a lifetime. Their adventures took them from the bright lights of Times Square to the serene beauty of the Grand Canyon.'),(91,'f3b60b9f-5ad0-4be0-8654-dab3b56f147e',67,NULL,'Drama','2023-09-01 21:42:08','2023-09-01 21:42:08','Culinary Delights','In the heart of Paris, a talented chef named Sophie prepared exquisite dishes that delighted diners from around the world. Her culinary creations were a symphony of flavors that left a lasting impression.'),(92,'847fc65a-783d-47c1-b7f2-fad4f313a924',68,NULL,'Fantasy','2023-09-01 21:42:08','2023-09-01 21:42:08','The Sorcerer\'s Quest','In a world filled with magic, a young sorcerer named Liam embarked on a quest to unlock the secrets of an ancient spell. His journey led him to hidden realms and unimaginable challenges.'),(93,'05f9ff87-90e6-41c2-bb4d-6a4be0c582ae',69,NULL,'Drama','2023-09-01 21:42:08','2023-09-01 21:42:08','Behind the Scenes','On the set of a blockbuster film, director Mia worked tirelessly to bring a story to life. Her vision and dedication transformed the script into a cinematic masterpiece.'),(94,'c64d5a80-9c3e-4620-8c94-b4b74580e2a2',70,NULL,'Science Fiction','2023-09-01 21:42:08','2023-09-01 21:42:08','Galactic Explorers','In a distant galaxy, a spaceship named Seraphim embarked on a journey to explore uncharted worlds. Captain Noah and his crew encountered strange creatures and unraveled cosmic mysteries.'),(95,'462d201a-a46c-40ac-a55c-7c848ef767ef',64,'Intrigue',NULL,'2023-09-01 21:42:08','2023-09-01 21:42:08','Open That Heart','In the land of dreams, where adventures take flight,\n               A world of magic and mystery, in the soft moonlight.\n               Intrigue fills the air, as the plot unwinds,\n               My curiosity awakened, in these dreamy confines.\n               Mysterious paths and riddles, leading far and wide,\n               In this realm of enigma, where secrets do hide.'),(96,'462d201a-a46c-40ac-a55c-7c848ef767ef',65,'Indignation',NULL,'2023-09-01 21:42:08','2023-09-01 21:42:08','Be Not Yourself','In the realm of nightmares, where shadows creep,\n               A world of darkness and fear, in the silence, so deep.\n               Indignation ignites, as injustice takes its toll,\n               My anger burns within, as I fight to gain control.\n               Injustices and battles, in this eerie night,\n               In this world of fury, where I choose to fight.'),(97,'462d201a-a46c-40ac-a55c-7c848ef767ef',66,'Nostalgia',NULL,'2023-09-01 21:42:08','2023-09-01 21:42:08','Them','In the realm of memories, where echoes resound,\n               A world of nostalgia, where the past is found.\n               Nostalgia lingers in the air, as I reminisce,\n               My heart aches with longing, for the moments I miss.\n               Memories and tears, intertwined so tight,\n               In this world of yesteryears, where emotions take flight.'),(98,'462d201a-a46c-40ac-a55c-7c848ef767ef',67,'Rage',NULL,'2023-09-01 21:42:08','2023-09-01 21:42:08','Never Going Back','In the realm of anger, where fury does rise,\n               A world of rage and fire, where vengeance lies.\n               Rage consumes the heart, as I seek retribution,\n               My wrath unrelenting, in this furious resolution.\n               Conflict and battles, in this fierce fight,\n               In this world of fury, where I choose to smite.'),(99,'462d201a-a46c-40ac-a55c-7c848ef767ef',68,'Silly',NULL,'2023-09-01 21:42:08','2023-09-01 21:42:08','I find Myself Again','In the realm of ecstasy, where joy takes its reign,\n               A world of rapture and bliss, without a hint of pain.\n               Rapture fills the senses, as I dance with glee,\n               My heart overflows, in this moment of ecstasy.\n               Laughter and delight, in this joyful night,\n               In this world of happiness, where everything is bright.'),(100,'462d201a-a46c-40ac-a55c-7c848ef767ef',69,'Revulsion',NULL,'2023-09-01 21:42:08','2023-09-01 21:42:08','Dirt in The Soul','In the realm of disgust, where repulsion resides,\n               A world of revulsion and loathing, where darkness abides.\n               Revulsion twists the gut, as I turn away in disdain,\n               My senses overwhelmed, by this revolting bane.\n               Horror and disgust, in this dreadful plight,\n               In this world of repulsion, where I shun from sight.');
/*!40000 ALTER TABLE `story_contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL DEFAULT 'default_username',
  `githubId` varchar(30) DEFAULT NULL,
  `googleId` varchar(30) DEFAULT NULL,
  `facebookId` varchar(30) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `email` varchar(30) NOT NULL DEFAULT 'default@email.com',
  `first_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `pen_first_name` varchar(50) DEFAULT NULL,
  `pen_last_name` varchar(50) DEFAULT NULL,
  `bio` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `links` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_googleid_unique` (`googleId`),
  UNIQUE KEY `users_facebookid_unique` (`facebookId`)
) ENGINE=InnoDB AUTO_INCREMENT=372 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (61,'janesmith',NULL,NULL,NULL,NULL,'password2','user2@example.com','Jane','Smith','Peter','Johnson','Novelist weaving tales of mystery and intrigue that keep readers on the edge of their seats.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\", \"https://facebook.com/user1\", \"https://linkedin.com/in/user2\"]'),(62,'Penelopedrake',NULL,NULL,NULL,NULL,'password1','user1@example.com','John','Doe','Penelope','Drake','Poet with a heart full of emotions and a pen dipped in ink.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\", \"https://linkedin.com/in/user2\"]'),(63,'oliviasmith',NULL,NULL,NULL,NULL,'password3','user3@example.com','Robert','Johnson','Olivia','Smith','Wordsmith crafting eloquent prose that touches hearts and minds.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\", \"https://facebook.com/user1\", \"https://linkedin.com/in/user2\"]'),(64,'emilybrown',NULL,NULL,NULL,NULL,'password4','user4@example.com','Emily','Brown','Ethan','Davis','Author of children\'s books, bringing joy and laughter to young readers.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\", \"https://linkedin.com/in/user2\"]'),(65,'sophinaclarke',NULL,NULL,NULL,NULL,'password5','user5@example.com','Michael','Miller','Sophia','Clark','Dedicated journalist on a mission to uncover the truth and share untold stories.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://facebook.com/user1\", \"https://twitter.com/user2\", \"https://linkedin.com/in/user2\"]'),(66,'avarodriquez',NULL,NULL,NULL,NULL,'password6','user6@example.com','William','Wilson','Ava','Rodriguez','Romance writer creating tales of love that transport readers to far-off places.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\"]'),(67,'liammartinez',NULL,NULL,NULL,NULL,'password7','user7@example.com','Elizabeth','Taylor','Liam','Martinez','Scriptwriter for film and television, breathing life into unforgettable characters.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://facebook.com/user1\", \"https://twitter.com/user2\", \"https://linkedin.com/in/user2\"]'),(68,'miamatinez',NULL,NULL,NULL,NULL,'password8','user8@example.com','David','Anderson','Mia','Martinez','Passionate writer exploring the realms of fantasy and science fiction.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\", \"https://facebook.com/user1\", \"https://linkedin.com/in/user2\"]'),(69,'noahwilson',NULL,NULL,NULL,NULL,'password9','user9@example.com','Sarah','Thomas','Noah','Wilson','Literary explorer delving into the depths of human nature through thought-provoking essays.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\", \"https://linkedin.com/in/user2\"]'),(70,'isabellahall',NULL,NULL,NULL,NULL,'password10','user10@example.com','James','Jackson','Isabella','Hall','Blogger sharing insights, experiences, and musings on life\'s journey.','2023-09-01 21:42:08','2023-09-01 21:42:08','[\"https://twitter.com/user2\", \"https://linkedin.com/in/user2\", \"https://facebook.com/user1\"]'),(371,'jrwriter',NULL,NULL,NULL,NULL,'$2b$10$/Afrorf6yBf4bCT5CZ9u4ueAypj4Q6NUxWprG4wfe/IWMJCrxWpJ.','jon@email.com','Jon','Rix','JR','Writer','I\'m a passionate writer with a love for storytelling. My goal is to inspire and entertain readers with my words.','2023-09-01 23:13:03','2023-09-01 23:13:03',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-02 11:11:11
