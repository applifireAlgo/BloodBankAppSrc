

ALTER TABLE `ast_BloodStock_M` ADD CONSTRAINT FOREIGN KEY (`bloodGroup`) REFERENCES `ast_BloodGroup_M`(`bloodGroupId`);

