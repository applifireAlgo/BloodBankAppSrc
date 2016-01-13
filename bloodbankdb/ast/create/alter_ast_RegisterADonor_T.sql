

ALTER TABLE `ast_RegisterADonor_T` ADD CONSTRAINT FOREIGN KEY (`bloodGroup`) REFERENCES `ast_BloodGroup_M`(`bloodGroupId`);



ALTER TABLE `ast_RegisterADonor_T` ADD CONSTRAINT FOREIGN KEY (`address`) REFERENCES `ast_Address_T`(`addressId`);



ALTER TABLE `ast_RegisterADonor_T` ADD CONSTRAINT FOREIGN KEY (`gender`) REFERENCES `ast_Gender_M`(`genderId`);

