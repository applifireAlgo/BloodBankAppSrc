Ext.define('Bloodbank.bloodbank.shared.com.model.bloodbank.RequestPUIModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "bloodGroup",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "requestedByDoctor",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "dateNeededBy",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "noOfUnits",
          "type": "string",
          "defaultValue": ""
     }]
});