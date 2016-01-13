

ALTER TABLE `ast_DonorVisit_T` ADD CONSTRAINT FOREIGN KEY (`campId`) REFERENCES `ast_RegisterACamp_T`(`registerACampId`);



ALTER TABLE `ast_DonorVisit_T` ADD CONSTRAINT FOREIGN KEY (`donationType`) REFERENCES `ast_DonationType_M`(`donationTypeId`);



ALTER TABLE `ast_DonorVisit_T` ADD CONSTRAINT FOREIGN KEY (`donor`) REFERENCES `ast_RegisterADonor_T`(`registerADonorId`);

