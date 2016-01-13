package com.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.LoginRepository;
import com.app.shared.authentication.Login;
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
import com.app.shared.contacts.CoreContacts;
import com.app.server.repository.CoreContactsRepository;
import com.app.shared.contacts.Gender;
import com.app.server.repository.GenderRepository;
import com.app.shared.location.Language;
import com.app.server.repository.LanguageRepository;
import com.app.shared.location.Timezone;
import com.app.server.repository.TimezoneRepository;
import com.app.shared.contacts.Title;
import com.app.server.repository.TitleRepository;
import com.app.shared.authentication.User;
import com.app.server.repository.UserRepository;
import com.app.shared.authentication.UserAccessDomain;
import com.app.server.repository.UserAccessDomainRepository;
import com.app.shared.authentication.UserAccessLevel;
import com.app.server.repository.UserAccessLevelRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class LoginTestCase {

    @Autowired
    private LoginRepository<Login> loginRepository;

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
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(30);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("jy9w2sjegvBikuf7rAC9iEiMpKUPyUDT7ryWOSc3JxNeYVEhSa");
            corecontacts.setFirstName("UNRkS8K1iFwZlaIy9sSJleJ2wQk9N4NlXnqk9iWC4ZvaRNVSkE");
            Gender gender = new Gender();
            gender.setGender("7k8AjsBbF9yKISYjGwoZQpkLavU0Ud37Sq64EHPFGO3fM36cbk");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Fi");
            language.setAlpha3("PVQ");
            language.setAlpha4("auTs");
            language.setAlpha4parentid(2);
            language.setLanguage("gxlV4pZN84rJqJS3yQjxNSm0qmvpvp4jn4v3EtK9zFppcaWs7S");
            language.setLanguageDescription("i1v0K7IeZb3zswfh41rGKh86SVGH7bpDJ38gu3Dy0bsasWS4mI");
            language.setLanguageIcon("pvlysjQ3YuY5VYdnzVrXD6r0Mk7O9thoeTcZCKMhgLqTIw64oe");
            language.setLanguageType("hrFE62polxI2ztulygH7EcWx9H1XkeEQ");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("7sLoxpzuBegXVVzz1I2SvizEB1g4bvzYEmQqQ6upazfon0j9SB");
            timezone.setCountry("dk2dqWPupRAunLG37q3v8U7IeWGoP8XjZhNCcTNlxH1Brt28K6");
            timezone.setGmtLabel("wOg5gdhiGmheZkXV21v7IZ7RSBSvFChVbmKGdam2MP9bw077Hz");
            timezone.setTimeZoneLabel("ZtJLKkhquVNER7ULfBHb4wnwb9JgZ1yPyynEufsrDMyOBszkkW");
            timezone.setUtcdifference(2);
            Title title = new Title();
            title.setTitles("BEEzRQNTJa0a1BIKRaM283CNvhXtwBHNuy4ZcADo7eY2aYT5HK");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            corecontacts.setAge(19);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("gPPgOh7dqZ43rUzBwOJBNAsJRcFzH4CqTUNFstDUSr4i40Yd4m");
            corecontacts.setFirstName("J6vr4FYqVQlBgg5Mtm9JO5QiluJe3a7sKRWeugHOEbUOkkUsUR");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("YEqL6c3NquqTKvD2K3v3GUhWt6On94NdjHTiwdafWMkhBlqEHL");
            corecontacts.setMiddleName("UbCyfYkEQNacpONJjaz2iCvZA9L2d2x5xHm1KNQfE04Np8iyRh");
            corecontacts.setNativeFirstName("07E03JfoKMlBmycGxgfGHzhQWEV5SGCNH9rYsizSJxhV2QauA0");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("wtNYdvTV6GI8AWXTk3Y0MsEhc310wTnycZckBZk45vpt6kO40W");
            corecontacts.setNativeMiddleName("b69QqhpKahHzdpeEVPgzyIGeY1G1d5mTN9SwXdIRfMTyzL48nv");
            corecontacts.setNativeTitle("jtfeGkiySmlPPJghDMhf59kHiPRbsn9qn5E3OwiWyaLkObnK87");
            corecontacts.setPhoneNumber("jHONCwFjOYq0MCNc5f2J");
            timezone.setTimeZoneId(null);
            corecontacts.setTimezone(timezoneRepository.save(timezone));
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            User user = new User();
            user.setAllowMultipleLogin(0);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(0);
            user.setIsDeleted(0);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(1);
            user.setPasswordAlgo("JGpE054sfQGe2k7bmfHK34BKTQZtgzfBeGNqRcLI6Vr3JRl5Ek");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(2173);
            user.setUserAccessCode(8);
            UserAccessDomain useraccessdomain = new UserAccessDomain();
            useraccessdomain.setDomainDescription("niiC6vVVYdAYqHWSsMEYAMsm4vTkJIyN0s0ou94v184nSCoW4B");
            useraccessdomain.setDomainHelp("kkO0boWdLL47ylnzekPAQlcgY6ZUhhRKxwxxBY3ah44fZJBOgR");
            useraccessdomain.setDomainIcon("LF2bv0nFa7mH77QopMij0ru6zzAwT2XDeRQCtAz87UaonaZaO9");
            useraccessdomain.setDomainName("8uhaezqQWB87VGiJdPKxu88CL0YpmAEzOhoYHdIiK26d2LF1Dl");
            useraccessdomain.setUserAccessDomain(valueGenerator.getRandomInteger(99999, 0));
            UserAccessDomain UserAccessDomainTest = useraccessdomainRepository.save(useraccessdomain);
            map.put("UserAccessDomainPrimaryKey", useraccessdomain._getPrimarykey());
            UserAccessLevel useraccesslevel = new UserAccessLevel();
            useraccesslevel.setLevelDescription("VHqNFMUOl2SRrnr8kxOUHUoYfV3WbCAyw4IRNha96rVFHg9BfA");
            useraccesslevel.setLevelHelp("tKYMGG4jXNyww8SN0vgKBpbFpqSv8AtrCCQ4DtPpUX8rEyKC1N");
            useraccesslevel.setLevelIcon("b29xxqOhgOIQr1y21YuRKbQqdPDilGuHOVhjJ2AKjID6H5AWF2");
            useraccesslevel.setLevelName("QDAtW2viYwSKsAZw7UI1Ji5CbgyRMHwjhIn1z2s3QCI1Cu0eEP");
            useraccesslevel.setUserAccessLevel(valueGenerator.getRandomInteger(99999, 0));
            UserAccessLevel UserAccessLevelTest = useraccesslevelRepository.save(useraccesslevel);
            map.put("UserAccessLevelPrimaryKey", useraccesslevel._getPrimarykey());
            user.setAllowMultipleLogin(0);
            user.setChangePasswordNextLogin(1);
            user.setGenTempOneTimePassword(1);
            user.setIsDeleted(0);
            user.setIsLocked(0);
            user.setLastPasswordChangeDate(new java.sql.Timestamp(123456789));
            user.setMultiFactorAuthEnabled(0);
            user.setPasswordAlgo("c6MRRNmdhlrlODVeFJPTgex4sEmIzYZGBT4D1QfMrJ2nAsSqjj");
            user.setPasswordExpiryDate(new java.sql.Timestamp(123456789));
            user.setSessionTimeout(1485);
            user.setUserAccessCode(9);
            user.setUserAccessDomainId((java.lang.String) UserAccessDomainTest._getPrimarykey()); /* ******Adding refrenced table data */
            user.setUserAccessLevelId((java.lang.String) UserAccessLevelTest._getPrimarykey());
            Login login = new Login();
            corecontacts.setContactId(null);
            login.setCoreContacts(corecontacts);
            login.setFailedLoginAttempts(3);
            login.setIsAuthenticated(true);
            login.setLoginId("K7hbq8cxzK9oKjjNwQi4a3k0tfLkCmcG8AaIHrPiOl50WCrddZ");
            login.setServerAuthImage("ZdrmXU0IUN739Xda3V6H0tp5Trw4PK56");
            login.setServerAuthText("NUIcnqCnbvb0ZSGy");
            user.setUserId(null);
            login.setUser(user);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            login.setEntityValidator(entityValidator);
            login.isValid();
            loginRepository.save(login);
            map.put("LoginPrimaryKey", login._getPrimarykey());
            map.put("CoreContactsPrimaryKey", login.getCoreContacts()._getPrimarykey());
            map.put("UserPrimaryKey", login.getUser()._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

    @Autowired
    private UserRepository<User> userRepository;

    @Autowired
    private UserAccessDomainRepository<UserAccessDomain> useraccessdomainRepository;

    @Autowired
    private UserAccessLevelRepository<UserAccessLevel> useraccesslevelRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            Login login = loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
            login.setFailedLoginAttempts(6);
            login.setLoginId("Fx0fgHL50XUdwnf2kx1U20fRQkj5zz9n41pj9u6PRonaD59uG4");
            login.setServerAuthImage("8AUq6IO9LhbKOltT2C0dw782XLtwbVg4");
            login.setServerAuthText("FcMqLGNrcjOLmRnr");
            login.setVersionId(1);
            login.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            loginRepository.update(login);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.findById((java.lang.String) map.get("LoginPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void testNQFindMappedUser() {
        try {
            loginRepository.FindMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void testNQFindUnMappedUser() {
        try {
            loginRepository.FindUnMappedUser();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("LoginPrimaryKey"));
            loginRepository.delete((java.lang.String) map.get("LoginPrimaryKey")); /* Deleting refrenced data */
            useraccesslevelRepository.delete((java.lang.String) map.get("UserAccessLevelPrimaryKey")); /* Deleting refrenced data */
            useraccessdomainRepository.delete((java.lang.String) map.get("UserAccessDomainPrimaryKey")); /* Deleting refrenced data */
            titleRepository.delete((java.lang.String) map.get("TitlePrimaryKey")); /* Deleting refrenced data */
            languageRepository.delete((java.lang.String) map.get("LanguagePrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
