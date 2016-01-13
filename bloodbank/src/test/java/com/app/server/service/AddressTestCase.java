package com.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.AddressRepository;
import com.app.shared.location.Address;
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
import com.app.shared.location.AddressType;
import com.app.server.repository.AddressTypeRepository;
import com.app.shared.location.City;
import com.app.server.repository.CityRepository;
import com.app.shared.location.Country;
import com.app.server.repository.CountryRepository;
import com.app.shared.location.State;
import com.app.server.repository.StateRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class AddressTestCase {

    @Autowired
    private AddressRepository<Address> addressRepository;

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
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("DGak150hIwheMLyuq2DagU35gmSYwWchR6FK3OZwmSJDcxQ7QO");
            addresstype.setAddressTypeDesc("yCwcNN9hQ8NXD3XHlb2CjaIPMC26i0hpMwzrm8MVvzVnxHqIVv");
            addresstype.setAddressTypeIcon("PI35ZNROcPq6UnSSEubChk4RoucdQ4ALESXcQF1xIyIyuzL3ZV");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(2);
            city.setCityCodeChar2("Wk6xrLmkghihsS5EQHGMhmGUrmyNZe4u");
            city.setCityDescription("5j0vAFZc6zVhZdMRTUy6FjHLJMuOloTOybi8AtfBQ15PKdVjT7");
            city.setCityFlag("UhCLPZO6b3cukyrfoVBoPpBfyYqtTfMiVWdrtpVG64DRA4x6iB");
            city.setCityLatitude(8);
            city.setCityLongitude(3);
            city.setCityName("DZbCRtPZynAvgxesqC8Me3A9iqhOBkNYU3zzy2yaPsGHJkJ5cM");
            Country country = new Country();
            country.setCapital("b6KkykP4DwsuaIbVyMWaQDCHjeiD3HH1");
            country.setCapitalLatitude(9);
            country.setCapitalLongitude(3);
            country.setCountryCode1("Bs8");
            country.setCountryCode2("Obc");
            country.setCountryFlag("QCRmG6mNbtnDmUAl8jqhXyHY7ILTFqQvcWhbBkXqV3V0WrQGVJ");
            country.setCountryName("tEkf5oKoicPJDs68MCe75N0fIy6Mp5Y5rIR0LUGmSAhF0jZxjH");
            country.setCurrencyCode("0sq");
            country.setCurrencyName("D21OFzUSI5pAPGjL0hKqEBeER7MGq8fP4peqiFyOJUlzwX52bk");
            country.setCurrencySymbol("8rGH79YZNEcZkg48xIttcQitrwczTAHm");
            country.setIsoNumeric(2);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("RzlTyus90UUrd5zdzQRFcHVAqMGsNRTtMjfmvlbZAT3ZVZ958U");
            state.setStateCapitalLatitude(2);
            state.setStateCapitalLongitude(6);
            state.setStateCode(2);
            state.setStateCodeChar2("RosQJUgwtWN0XPSshynymiyQJvxkBnuL");
            state.setStateCodeChar3("8VMUIrCnOhZ1Q0TxdA7kSXOr99BG1uqe");
            state.setStateDescription("hAeYmudD2twxutjkeBRvCML0Lqnou49eNVWqXodPmfTQjJDuMQ");
            state.setStateFlag("PjH4FoBevO0mmzZUd8AOCKVBgGzSdc4TAEDqzwQCse5392HpTm");
            state.setStateName("jLzOwEHrjgAQmBuwqN6vE3Vuk0MUmBudktVyQpBbDonzFYo2yc");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(3);
            city.setCityCodeChar2("J2B8uDBwlr3nPKwLvq7DYFJ8jKgXg6U8");
            city.setCityDescription("r9lLSb8CIlzz0ypVmfWMQL75nDMeAEGpGIGxXXwfOefuR3v3ix");
            city.setCityFlag("dSDDUky8CRXnfCFFitSO5WstVZKpCkoXw83tEl4XWk1jQBypCN");
            city.setCityLatitude(3);
            city.setCityLongitude(0);
            city.setCityName("g17NqfODUIwHxLzsb7AMSV31YlDypgm4qIbGxiIeXl9r4f5NZ8");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            Address address = new Address();
            address.setAddress1("anpGxfLl85PvPzlZ0krI8HKRuF0y1vYJ3fkMtxSY8TO2za9K1p");
            address.setAddress2("uYjIoz0P1W1bwcqTAOux49xbVrFGmQ75d8KaLgX1DlXou8izro");
            address.setAddress3("tgtuuIx3hFWxBT3d5Ho7lnKF4FyfnuxV5wkNwzEy0PAC5QbFnT");
            address.setAddressLabel("PeH9iCeH7Qy");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("ck9NOlPUwVMQZADBlFbHXpI6u8qydbQUDNCIM2ZvycIQfcAGra");
            address.setLongitude("kjPwP7EjaLArhlmi8rjKHy4k29QVI2p7zBxigAkvmVQ87WMeM6");
            address.setStateId((java.lang.String) StateTest._getPrimarykey());
            address.setZipcode("XHPQev");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            address.setEntityValidator(entityValidator);
            address.isValid();
            addressRepository.save(address);
            map.put("AddressPrimaryKey", address._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private AddressTypeRepository<AddressType> addresstypeRepository;

    @Autowired
    private CityRepository<City> cityRepository;

    @Autowired
    private CountryRepository<Country> countryRepository;

    @Autowired
    private StateRepository<State> stateRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            Address address = addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
            address.setAddress1("ZA27lMeKdud5gzMB1e4oFuZDZPrwY0rc3VNGcUNIYmwvOjKjm5");
            address.setAddress2("19LSKJq0x2hLmOPnGz1XSLPLzOY5Ze1ecwbZ6C8peXyyjjRlCc");
            address.setAddress3("55DBf4iFY0gXrl8BavXTlUCvtLRWoOtxcJUKLopgMRfrCBRekf");
            address.setAddressLabel("T5sgjjIrDQX");
            address.setLatitude("1BLcgJLofaKKgde3BE8YcLp9Z8qn1N2D2jIPS43zS6Pmc401XT");
            address.setLongitude("n6L4fVaIC9iX2BwCsXwQrxlUXcfC8hwGUKNGccQ35bB4muf9Ye");
            address.setVersionId(1);
            address.setZipcode("9kbdAo");
            address.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            addressRepository.update(address);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.findById((java.lang.String) map.get("AddressPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findByaddressTypeId() {
        try {
            java.util.List<Address> listofaddressTypeId = addressRepository.findByAddressTypeId((java.lang.String) map.get("AddressTypePrimaryKey"));
            if (listofaddressTypeId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycityId() {
        try {
            java.util.List<Address> listofcityId = addressRepository.findByCityId((java.lang.String) map.get("CityPrimaryKey"));
            if (listofcityId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBycountryId() {
        try {
            java.util.List<Address> listofcountryId = addressRepository.findByCountryId((java.lang.String) map.get("CountryPrimaryKey"));
            if (listofcountryId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBystateId() {
        try {
            java.util.List<Address> listofstateId = addressRepository.findByStateId((java.lang.String) map.get("StatePrimaryKey"));
            if (listofstateId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test4Delete() {
        try {
            org.junit.Assert.assertNotNull(map.get("AddressPrimaryKey"));
            addressRepository.delete((java.lang.String) map.get("AddressPrimaryKey")); /* Deleting refrenced data */
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
