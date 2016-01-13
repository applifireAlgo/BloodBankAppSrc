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
import java.sql.Timestamp;
import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import com.athena.config.jsonHandler.CustomJsonTimestampSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.athena.config.jsonHandler.CustomJsonTimestampDeserializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.persistence.Transient;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
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

@Table(name = "ast_BloodResult_T")
@Entity
@Cache(type = CacheType.CACHE)
@SourceCodeAuthorClass(createdBy = "john.doe", updatedBy = "john.doe", versionNumber = "4", comments = "BloodResult", complexity = Complexity.LOW)
@NamedQueries({ @javax.persistence.NamedQuery(name = "BloodResult.findByDonorVisit", query = "select e from BloodResult e where e.systemInfo.activeStatus=1 and e.donorVisit=:donorVisit"), @javax.persistence.NamedQuery(name = "BloodResult.findById", query = "select e from BloodResult e where e.systemInfo.activeStatus=1 and e.bloodResultId =:bloodResultId") })
public class BloodResult implements Serializable, CommonEntityInterface, Comparator<BloodResult> {

    @Column(name = "collectedDate")
    @JsonProperty("collectedDate")
    @NotNull
    @JsonSerialize(using = CustomJsonTimestampSerializer.class)
    @JsonDeserialize(using = CustomJsonTimestampDeserializer.class)
    private Timestamp collectedDate;

    @Column(name = "expirydate")
    @JsonProperty("expirydate")
    @NotNull
    @JsonSerialize(using = CustomJsonTimestampSerializer.class)
    @JsonDeserialize(using = CustomJsonTimestampDeserializer.class)
    private Timestamp expirydate;

    @Column(name = "isTested")
    @JsonProperty("isTested")
    @NotNull
    private Boolean isTested = false;

    @Column(name = "noOfUnits")
    @JsonProperty("noOfUnits")
    @NotNull
    @Min(0)
    @Max(1000)
    private Integer noOfUnits;

    @Column(name = "donor")
    @JsonProperty("donor")
    private String donor;

    @Transient
    private String primaryKey;

    @Id
    @Column(name = "bloodResultId")
    @JsonProperty("bloodResultId")
    @GeneratedValue(generator = "UUIDGenerator")
    private String bloodResultId;

    @Column(name = "donorVisit")
    @JsonProperty("donorVisit")
    private String donorVisit;

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

    public Timestamp getCollectedDate() {
        return collectedDate;
    }

    public void setCollectedDate(Timestamp _collectedDate) {
        if (_collectedDate != null) {
            this.collectedDate = _collectedDate;
        }
    }

    public Timestamp getExpirydate() {
        return expirydate;
    }

    public void setExpirydate(Timestamp _expirydate) {
        if (_expirydate != null) {
            this.expirydate = _expirydate;
        }
    }

    public Boolean getIsTested() {
        return isTested;
    }

    public void setIsTested(Boolean _isTested) {
        if (_isTested != null) {
            this.isTested = _isTested;
        }
    }

    public Integer getNoOfUnits() {
        return noOfUnits;
    }

    public void setNoOfUnits(Integer _noOfUnits) {
        if (_noOfUnits != null) {
            this.noOfUnits = _noOfUnits;
        }
    }

    public String getDonor() {
        return donor;
    }

    public void setDonor(String _donor) {
        this.donor = _donor;
    }

    public String getPrimaryKey() {
        return bloodResultId;
    }

    public void setPrimaryKey(String _primaryKey) {
        this.primaryKey = _primaryKey;
    }

    public String _getPrimarykey() {
        return bloodResultId;
    }

    public String getBloodResultId() {
        return bloodResultId;
    }

    public void setBloodResultId(String _bloodResultId) {
        this.bloodResultId = _bloodResultId;
    }

    public String getDonorVisit() {
        return donorVisit;
    }

    public void setDonorVisit(String _donorVisit) {
        this.donorVisit = _donorVisit;
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
    public int compare(BloodResult object1, BloodResult object2) {
        return 0;
    }

    public String getPrimaryDisplay() {
        StringBuilder sb = new StringBuilder();
        sb.append("");
        sb.append((isTested == null ? " " : isTested) + ",");
        sb.append((noOfUnits == null ? " " : noOfUnits) + ",");
        sb.append((donorVisit.toString() == null ? " " : donorVisit.toString()));
        return sb.toString();
    }

    public String toString() {
        return getPrimaryDisplay();
    }

    public int hashCode() {
        if (bloodResultId == null) {
            return super.hashCode();
        } else {
            return bloodResultId.hashCode();
        }
    }

    public boolean equals(Object obj) {
        try {
            com.app.shared.bloodbank.BloodResult other = (com.app.shared.bloodbank.BloodResult) obj;
            if (bloodResultId == null) {
                return false;
            } else if (!bloodResultId.equals(other.bloodResultId)) {
                return false;
            }
        } catch (java.lang.Exception ignore) {
            return false;
        }
        return true;
    }
}
