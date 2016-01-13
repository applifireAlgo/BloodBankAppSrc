

ALTER TABLE `ast_BloodResult_T` ADD CONSTRAINT FOREIGN KEY (`donorVisit`) REFERENCES `ast_DonorVisit_T`(`donorVisitId`);

