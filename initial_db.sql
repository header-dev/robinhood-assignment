CREATE DATABASE IF NOT EXISTS `db_robinhood`;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO users
(id, name, email, createdAt, updatedAt)
VALUES(1, 'โรบินฮู้ด', 'user1@robinhood.co.th', '2023-05-17 11:16:45.231004000', '2023-05-17 11:16:45.231004000');


CREATE TABLE IF NOT EXISTS `appointments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `description` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdBy` int(11) DEFAULT NULL,
  `status` enum('TO_DO','IN_PROGRESS','DONE') NOT NULL DEFAULT 'TO_DO',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

INSERT INTO appointments
(id, description, createdAt, updatedAt, createdBy, status)
VALUES(1, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry''s standard dummy text ever since the 1500s', '2023-05-17 12:34:53.792212000', '2023-05-20 04:57:48', 1, 'DONE');

CREATE TABLE IF NOT EXISTS `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdBy` int(11) DEFAULT NULL,
  `appointmentId` int(11) DEFAULT NULL,
  `message` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

INSERT INTO comments
(id, createdAt, updatedAt, createdBy, appointmentId, message)
VALUES(1, '2023-05-20 11:09:02', '2023-05-20 11:09:02', 1, 1, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');

INSERT INTO comments
(id, createdAt, updatedAt, createdBy, appointmentId, message)
VALUES(2, '2023-05-20 11:09:02', '2023-05-20 11:09:02', 1, 1, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');

INSERT INTO comments
(id, createdAt, updatedAt, createdBy, appointmentId, message)
VALUES(3, '2023-05-20 11:09:02', '2023-05-20 11:09:02', 1, 1, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.');
