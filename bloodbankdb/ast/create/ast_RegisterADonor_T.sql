DROP TABLE IF EXISTS `ast_RegisterADonor_T`;

CREATE TABLE `ast_RegisterADonor_T` ( `registerADonorId` VARCHAR(256) NOT NULL, `donorName` VARCHAR(256) NOT NULL, `dateOfBirth` DATETIME NOT NULL, `phoneNo` VARCHAR(256) NOT NULL, `emailId` VARCHAR(256) NOT NULL, `lastDonationDate` DATETIME NOT NULL, `howoftenyoudonatedinpast` INT(10) NOT NULL, `gender` VARCHAR(64) NOT NULL, `bloodGroup` VARCHAR(256) NOT NULL, `address` VARCHAR(64) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATETIME NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATETIME NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`registerADonorId`));

