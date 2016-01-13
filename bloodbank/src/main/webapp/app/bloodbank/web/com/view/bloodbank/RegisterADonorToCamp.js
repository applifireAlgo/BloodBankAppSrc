Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.RegisterADonorToCamp', {
     "xtype": "registerADonorToCamp",
     "items": [{
          "xtype": "combo",
          "name": "Camp",
          "margin": 5,
          "bindable": "Camp",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Camp",
          "displayField": "organisationName",
          "valueField": "registerACampId",
          "title": "Camp",
          "itemId": "kbckdji",
          "isRelatedWith": "bkoaeei",
          "undefined": "camp",
          "store": {
               "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "organisationName",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/RegisterACamp/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          },
          "bind": "{Camp}"
     }, {
          "xtype": "combo",
          "name": "Donor",
          "margin": 5,
          "bindable": "Donor",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Donor",
          "displayField": "donorName",
          "valueField": "registerADonorId",
          "title": "Donor",
          "itemId": "jndldei",
          "isRelatedWith": "bkoaeei",
          "undefined": "donor",
          "store": {
               "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "donorName",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/RegisterADonor/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          },
          "bind": "{Donor}"
     }],
     "margin": 5,
     "border": true,
     "autoScroll": true,
     "title": "Register Donor To Camp",
     "itemId": "gaiecei",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "meedhni"
          }, {
               "xtype": "button",
               "name": "Add",
               "pluginName": "geolocation",
               "isNativeWidget": true,
               "isNativeGeoBtn": true,
               "text": "Add",
               "margin": 5,
               "isLinkBtn": true,
               "itemId": "aomfkii",
               "listeners": {
                    "click": "onAddclick"
               }
          }, {
               "xtype": "button",
               "name": "Reset",
               "pluginName": "geolocation",
               "isNativeWidget": true,
               "isNativeGeoBtn": true,
               "text": "Reset",
               "margin": 5,
               "isResetButton": true,
               "itemId": "mcpkebi",
               "listeners": {
                    "click": "onResetclick"
               }
          }],
          "itemId": "mhbdabi",
          "dockedItems": []
     }],
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.RegisterADonorToCampController", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.RegisterADonorToCampViewModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorToCampModel"],
     "extend": "Ext.panel.Panel",
     "viewModel": "RegisterADonorToCampViewModel",
     "controller": "RegisterADonorToCampController"
});