package com.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.RegisterADonorRepository;
import com.app.shared.bloodbank.RegisterADonor;
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
import com.app.shared.location.Address;
import com.app.server.repository.AddressRepository;
import com.app.shared.location.AddressType;
import com.app.server.repository.AddressTypeRepository;
import com.app.shared.location.City;
import com.app.server.repository.CityRepository;
import com.app.shared.location.Country;
import com.app.server.repository.CountryRepository;
import com.app.shared.location.State;
import com.app.server.repository.StateRepository;
import com.app.shared.bloodbank.BloodGroup;
import com.app.server.repository.BloodGroupRepository;
import com.app.shared.contacts.Gender;
import com.app.server.repository.GenderRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class RegisterADonorTestCase {

    @Autowired
    private RegisterADonorRepository<RegisterADonor> registeradonorRepository;

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
            Address address = new Address();
            address.setAddress1("klQFQsPlWLU6FgZI1rMQBfEkKLZnRU83ob3xAsCP9giS9EhRPQ");
            address.setAddress2("PXbTiDL0hZKgGO2SJGaNUKKMlbLiEzOexBEB5MPox0YbpnEl2C");
            address.setAddress3("5tYggIRr3SijJI4RAzE9FGIYzPYsAD4g32m8JDmPd1khxEApjg");
            address.setAddressLabel("e67jGjNCnAC");
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("Ast0dXl6yrLnkT3OQ35dcgTKggew0SW1rAHLsxaOY3Gnw3zZme");
            addresstype.setAddressTypeDesc("51KhqAX2FiWojqi6AQk7rcHv57dNMFPUv1fIdH4jExn4jQy8XG");
            addresstype.setAddressTypeIcon("K3lX9XjRR4eEb8nJ6fh136bS2sBGt4LpzzvIbD02rTGDmiqhqm");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(3);
            city.setCityCodeChar2("Vp4N6Tw7Kx1nqO5vaOiWQBPSn8622t0x");
            city.setCityDescription("T15e15KwwoGBAfRM7geZiQwO9CKmv89rPA53BNM9HeNIZDocch");
            city.setCityFlag("QAkAlDJTqopSBJaMoDJXjcEEM3dS9WmiklB81TCOTQ2m5fSAAt");
            city.setCityLatitude(5);
            city.setCityLongitude(8);
            city.setCityName("V5MSit3FLB5Qw5FcDOzGEfGv5du1Pf8xFTQii2imzaqjSexoQ2");
            Country country = new Country();
            country.setCapital("OGccJkYCcdMiwUEZusUb0wuxL8NZhRiN");
            country.setCapitalLatitude(11);
            country.setCapitalLongitude(11);
            country.setCountryCode1("xNs");
            country.setCountryCode2("HZT");
            country.setCountryFlag("p8oNXUiXwyfRDWW33j8ASNtGNZv8cySekle5ZBIAW5QVjVHWd3");
            country.setCountryName("aaWwXTWl09w6EnRDaGvwCQK4h0M2UuWjP5FH4tt8YKcY9xSLKe");
            country.setCurrencyCode("Lob");
            country.setCurrencyName("DQPaD3oPfXeZNeIsp4P34nl2x6Z0P4twScg2dNrfyldNOcxUcp");
            country.setCurrencySymbol("O2XByAIbXxZaDDFN72i2IPBy1vqtXzdx");
            country.setIsoNumeric(9);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("ha8RD3jTn0fp3BXhXp3HSM9Hjb92KRa07wf8Pm8YOCJFefaaGb");
            state.setStateCapitalLatitude(9);
            state.setStateCapitalLongitude(0);
            state.setStateCode(2);
            state.setStateCodeChar2("ab72GMW0n0ZTP4xqf66FBmnNE4l1Bi46");
            state.setStateCodeChar3("Tn0jbsD86oboht1siERtXS2kwHSGObKQ");
            state.setStateDescription("mi7NPBdj6hQ48tnWqkjJXpkQ9CdJ07LyjpspxKF4HQVKyW8Vhc");
            state.setStateFlag("6PWbPBiW1VoGPYwNVReaNp9pgJSLyU3s9Ye5z15uboXNScJ4W9");
            state.setStateName("X1aMi1s3sonAywC1KCP0lAltOoNhcpbA3ZzDmJEzBb4vIZmRG6");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(1);
            city.setCityCodeChar2("XWgDqzHtNvH25FJ7OGrUzKFbrk24rMYI");
            city.setCityDescription("YzrR6WMtllL9X6HrnClqdTmEH3TMi4NiPYLSAHKg3lYofk8dq5");
            city.setCityFlag("hoqq0hTFdPWWQPfIl1rqBiF0N2rDAin22Ru6YmWwSbR50MNvWp");
            city.setCityLatitude(1);
            city.setCityLongitude(3);
            city.setCityName("PLJbcT6kK6FDBQCK1fq5QRGXnpxD5rNtafNAfKSyY282lhCg5T");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            address.setAddress1("JbRPMX7q1zozGyh7TkFiw16u2eMfiL62dnh7owVv9OIEDP8ieq");
            address.setAddress2("GvSCzddPF5hKg1wViRtW1f9tH0bSN4SNNmSpmZqHUpDj1cYB4I");
            address.setAddress3("fkVd4QeHsdeUG6QAQoKSVWq15oWfKb6IKk8WKtCi0JfXH8z7KK");
            address.setAddressLabel("zhwnUnZC1tm");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("3iy1yrEfopvhIv7ZLsJ8W6rOSVnDqx4W8EEHc6kJdIs07fUzkm");
            address.setLongitude("Pby9CVtcllvx90FYTi5l0tzQHbmHar2iJp7nJ5JR2gKPjpclgW");
            address.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setZipcode("XCjLxg");
            BloodGroup bloodgroup = new BloodGroup();
            bloodgroup.setBloodGroup("AQUnRX7GNGA6CoiiiltMqSXLJ5y0PsjUtoNDCzlmafXqhGVNCx");
            BloodGroup BloodGroupTest = bloodgroupRepository.save(bloodgroup);
            map.put("BloodGroupPrimaryKey", bloodgroup._getPrimarykey());
            Gender gender = new Gender();
            gender.setGender("r7W9Q9uD4VsjbNnKG4eOtozvIcbt346uUgZ6lJ60MB40vFuJJb");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            RegisterADonor registeradonor = new RegisterADonor();
            address.setAddressId(null);
            registeradonor.setAddress(address);
            registeradonor.setBloodGroup((java.lang.String) BloodGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            registeradonor.setDateOfBirth(new java.sql.Timestamp(123456789));
            registeradonor.setDonorName("AcLAYQPSIIDiZmQrOoX9FOVvj6Fz7Jl2zR9n69xZEK348DMpst");
            registeradonor.setEmailId("s3lWQaOnv38ijPNpJuL0RZfOyqYnNplDcMSN6OuQ2Dkm7L2dUD");
            registeradonor.setGender((java.lang.String) GenderTest._getPrimarykey());
            registeradonor.setHowoftenyoudonatedinpast(2147483647);
            registeradonor.setLastDonationDate(new java.sql.Timestamp(123456789));
            registeradonor.setPhoneNo("0yHzqXZuJs8XtfqMwTMQQFATr8eOIkIWgjevsbFitaEMGY9bZa");
            registeradonor.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            registeradonor.setEntityValidator(entityValidator);
            registeradonor.isValid();
            registeradonorRepository.save(registeradonor);
            map.put("RegisterADonorPrimaryKey", registeradonor._getPrimarykey());
            map.put("AddressPrimaryKey", registeradonor.getAddress()._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AddressRepository<Address> addressRepository;

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Autowired
    private BloodGroupRepository<BloodGroup> bloodgroupRepository;

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("RegisterADonorPrimaryKey"));
            RegisterADonor registeradonor = registeradonorRepository.findById((java.lang.String) map.get("RegisterADonorPrimaryKey"));
            registeradonor.setDateOfBirth(new java.sql.Timestamp(123456789));
            registeradonor.setDonorName("eD72pzknoFcfVVu6mnLJQh6qUuvQmHUAvLQoOX2aGUrbDUCbHr");
            registeradonor.setEmailId("c24h2Fq4SLzpnI04wA9U7XjIO2Vq4J7t1yM0cIjWyPI1Nj4nSc");
            registeradonor.setHowoftenyoudonatedinpast(2147483647);
            registeradonor.setLastDonationDate(new java.sql.Timestamp(123456789));
            registeradonor.setPhoneNo("kPRDnOeL1xgef1npTUyUFhtiGH38VRdFGiKYEKkH717KZUgvtj");
            registeradonor.setVersionId(1);
            registeradonor.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            registeradonorRepository.update(registeradonor);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBybloodGroup() {
        try {
            java.util.List<RegisterADonor> listofbloodGroup = registeradonorRepository.findByBloodGroup((java.lang.String) map.get("BloodGroupPrimaryKey"));
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
    public void test3findBygender() {
        try {
            java.util.List<RegisterADonor> listofgender = registeradonorRepository.findByGender((java.lang.String) map.get("GenderPrimaryKey"));
            if (listofgender.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("RegisterADonorPrimaryKey"));
            registeradonorRepository.findById((java.lang.String) map.get("RegisterADonorPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("RegisterADonorPrimaryKey"));
            registeradonorRepository.delete((java.lang.String) map.get("RegisterADonorPrimaryKey")); /* Deleting refrenced data */
            genderRepository.delete((java.lang.String) map.get("GenderPrimaryKey")); /* Deleting refrenced data */
            bloodgroupRepository.delete((java.lang.String) map.get("BloodGroupPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }
}
