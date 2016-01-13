

ALTER TABLE `ast_BloodRequest_T` ADD CONSTRAINT FOREIGN KEY (`bloodGroup`) REFERENCES `ast_BloodGroup_M`(`bloodGroupId`);

