package com.app.shared.bloodbankboundedcontext.bloodbank;
import javax.validation.constraints.Min;
import javax.validation.constraints.Max;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class RequestPUI {

    @Min(0)
    @Max(65535)
    private String bloodGroup;

    @Min(0)
    @Max(65535)
    private String requestedByDoctor;

    @Min(0)
    @Max(65535)
    private String dateNeededBy;

    @Min(0)
    @Max(65535)
    private String noOfUnits;

    public String getBloodGroup() {
        return bloodGroup;
    }

    public void setBloodGroup(String _bloodGroup) {
        this.bloodGroup = _bloodGroup;
    }

    public String getRequestedByDoctor() {
        return requestedByDoctor;
    }

    public void setRequestedByDoctor(String _requestedByDoctor) {
        this.requestedByDoctor = _requestedByDoctor;
    }

    public String getDateNeededBy() {
        return dateNeededBy;
    }

    public void setDateNeededBy(String _dateNeededBy) {
        this.dateNeededBy = _dateNeededBy;
    }

    public String getNoOfUnits() {
        return noOfUnits;
    }

    public void setNoOfUnits(String _noOfUnits) {
        this.noOfUnits = _noOfUnits;
    }
}
