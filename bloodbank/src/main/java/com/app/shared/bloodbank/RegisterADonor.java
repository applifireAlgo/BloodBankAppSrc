package com.app.shared.bloodbank;
import com.athena.annotation.Complexity;
import com.athena.annotation.SourceCodeAuthorClass;
import com.athena.framework.shared.entity.web.entityInterface.CommonEntityInterface;
import java.io.Serializable;
import java.util.Comparator;
import javax.persistence.Entity;
import javax.persistence.Table;
import org.eclipse.persistence.annotations.Cache;
import org.eclipse.persistence.annotations.CacheType;
import com.fasterxml.jackson.annotation.JsonProperty;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.sql.Timestamp;
import com.athena.config.jsonHandler.CustomJsonTimestampSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.athena.config.jsonHandler.CustomJsonTimestampDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import com.app.shared.location.Address;
import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import com.athena.framework.server.helper.EntityValidatorHelper;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.Version;
import com.app.shared.EntityAudit;
import javax.persistence.Embedded;
import com.app.shared.SystemInfo;
import com.athena.framework.server.exception.biz.SpartanConstraintViolationException;
import com.athena.framework.server.exception.biz.SpartanIncorrectDataException;
import java.lang.Override;
import javax.persistence.NamedQueries;

@Table(name = "ast_RegisterADonor_T")
@Entity
@Cache(type = CacheType.CACHE)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "4", comments = "RegisterADonor", complexity = Complexity.LOW)
@NamedQueries({ @javax.persistence.NamedQuery(name = "RegisterADonor.DefaultFinders", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.donorName LIKE :donorName"), @javax.persistence.NamedQuery(name = "RegisterADonor.findByGender", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.gender=:gender"), @javax.persistence.NamedQuery(name = "RegisterADonor.findByBloodGroup", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.bloodGroup=:bloodGroup"), @javax.persistence.NamedQuery(name = "RegisterADonor.findByAddress", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.address.addressId=:addressId"), @javax.persistence.NamedQuery(name = "RegisterADonor.findById", query = "select e from RegisterADonor e where e.systemInfo.activeStatus=1 and e.registerADonorId =:registerADonorId") })
public class RegisterADonor implements Serializable, CommonEntityInterface, Comparator<RegisterADonor> {

    @Column(name = "donorName")
    @JsonProperty("donorName")
    @NotNull
    @Size(min = 0, max = 256)
    private String donorName;

    @Column(name = "dateOfBirth")
    @JsonProperty("dateOfBirth")
    @NotNull
    @JsonSerialize(using = CustomJsonTimestampSerializer.class)
    @JsonDeserialize(using = CustomJsonTimestampDeserializer.class)
    private Timestamp dateOfBirth;

    @Column(name = "phoneNo")
    @JsonProperty("phoneNo")
    @NotNull
    @Size(min = 0, max = 256)
    private String phoneNo;

    @Column(name = "emailId")
    @JsonProperty("emailId")
    @NotNull
    @Size(min = 0, max = 256)
    private String emailId;

    @Column(name = "lastDonationDate")
    @JsonProperty("lastDonationDate")
    @NotNull
    @JsonSerialize(using = CustomJsonTimestampSerializer.class)
    @JsonDeserialize(using = CustomJsonTimestampDeserializer.class)
    private Timestamp lastDonationDate;

