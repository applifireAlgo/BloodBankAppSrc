DROP TABLE IF EXISTS `ast_BloodStock_M`;

CREATE TABLE `ast_BloodStock_M` ( `bloodStockId` VARCHAR(256) NOT NULL, `bloodGroup` VARCHAR(256) NOT NULL, `noOfUnits` INT(10) NOT NULL DEFAULT '0', `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATETIME NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATETIME NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`bloodStockId`));

