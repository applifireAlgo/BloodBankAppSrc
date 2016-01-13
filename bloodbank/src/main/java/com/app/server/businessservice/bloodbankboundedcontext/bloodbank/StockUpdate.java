package com.app.server.businessservice.bloodbankboundedcontext.bloodbank;
import com.app.server.repository.BloodResultRepository;
import com.app.server.repository.BloodStockRepository;
import com.app.server.repository.DonorVisitRepository;
import com.app.server.repository.RegisterADonorRepository;
import com.app.shared.bloodbank.BloodResult;
import com.app.shared.bloodbank.BloodStock;
import com.app.shared.bloodbank.DonorVisit;
import com.app.shared.bloodbank.RegisterADonor;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.ruleengine.server.bzservice.RuleEngineInterface;
import com.spartan.shield.sessionService.SessionDataMgtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException;
import com.athena.framework.server.exception.biz.SpartanDataNotFoundException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import com.athena.framework.server.exception.repository.SpartanPersistenceException;

@Component
public class StockUpdate {

    @Autowired
    private SessionDataMgtService sessionService;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private DonorVisitRepository<DonorVisit> donorVisitRepository;

    @Autowired
    private BloodStockRepository<BloodStock> bloodStockRepository;

    @Autowired
    private RuleEngineInterface ruleEngineInterface;

    @Autowired
    private BloodResultRepository<BloodResult> bloodResultRepository;

    @Autowired
    private RegisterADonorRepository<RegisterADonor> registerADonorRepository;

    public void proStockUpdate(DonorVisit entity) throws SpartanIncorrectDataException, Exception, SpartanBusinessValidationFailedException, SpartanPersistenceException, SpartanDataNotFoundException {
        try {
            if (entity == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.app.shared.bloodbank.DonorVisit donorvisit_0 = donorVisitRepository.save(entity);
            if (donorvisit_0.getDonor() == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            com.app.shared.bloodbank.RegisterADonor registeradonor_1 = registerADonorRepository.findById(donorvisit_0.getDonor());
            if (registeradonor_1.getBloodGroup() == null) {
                throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
            }
            java.util.List<com.app.shared.bloodbank.BloodStock> bloodstock_2 = bloodStockRepository.findByBloodGroup(registeradonor_1.getBloodGroup());
            for (com.app.shared.bloodbank.BloodStock _bloodstock_2 : bloodstock_2) {
                ruleEngineInterface.initialize("cb5be4d3-9018-439c-ab92-89d4de7454f6");
                ruleEngineInterface.add(donorvisit_0);
                ruleEngineInterface.add(registeradonor_1);
                ruleEngineInterface.add(_bloodstock_2);
                ruleEngineInterface.add(runtimeLogInfoHelper);
                ruleEngineInterface.add(entity);
                ruleEngineInterface.executeRule();
                bloodStockRepository.update((com.app.shared.bloodbank.BloodStock) ruleEngineInterface.getResult("bloodstock_2"));
                if ((com.app.shared.bloodbank.BloodResult) ruleEngineInterface.getResult("bloodresult_3") == null) {
                    throw new com.athena.framework.server.exception.biz.SpartanDataNotFoundException("invalid parameter");
                }
                com.app.shared.bloodbank.BloodResult bloodresult_5 = bloodResultRepository.save((com.app.shared.bloodbank.BloodResult) ruleEngineInterface.getResult("bloodresult_3"));
            }
        } catch (com.athena.framework.server.exception.biz.RuleInitException | com.athena.framework.server.exception.biz.RuleExecuteException | com.athena.framework.server.exception.biz.RuleWorkingMemoryException | com.athena.framework.server.exception.biz.RuleDataException e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException("3005");
        } catch (Exception e) {
            e.printStackTrace();
            throw new com.athena.framework.server.exception.biz.SpartanBusinessValidationFailedException(e.getCause().getMessage());
        }
    }
}
