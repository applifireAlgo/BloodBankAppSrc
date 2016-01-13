DROP TABLE IF EXISTS `ast_BloodRequest_T`;

CREATE TABLE `ast_BloodRequest_T` ( `bloodRequestId` VARCHAR(256) NOT NULL, `noOfUnits` INT(10) NOT NULL, `patientName` VARCHAR(256) NOT NULL, `requestedByDoctor` VARCHAR(256) NOT NULL, `requestedByHospital` VARCHAR(256) NOT NULL, `dateNeededBy` DATETIME NOT NULL, `dispatchedToPatientOnDT` DATETIME NOT NULL, `bloodGroup` VARCHAR(256) NOT NULL, `createdBy` VARCHAR(64) NULL DEFAULT '-1', `createdDate` DATETIME NULL DEFAULT '1900-01-01', `updatedBy` VARCHAR(64) NULL DEFAULT '-1', `updatedDate` DATETIME NULL DEFAULT '1900-01-01', `versionId` INT(11) NULL DEFAULT '-1', `activeStatus` INT(1) NULL DEFAULT '1', `txnAccessCode` INT(11) NULL DEFAULT NULL, PRIMARY KEY (`bloodRequestId`));

