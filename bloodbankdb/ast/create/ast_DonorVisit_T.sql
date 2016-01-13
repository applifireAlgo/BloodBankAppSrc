DROP TABLE IF EXISTS `ast_DonorVisit_T`;

CREATE TABLE `ast_DonorVisit_T` ( `donorVisitId` VARCHAR(256) NOT NULL, `orgnizerName` VARCHAR(256) NOT NULL, `campId` VARCHAR(256) NOT NULL, `donor` VARCHAR(256) NOT NULL, `donationType` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATETIME NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATETIME NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`donorVisitId`));

