

ALTER TABLE `ast_RegisterDonorToCamp_M` ADD CONSTRAINT FOREIGN KEY (`camp`) REFERENCES `ast_RegisterACamp_T`(`registerACampId`);



ALTER TABLE `ast_RegisterDonorToCamp_M` ADD CONSTRAINT FOREIGN KEY (`donor`) REFERENCES `ast_RegisterADonor_T`(`registerADonorId`);

