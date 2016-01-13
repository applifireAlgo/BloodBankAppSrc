package com.app.server.service;
import org.junit.runner.RunWith;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import com.app.config.WebConfigExtended;
import org.springframework.test.context.ContextConfiguration;
import org.junit.FixMethodOrder;
import org.junit.runners.MethodSorters;
import org.springframework.test.context.TestExecutionListeners;
import com.app.server.repository.CoreContactsRepository;
import com.app.shared.contacts.CoreContacts;
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
import com.app.shared.contacts.Gender;
import com.app.server.repository.GenderRepository;
import com.app.shared.location.Language;
import com.app.server.repository.LanguageRepository;
import com.app.shared.location.Timezone;
import com.app.server.repository.TimezoneRepository;
import com.app.shared.contacts.Title;
import com.app.server.repository.TitleRepository;
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
import com.app.shared.contacts.CommunicationData;
import com.app.shared.contacts.CommunicationGroup;
import com.app.server.repository.CommunicationGroupRepository;
import com.app.shared.contacts.CommunicationType;
import com.app.server.repository.CommunicationTypeRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = WebConfigExtended.class)
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
@TestExecutionListeners({ org.springframework.test.context.support.DependencyInjectionTestExecutionListener.class, org.springframework.test.context.support.DirtiesContextTestExecutionListener.class, org.springframework.test.context.transaction.TransactionalTestExecutionListener.class })
public class CoreContactsTestCase {

