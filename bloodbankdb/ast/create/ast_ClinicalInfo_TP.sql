DROP TABLE IF EXISTS `ast_ClinicalInfo_TP`;

CREATE TABLE `ast_ClinicalInfo_TP` ( `donorVisitId` VARCHAR(256) NOT NULL, `clinicalInfoId` VARCHAR(256) NOT NULL, `height` VARCHAR(256) NOT NULL, `weight` FLOAT(14,4) NOT NULL, `temperature` INT(10) NOT NULL, `bp` FLOAT(14,4) NOT NULL, `pulse` INT(10) NOT NULL, `unitsOfBlood` INT(10) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATETIME NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATETIME NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`clinicalInfoId`));

