Ext.define('Bloodbank.bloodbank.shared.com.model.bloodbank.DonorVisitModel', {
     "extend": "Ext.data.Model",
     "fields": [{
          "name": "primaryKey",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "donorVisitId",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "orgnizerName",
          "type": "string",
          "defaultValue": ""
     }, {
          "name": "campid",
          "reference": "RegisterACamp",
          "defaultValue": ""
     }, {
          "name": "donor",
          "reference": "RegisterADonor",
          "defaultValue": ""
     }, {
          "name": "donationtype",
          "reference": "DonationType",
          "defaultValue": ""
     }, {
          "name": "versionId",
          "type": "int",
          "defaultValue": ""
     }, {
          "name": "ClinicalInfo",
          "reference": "ClinicalInfoModel"
     }, {
          "name": "entityAudit",
          "reference": "EntityAudit"
     }, {
          "name": "primaryDisplay",
          "type": "string",
          "defaultValue": ""
     }]
});