    @Autowired
    private CoreContactsRepository<CoreContacts> corecontactsRepository;

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
            Gender gender = new Gender();
            gender.setGender("Cu0i006Mz8RnL0YMKJHFrUXgPt8nEmvwltuNidLX2vm842k4sM");
            Gender GenderTest = genderRepository.save(gender);
            map.put("GenderPrimaryKey", gender._getPrimarykey());
            Language language = new Language();
            language.setAlpha2("Dx");
            language.setAlpha3("C85");
            language.setAlpha4("0pW4");
            language.setAlpha4parentid(4);
            language.setLanguage("aUaJuYxYr9kODdXFM8XqbmbtyjTzIN0j5SIHPpGcz2I5VFAFXE");
            language.setLanguageDescription("uDBaOKinCnv6KAJyVZDVljtXC1CWkxuovxJH6VYNngd5VLWmw7");
            language.setLanguageIcon("MgreaDcOPzPi4F2N7OZJ9BER7tsnkoUgYh3bwZ4juCyOQC5J1t");
            language.setLanguageType("IugsWCjMyoDzZMEYjYyWnSJ5iXywdlWJ");
            Language LanguageTest = languageRepository.save(language);
            map.put("LanguagePrimaryKey", language._getPrimarykey());
            Timezone timezone = new Timezone();
            timezone.setCities("bzU1kBbmGMAiEMmtAavxks9YbGGTxEsK9D0nBfLLXygSZXOaqt");
            timezone.setCountry("vznHNoSFy0Zdxg0ZTGeUDtSJofJjRu2JtJ9RQaPEEDCa8eWmlQ");
            timezone.setGmtLabel("uTJHpqYEAaudHONj5TVfJOfqQF6tnTXN1eZbsDQwwQZrbFS2Rb");
            timezone.setTimeZoneLabel("M3ea6BBEWKfCM4RigxV9DbrTm5jhmFfMAe9tF3bfBVDN4iDl8Y");
            timezone.setUtcdifference(1);
            Title title = new Title();
            title.setTitles("fnxtHDnV6rR7E6mUDAfRxlZnVH6BbHmjYYsCnt8mTUdRoYiP2x");
            Title TitleTest = titleRepository.save(title);
            map.put("TitlePrimaryKey", title._getPrimarykey());
            CoreContacts corecontacts = new CoreContacts();
            corecontacts.setAge(62);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("wGeeX49Gf3794dbM8kb7MDTErr69NwLsJEDsbAzSLhn4UgqJYr");
            corecontacts.setFirstName("9vkCzWrxHof7FeUayG8yayMsBaHs0g9iJaslkLLTUhjKKqpQ4s");
            corecontacts.setGenderId((java.lang.String) GenderTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setLastName("JFx66YTBSFJDYhoKwJY8l6BPYgJNjccsTHaCGpk7e5OfpmKhTi");
            corecontacts.setMiddleName("WZZeVDYx6ohjhzqr1TkqHqljgzed9vtuJUpmmMj3LW41gRlTYI");
            corecontacts.setNativeFirstName("OE3Kv2rHPugVZzJ2wteZCWz4c1hCdG6VDicEHFrT6en9ViOVBn");
            corecontacts.setNativeLanguageCode((java.lang.String) LanguageTest._getPrimarykey()); /* ******Adding refrenced table data */
            corecontacts.setNativeLastName("XWcGE19L93FPiHuEuMFTgT8RIMDSWlMYVjXyUrMu0vc5tgmtWc");
            corecontacts.setNativeMiddleName("HjjhtmDqUfUmbQFBTwXIOW5WTY42YteM59BB3FcU7zFfcdvGfP");
            corecontacts.setNativeTitle("FmtxiPaPVdnsUYmgQTYNgE9XdyDZ4hKySU30Ee5WFz2WEFKv1J");
            corecontacts.setPhoneNumber("rmB69fFmsYpE7qLpMbyG");
            corecontacts.setTimezone(timezoneRepository.save(timezone));
            corecontacts.setTitleId((java.lang.String) TitleTest._getPrimarykey()); /* ******Adding refrenced table data */
            java.util.List<Address> listOfAddress = new java.util.ArrayList<Address>();
            Address address = new Address();
            address.setAddress1("Chd8T08LtXzpao83a3eas3anyMdglLhFiZdHszsu51rjZia59r");
            address.setAddress2("kwrmrjbimNjFzw9Ik8jTCElFJPOFzRjwr8sKf96NMoEGAv86Gx");
            address.setAddress3("LAjeoGi3lWweqsNYijTAxLK5ldNsfMXlcedL6OWadSIhvGAx4I");
            address.setAddressLabel("OJ02BvHCBoP");
            AddressType addresstype = new AddressType();
            addresstype.setAddressType("0Z8OuDvwUPt2XQu7zVLoXcGckqlSJRX6xlbFKMiD8RsINoaNWV");
            addresstype.setAddressTypeDesc("X6SjytEpjNpiHBXkuWZskHWJDtPnTaf5bs3FA9jeEm4Kg9zeqS");
            addresstype.setAddressTypeIcon("4Ip2aW0KrDubLTUbx11R5uRI4cDTC3pZzccSWDenMOLwYHjGdU");
            AddressType AddressTypeTest = addresstypeRepository.save(addresstype);
            map.put("AddressTypePrimaryKey", addresstype._getPrimarykey());
            City city = new City();
            city.setCityCode(1);
            city.setCityCodeChar2("jmkZ5VhJyaSnKg7GwFjM73f52Fmt659n");
            city.setCityDescription("wPZEMWycrMXP6trjkHlQVWDYDHjqD1AvuTCJwYctGnXD4xx5Ly");
            city.setCityFlag("w70mCZm9bK127tU2ybyT0FlkLYxVYBNy3ry7JCp5dcISY0cmDk");
            city.setCityLatitude(6);
            city.setCityLongitude(10);
            city.setCityName("YgOofqeQGlnt3yAOMbnlkz8OzAgHvzD2NPZJWOnmW3k21w5wiM");
            Country country = new Country();
            country.setCapital("twyKlHbRLtppNqzhVPgdxsHa3r4oK7iR");
            country.setCapitalLatitude(8);
            country.setCapitalLongitude(0);
            country.setCountryCode1("GaU");
            country.setCountryCode2("xCR");
            country.setCountryFlag("C8CsmH8EHuXhK7UZj05r5zcO9f7xqYrdG2MzMTb522gqLlvxck");
            country.setCountryName("hDfodeNLg4XqeVLpotjup5A5Hz6IH4cY8RJwGXzoItDe0FoEOZ");
            country.setCurrencyCode("qar");
            country.setCurrencyName("WcK380DOSfr93U6l9xcZId3wAw7jvWHDAs2h4E0gsH5Qc86pH9");
            country.setCurrencySymbol("Ii9OltYgHjHMOksQtEUK9Yd25ktepwcU");
            country.setIsoNumeric(10);
            Country CountryTest = countryRepository.save(country);
            map.put("CountryPrimaryKey", country._getPrimarykey());
            State state = new State();
            state.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            state.setStateCapital("Soaatob3L0X9ETRtSOyQbr5uPhy9j32cuYhMJnfU5MGliadFcu");
            state.setStateCapitalLatitude(6);
            state.setStateCapitalLongitude(2);
            state.setStateCode(1);
            state.setStateCodeChar2("l9tRyuHdfx7qxPT1flmDiqGXJiZUuwDT");
            state.setStateCodeChar3("TPpNrKznZdzyv1RZ96uWy5p8jNq47bKI");
            state.setStateDescription("zWdtOS4ER0k4DX5Bdd46r5CLibwwnIzgiWmzkv9wT2VoUPUS3l");
            state.setStateFlag("v57pRNA3BymlWJKkJsqP87kO7egLYPVx0L6PKVE6dmyVBy3RnA");
            state.setStateName("dwV7R3kPr6OvFZqBQC7NTMZMnuYW0qmqErj5WRS22ariji4FbC");
            State StateTest = stateRepository.save(state);
            map.put("StatePrimaryKey", state._getPrimarykey());
            city.setCityCode(2);
            city.setCityCodeChar2("TVcIhLXfMjh5l7Yqg06NCAVyy0fMaT19");
            city.setCityDescription("xQp7OL84qvihr1PgfctgGKs3MWtnYnA7roVcPDp7BW57TEBsbU");
            city.setCityFlag("hFADkITnOkcWex52UB2wcyYqIDJsBfv5uY8RXKUyYZnoWNJpx7");
            city.setCityLatitude(10);
            city.setCityLongitude(10);
            city.setCityName("M6R0wUVwR5OBOSspSX8zRyNixJchK0YkubAIuCC5IRlaq6cm2n");
            city.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            city.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            City CityTest = cityRepository.save(city);
            map.put("CityPrimaryKey", city._getPrimarykey());
            address.setAddress1("CsMb07EplZ3F75lGpN1ZmnFFeylcJaCB2UV73oBfUSKwbMfVzz");
            address.setAddress2("bX3Mp01MX6FDz4LcRl5vgylQPj1IblKF5v90432A1tK3xRIsIk");
            address.setAddress3("bgc5P7qlu7Of4HvghIQDZkw0NCEqfVWMOOYSPAZZiV8LK5tliw");
            address.setAddressLabel("iAgcTUpN1qu");
            address.setAddressTypeId((java.lang.String) AddressTypeTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCityId((java.lang.String) CityTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setCountryId((java.lang.String) CountryTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setLatitude("SisU7xa47QODrdOyhorl6fhrRNmCNHGbvtZ9crkfmbfHGeMZVW");
            address.setLongitude("BsH9WoET72Ex94jbexGQzdN1Wf6KJhBv57Z9zFKvmTIesPtlCN");
            address.setStateId((java.lang.String) StateTest._getPrimarykey()); /* ******Adding refrenced table data */
            address.setZipcode("GErn87");
            listOfAddress.add(address);
            corecontacts.addAllAddress(listOfAddress);
            java.util.List<CommunicationData> listOfCommunicationData = new java.util.ArrayList<CommunicationData>();
            CommunicationData communicationdata = new CommunicationData();
            communicationdata.setCommData("vp1");
            CommunicationGroup communicationgroup = new CommunicationGroup();
            communicationgroup.setCommGroupDescription("dv10wxemVgzNsGEen0k4KExIPGrocIToevgcTWbKuFo85rOFA3");
            communicationgroup.setCommGroupName("uyjC76uFFhCh3m4cj2pw7LCpT3ihwWEgQWm779ZRPiOQUUAKOI");
            CommunicationGroup CommunicationGroupTest = communicationgroupRepository.save(communicationgroup);
            map.put("CommunicationGroupPrimaryKey", communicationgroup._getPrimarykey());
            CommunicationType communicationtype = new CommunicationType();
            communicationtype.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationtype.setCommTypeDescription("fKGX36G28YAaa8JDgerjm7s23HI401HbP1oIWmAxxsdI8CYrk2");
            communicationtype.setCommTypeName("ZJCWmUmbKa3W1qqwvt2rBLC97cTRiDTmdd32JcIaTDpn5banE0");
            CommunicationType CommunicationTypeTest = communicationtypeRepository.save(communicationtype);
            map.put("CommunicationTypePrimaryKey", communicationtype._getPrimarykey());
            communicationdata.setCommData("NI8");
            communicationdata.setCommGroupId((java.lang.String) CommunicationGroupTest._getPrimarykey()); /* ******Adding refrenced table data */
            communicationdata.setCommType((java.lang.String) CommunicationTypeTest._getPrimarykey());
            listOfCommunicationData.add(communicationdata);
            corecontacts.addAllCommunicationData(listOfCommunicationData);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.ADD);
            corecontacts.setEntityValidator(entityValidator);
            corecontacts.isValid();
            corecontactsRepository.save(corecontacts);
            map.put("CoreContactsPrimaryKey", corecontacts._getPrimarykey());
        } catch (com.athena.framework.server.exception.biz.SpartanConstraintViolationException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Autowired
    private GenderRepository<Gender> genderRepository;

    @Autowired
    private LanguageRepository<Language> languageRepository;

    @Autowired
    private TimezoneRepository<Timezone> timezoneRepository;

    @Autowired
    private TitleRepository<Title> titleRepository;

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
    private CommunicationGroupRepository<CommunicationGroup> communicationgroupRepository;

    @Autowired
    private CommunicationTypeRepository<CommunicationType> communicationtypeRepository;

    @Test
    public void test2Update() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            CoreContacts corecontacts = corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
            corecontacts.setAge(7);
            corecontacts.setApproximateDOB(new java.sql.Date(123456789));
            corecontacts.setDateofbirth(new java.sql.Date(123456789));
            corecontacts.setEmailId("ZA4ZquO8tvHcOOlhuAujs5lbmPX9w10JsHENiBf6SzpeylFE9N");
            corecontacts.setFirstName("karj8E8Z8Hco7N9Xf8OMtMWbtucxreV3YmO3Vf7rkx9iSMyr2D");
            corecontacts.setLastName("xicvpZmpIgxNYFupo0UozYpcwLFGNQDANFiVjlynKUvPWMAsha");
            corecontacts.setMiddleName("Fba5rlwpW2GtXyx2eY2oTv1Q6bbpDKO0JzWnijIBcwzBXCSEcN");
            corecontacts.setNativeFirstName("sspONQmvgdKv3eNc3JU8HRx2JCn5vPTmPw4SWBvdulwmTexGdO");
            corecontacts.setNativeLastName("bzIngtV3nilLBaXCAqKoo4EiztEVF2sdt3KZd9mz4xrTytDAi5");
            corecontacts.setNativeMiddleName("guWyvipVP1e8J6ok8pAmtwbUYff9rMxs2WDpP4DHAReAqOTkBG");
            corecontacts.setNativeTitle("FpAv0mMbyve5lecGHyWLzmdiBccAysOagqRwSwKVGSgtaHlfQw");
            corecontacts.setPhoneNumber("WO87FQYdhSSO5tG7iV5d");
            corecontacts.setVersionId(1);
            corecontacts.setEntityAudit(1, "xyz", RECORD_TYPE.UPDATE);
            corecontactsRepository.update(corecontacts);
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (java.lang.Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3FindById() {
        try {
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.findById((java.lang.String) map.get("CoreContactsPrimaryKey"));
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBygenderId() {
        try {
            java.util.List<CoreContacts> listofgenderId = corecontactsRepository.findByGenderId((java.lang.String) map.get("GenderPrimaryKey"));
            if (listofgenderId.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBynativeLanguageCode() {
        try {
            java.util.List<CoreContacts> listofnativeLanguageCode = corecontactsRepository.findByNativeLanguageCode((java.lang.String) map.get("LanguagePrimaryKey"));
            if (listofnativeLanguageCode.size() == 0) {
                org.junit.Assert.fail("Query did not return any records.");
            }
        } catch (com.athena.framework.server.exception.repository.SpartanPersistenceException e) {
            org.junit.Assert.fail(e.getMessage());
        } catch (Exception e) {
            org.junit.Assert.fail(e.getMessage());
        }
    }

    @Test
    public void test3findBytitleId() {
        try {
            java.util.List<CoreContacts> listoftitleId = corecontactsRepository.findByTitleId((java.lang.String) map.get("TitlePrimaryKey"));
            if (listoftitleId.size() == 0) {
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
            org.junit.Assert.assertNotNull(map.get("CoreContactsPrimaryKey"));
            corecontactsRepository.delete((java.lang.String) map.get("CoreContactsPrimaryKey")); /* Deleting refrenced data */
            communicationtypeRepository.delete((java.lang.String) map.get("CommunicationTypePrimaryKey")); /* Deleting refrenced data */
            communicationgroupRepository.delete((java.lang.String) map.get("CommunicationGroupPrimaryKey")); /* Deleting refrenced data */
            cityRepository.delete((java.lang.String) map.get("CityPrimaryKey")); /* Deleting refrenced data */
            stateRepository.delete((java.lang.String) map.get("StatePrimaryKey")); /* Deleting refrenced data */
            countryRepository.delete((java.lang.String) map.get("CountryPrimaryKey")); /* Deleting refrenced data */
            addresstypeRepository.delete((java.lang.String) map.get("AddressTypePrimaryKey")); /* Deleting refrenced data */
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
