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

@Table(name = "ast_RegisterACamp_T")
@Entity
@Cache(type = CacheType.CACHE)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "2", comments = "RegisterACamp", complexity = Complexity.LOW)
@NamedQueries({ @javax.persistence.NamedQuery(name = "RegisterACamp.findByAddress", query = "select e from RegisterACamp e where e.systemInfo.activeStatus=1 and e.address.addressId=:addressId"), @javax.persistence.NamedQuery(name = "RegisterACamp.findById", query = "select e from RegisterACamp e where e.systemInfo.activeStatus=1 and e.registerACampId =:registerACampId") })
public class RegisterACamp implements Serializable, CommonEntityInterface, Comparator<RegisterACamp> {

    @Column(name = "organisationName")
    @JsonProperty("organisationName")
    @NotNull
    @Size(min = 0, max = 256)
    private String organisationName;

    @Column(name = "reasonForCamp")
    @JsonProperty("reasonForCamp")
    @NotNull
    @Size(min = 0, max = 256)
    private String reasonForCamp;

    @Column(name = "bloodBankName")
    @JsonProperty("bloodBankName")
    @NotNull
    @Size(min = 0, max = 256)
    private String bloodBankName;

    @Column(name = "fromDate")
    @JsonProperty("fromDate")
    @NotNull
    @JsonSerialize(using = CustomJsonTimestampSerializer.class)
    @JsonDeserialize(using = CustomJsonTimestampDeserializer.class)
    private Timestamp fromDate;

    @Column(name = "toDate")
    @JsonProperty("toDate")
    @NotNull
    @JsonSerialize(using = CustomJsonTimestampSerializer.class)
    @JsonDeserialize(using = CustomJsonTimestampDeserializer.class)
    private Timestamp toDate;

    @Column(name = "noOfDonorsExpected")
    @JsonProperty("noOfDonorsExpected")
    @NotNull
    @Min(0)
    @Max(2147483647)
    private Integer noOfDonorsExpected;

    @Column(name = "noOfDonorsThatArrived")
    @JsonProperty("noOfDonorsThatArrived")
    @NotNull
    @Min(0)
    @Max(1000000000)
    private Integer noOfDonorsThatArrived;

    @Column(name = "noOfDonorsThatBled")
    @JsonProperty("noOfDonorsThatBled")
    @NotNull
    @Min(0)
    @Max(100000000)
    private Integer noOfDonorsThatBled;

    @Column(name = "campTime")
    @JsonProperty("campTime")
    @NotNull
    @Size(min = 0, max = 256)
    private String campTime;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "registerACampId")
    @JsonProperty("registerACampId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String registerACampId;

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

    public String getOrganisationName() {
        return organisationName;
    }

    public void setOrganisationName(String _organisationName) {
        if (_organisationName != null) {
            this.organisationName = _organisationName;
        }
    }

    public String getReasonForCamp() {
        return reasonForCamp;
    }

    public void setReasonForCamp(String _reasonForCamp) {
        if (_reasonForCamp != null) {
            this.reasonForCamp = _reasonForCamp;
        }
    }

    public String getBloodBankName() {
        return bloodBankName;
    }

    public void setBloodBankName(String _bloodBankName) {
        if (_bloodBankName != null) {
            this.bloodBankName = _bloodBankName;
        }
    }

    public Timestamp getFromDate() {
        return fromDate;
    }

    public void setFromDate(Timestamp _fromDate) {
        if (_fromDate != null) {
            this.fromDate = _fromDate;
        }
    }

    public Timestamp getToDate() {
        return toDate;
    }

    public void setToDate(Timestamp _toDate) {
        if (_toDate != null) {
            this.toDate = _toDate;
        }
    }

    public Integer getNoOfDonorsExpected() {
        return noOfDonorsExpected;
    }

    public void setNoOfDonorsExpected(Integer _noOfDonorsExpected) {
        if (_noOfDonorsExpected != null) {
            this.noOfDonorsExpected = _noOfDonorsExpected;
        }
    }

    public Integer getNoOfDonorsThatArrived() {
        return noOfDonorsThatArrived;
    }

    public void setNoOfDonorsThatArrived(Integer _noOfDonorsThatArrived) {
        if (_noOfDonorsThatArrived != null) {
            this.noOfDonorsThatArrived = _noOfDonorsThatArrived;
        }
    }

    public Integer getNoOfDonorsThatBled() {
        return noOfDonorsThatBled;
    }

    public void setNoOfDonorsThatBled(Integer _noOfDonorsThatBled) {
        if (_noOfDonorsThatBled != null) {
            this.noOfDonorsThatBled = _noOfDonorsThatBled;
        }
    }

    public String getCampTime() {
        return campTime;
    }

    public void setCampTime(String _campTime) {
        if (_campTime != null) {
            this.campTime = _campTime;
        }
    }

    public String getPrimaryKey() {
        return registerACampId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return registerACampId;
    }

    public String getRegisterACampId() {
        return registerACampId;
    }

    public void setRegisterACampId(String _registerACampId) {
        this.registerACampId = _registerACampId;
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
    public int compare(RegisterACamp object1, RegisterACamp object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((bloodBankName == null ? " " : bloodBankName) + ",");
        sb.append((campTime == null ? " " : campTime));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (registerACampId == null) {
            return super.hashCode();
        } else {
            return registerACampId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.bloodbank.RegisterACamp other = (com.app.shared.bloodbank.RegisterACamp) obj;
            if (registerACampId == null) {
                return false;
            } else if (!registerACampId.equals(other.registerACampId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