    @Column(name = "howoftenyoudonatedinpast")
    @JsonProperty("howoftenyoudonatedinpast")
    @NotNull
    @Min(-2147483648L)
    @Max(2147483647)
    private Integer howoftenyoudonatedinpast;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "registerADonorId")
    @JsonProperty("registerADonorId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String registerADonorId;

    @Column(name = "gender")
    @JsonProperty("gender")
    private String gender;

    @Column(name = "bloodGroup")
    @JsonProperty("bloodGroup")
    private String bloodGroup;

    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "address", referencedColumnName = "addressId")
    private Address address;

    @Transient
    @JsonIgnore
    private EntityValidatorHelper<Object> entityValidator;

    @Version
    @Column(name = "versionId")
    @JsonProperty("versionId")
    private int versionId;

    @Embedded
    @JsonIgnore
    private EntityAudit entityAudit = new EntityAudit();

    @Embedded
    private SystemInfo systemInfo = new SystemInfo();

    @Transient
    private String primaryDisplay;

    public String getDonorName() {
        return donorName;
    }

    public void setDonorName(String _donorName) {
        if (_donorName != null) {
            this.donorName = _donorName;
        }
    }

    public Timestamp getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Timestamp _dateOfBirth) {
        if (_dateOfBirth != null) {
            this.dateOfBirth = _dateOfBirth;
        }
    }

    public String getPhoneNo() {
        return phoneNo;
    }

    public void setPhoneNo(String _phoneNo) {
        if (_phoneNo != null) {
            this.phoneNo = _phoneNo;
        }
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String _emailId) {
        if (_emailId != null) {
            this.emailId = _emailId;
        }
    }

    public Timestamp getLastDonationDate() {
        return lastDonationDate;
    }

    public void setLastDonationDate(Timestamp _lastDonationDate) {
        if (_lastDonationDate != null) {
            this.lastDonationDate = _lastDonationDate;
        }
    }

    public Integer getHowoftenyoudonatedinpast() {
        return howoftenyoudonatedinpast;
    }

    public void setHowoftenyoudonatedinpast(Integer _howoftenyoudonatedinpast) {
        if (_howoftenyoudonatedinpast != null) {
            this.howoftenyoudonatedinpast = _howoftenyoudonatedinpast;
        }
    }

    public String getPrimaryKey() {
        return registerADonorId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return registerADonorId;
    }

    public String getRegisterADonorId() {
        return registerADonorId;
    }

    public void setRegisterADonorId(String _registerADonorId) {
        this.registerADonorId = _registerADonorId;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String _gender) {
        this.gender = _gender;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String _bloodGroup) {
        this.bloodGroup = _bloodGroup;
    }

    public int getVersionId() {
        return versionId;
    }

    public void setVersionId(int _versionId) {
        this.versionId = _versionId;
    }

    public void setPrimaryDisplay(String _primaryDisplay) {
        this.primaryDisplay = _primaryDisplay;
    }

    public SystemInfo getSystemInfo() {
        return systemInfo;
    }

    public void setSystemInfo(SystemInfo _systemInfo) {
        this.systemInfo = _systemInfo;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address _address) {
        this.address = _address;
    }

    @JsonIgnore
    public boolean isHardDelete() {
        if (this.systemInfo == null) {
            this.systemInfo = new SystemInfo();
        }
        if (this.systemInfo.getActiveStatus() == -1) {
            return true;
        } else {
            return false;
        }
    }

    @JsonIgnore
    @Override
    public boolean isValid() throws SpartanConstraintViolationException, SpartanIncorrectDataException {
        boolean isValid = false;
        if (this.entityValidator != null) {
            isValid = this.entityValidator.validateEntity(this);
        } else {
            throw new SpartanIncorrectDataException("Entity validator is not set");
        }
        return isValid;
    }

    @Override
    public void setEntityValidator(EntityValidatorHelper<Object> _validateFactory) {
        this.entityValidator = _validateFactory;
    }

    @Override
    public void setEntityAudit(int customerId, String userId, RECORD_TYPE recordType) {
        System.out.println("Setting logged in user info for " + recordType);
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (recordType == RECORD_TYPE.ADD) {
            this.entityAudit.setCreatedBy(userId);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
        setSystemInformation(recordType);
    }

    @Override
    public void setEntityAudit(int customerId, String userId) {
        if (entityAudit == null) {
            entityAudit = new EntityAudit();
        }
        if (getPrimaryKey() == null) {
            this.entityAudit.setCreatedBy(userId);
            this.systemInfo.setActiveStatus(1);
        } else {
            this.entityAudit.setUpdatedBy(userId);
        }
    }

    @JsonIgnore
    public String getLoggedInUserInfo() {
        String auditInfo = "";
        if (this.entityAudit != null) {
            auditInfo = entityAudit.toString();
        }
        return auditInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemInformation(RECORD_TYPE recordType) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        if (recordType == RECORD_TYPE.DELETE) {
            this.systemInfo.setActiveStatus(0);
        } else {
            this.systemInfo.setActiveStatus(1);
        }
    }

    @JsonIgnore
    public void setSystemInformation(Integer activeStatus) {
        this.systemInfo.setActiveStatus(activeStatus);
    }

    @JsonIgnore
    public String getSystemInformation() {
        String systemInfo = "";
        if (this.systemInfo != null) {
            systemInfo = systemInfo.toString();
        }
        return systemInfo;
    }

    @Override
    @JsonIgnore
    public void setSystemTxnCode(Integer transactionAccessCode) {
        if (systemInfo == null) {
            systemInfo = new SystemInfo();
        }
        this.systemInfo.setTxnAccessCode(transactionAccessCode);
    }

    @Override
    public int compare(RegisterADonor object1, RegisterADonor object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((donorName == null ? " " : donorName) + ",");
        sb.append((address.getPrimaryDisplay().toString() == null ? " " : address.getPrimaryDisplay().toString()));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (registerADonorId == null) {
            return super.hashCode();
        } else {
            return registerADonorId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.bloodbank.RegisterADonor other = (com.app.shared.bloodbank.RegisterADonor) obj;
            if (registerADonorId == null) {
                return false;
            } else if (!registerADonorId.equals(other.registerADonorId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
