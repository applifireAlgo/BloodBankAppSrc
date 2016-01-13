package com.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.BloodRequestRepository;
import com.app.shared.bloodbank.BloodRequest;
import org.springframework.beans.factory.annotation.Autowired;
import com.athena.framework.server.helper.RuntimeLogInfoHelper;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.athena.framework.server.test.RandomValueGenerator;
import java.util.HashMap;
import com.spartan.healthmeter.entity.scheduler.ArtMethodCallStack;
import org.springframework.mock.web.MockHttpSession;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;
import org.junit.Before;
import org.junit.After;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface.RECORD_TYPE;
import org.junit.Test;
import com.app.shared.bloodbank.BloodGroup;
import com.app.server.repository.BloodGroupRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class BloodRequestTestCase {

    @Autowired
    private BloodRequestRepository<BloodRequest> bloodrequestRepository;

    @Autowired
    private RuntimeLogInfoHelper runtimeLogInfoHelper;

    @Autowired
    private EntityValidatorHelper<Object> entityValidator;

    private RandomValueGenerator valueGenerator = new RandomValueGenerator();

    private static HashMap<String, Object> map = new HashMap<String, Object>();

    @Autowired
    private ArtMethodCallStack methodCallStack;

    protected MockHttpSession session;

    protected MockHttpServletRequest request;

    protected MockHttpServletResponse response;

    protected void startSession() {
        session = new MockHttpSession();
    }

    protected void endSession() {
        session.clearAttributes();
        session.invalidate();
        session = null;
    }

    protected void startRequest() {
        request = new MockHttpServletRequest();
        request.setSession(session);
        org.springframework.web.context.request.RequestContextHolder.setRequestAttributes(new org.springframework.web.context.request.ServletRequestAttributes(request));
    }

    protected void endRequest() {
        ((org.springframework.web.context.request.ServletRequestAttributes) org.springframework.web.context.request.RequestContextHolder.getRequestAttributes()).requestCompleted();
        org.springframework.web.context.request.RequestContextHolder.resetRequestAttributes();
        request = null;
    }

    @Before
    public void before() {
        startSession();
        startRequest();
        setBeans();
    }

    @After
    public void after() {
        endSession();
        endRequest();
    }

    private void setBeans() {
        runtimeLogInfoHelper.createRuntimeLogUserInfo(1, "AAAAA", request.getRemoteHost());
        org.junit.Assert.assertNotNull(runtimeLogInfoHelper);
        methodCallStack.setRequestId(java.util.UUID.randomUUID().toString().toUpperCase());
    }

    @Test
    public void test1Save() {
        try {
            BloodGroup bloodgroup = new BloodGroup();
            bloodgroup.setBloodGroup("xksjYo7tPwmj8VLUHwI7eX16jAWtgmyFScIPmmzBq7MpoDoeWo");
            BloodGroup BloodGroupTest = bloodgroupRepository.save(bloodgroup);
            map.put("BloodGroupPrimaryKey", bloodgroup._getPrimarykey());
            BloodRequest bloodrequest = new BloodRequest();
            bloodrequest.setBloodGroup((java.lang.String) BloodGroupTest._getPrimarykey());
            bloodrequest.setDateNeededBy(new java.sql.Timestamp(123456789));
            bloodrequest.setDispatchedToPatientOnDT(new java.sql.Timestamp(123456789));
            bloodrequest.setNoOfUnits(559);
            bloodrequest.setPatientName("pBu0Enk6gqKjMBYKxhovCj1GM9nrJyQZPwImmlLeV1ckMprPEn");
            bloodrequest.setRequestedByDoctor("aPe7twmXqUDZB596b751sKHG5qwz3vD1yBTKPqcDNNpsj0Dh62");
            bloodrequest.setRequestedByHospital("jcwQTto44w8wapZntALU72JAOOosnXKokoPFXikR6fcyxzNnQ2");
            bloodrequest.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            bloodrequest.setEntityValidator(entityValidator);
            bloodrequest.isValid();
            bloodrequestRepository.save(bloodrequest);
            map.put("BloodRequestPrimaryKey", bloodrequest._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private BloodGroupRepository<BloodGroup> bloodgroupRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("BloodRequestPrimaryKey"));
            BloodRequest bloodrequest = bloodrequestRepository.findById((java.lang.String) map.get("BloodRequestPrimaryKey"));
            bloodrequest.setDateNeededBy(new java.sql.Timestamp(123456789));
            bloodrequest.setDispatchedToPatientOnDT(new java.sql.Timestamp(123456789));
            bloodrequest.setNoOfUnits(978);
            bloodrequest.setPatientName("vu2NL8SI8EeTpTqizkXiSDzVEAopAD6hTK3k8UVU0pUAMOrwcD");
            bloodrequest.setRequestedByDoctor("itCSmDINWK0ax4V3yqPa2MCrxCt7V3mGGZFy2Qa3uGUXr8ZoBX");
            bloodrequest.setRequestedByHospital("MKufMSt06Qwinvh9MYXhy3CS4hGs3Z4B4XwNV7zhvPZoLFE7yA");
            bloodrequest.setVersionId(1);
            bloodrequest.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            bloodrequestRepository.update(bloodrequest);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBybloodGroup() {
        try {
            java.util.List<BloodRequest> listofbloodGroup = bloodrequestRepository.findByBloodGroup((java.lang.String) map.get("BloodGroupPrimaryKey"));
            if (listofbloodGroup.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("BloodRequestPrimaryKey"));
            bloodrequestRepository.findById((java.lang.String) map.get("BloodRequestPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("BloodRequestPrimaryKey"));
            bloodrequestRepository.delete((java.lang.String) map.get("BloodRequestPrimaryKey")); /* Deleting refrenced data */
            bloodgroupRepository.delete((java.lang.String) map.get("BloodGroupPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
