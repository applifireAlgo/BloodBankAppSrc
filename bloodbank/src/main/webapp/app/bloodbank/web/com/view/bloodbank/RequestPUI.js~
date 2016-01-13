Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.RequestPUI', {
     "xtype": "requestPUI",
     "name": "Request",
     "items": [{
          "xtype": "combo",
          "name": "bloodGroup",
          "margin": 5,
          "bindable": "bloodGroup",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Require",
          "displayField": "bloodGroup",
          "valueField": "bloodGroupId",
          "title": "Require",
          "readOnly": true,
          "itemId": "abejdfi",
          "store": {
               "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "bloodGroup",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/BloodGroup/findAll",
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
          "bind1": "{bloodGroup}"
     }, {
          "xtype": "displayfield",
          "fieldLabel": "Requested By Dr.",
          "margin": 5,
          "bindable": "requestedByDoctor",
          "name": "requestedByDoctor",
          "title": "Requested By Dr.",
          "itemId": "bndhlli",
          "bind1": "{requestedByDoctor}"
     }, {
          "xtype": "displayfield",
          "fieldLabel": "Date Needed By",
          "margin": 5,
          "bindable": "dateNeededBy",
          "name": "dateNeededBy",
          "title": "Date Needed By",
          "itemId": "hlllngi",
          "bind1": "{dateNeededBy}"
     }, {
          "xtype": "displayfield",
          "fieldLabel": "Units Of Blood",
          "margin": 5,
          "bindable": "noOfUnits",
          "name": "noOfUnits",
          "title": "Units Of Blood",
          "itemId": "odoolpi",
          "bind1": "{noOfUnits}"
     }],
     "border": true,
     "autoScroll": true,
     "title": "Request",
     "margin": 5,
     "header": {
          "style": {
               "background": "#FF99CC"
          },
          "title": "Request"
     },
     "isPartialUI": true,
     "itemId": "klhbbfi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "onofnei"
          }, {
               "xtype": "button",
               "name": "Accept",
               "pluginName": "geolocation",
               "isNativeWidget": true,
               "isNativeGeoBtn": true,
               "text": "Accept",
               "margin": 5,
               "isLinkBtn": true,
               "itemId": "nicmbbi",
               "listeners": {
                    "click": "onAcceptclick"
               }
          }, {
               "xtype": "button",
               "name": "Reject",
               "pluginName": "geolocation",
               "isNativeWidget": true,
               "isNativeGeoBtn": true,
               "text": "Reject",
               "margin": 5,
               "itemId": "bfaelii"
          }],
          "itemId": "kebjcai",
          "dockedItems": []
     }],
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.RequestPUIController", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.RequestPUIViewModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.RequestPUIModel"],
     "extend": "Ext.form.Panel",
     "viewModel": "RequestPUIViewModel",
     "controller": "RequestPUIController"
});
