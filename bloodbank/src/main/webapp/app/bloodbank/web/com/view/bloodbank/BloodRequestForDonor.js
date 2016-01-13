Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.BloodRequestForDonor', {
     "xtype": "bloodRequestForDonor",
     "name": "BloodRequest",
     "items": [{
          "xtype": "listViewBaseView",
          "name": "req",
          "isListPanel": true,
          "autoScroll": true,
          "border": false,
          "layout": "column",
          "defaults": {
               "columnWidth": "1.0"
          },
          "templateConfig": {
               "uiId": "88AD255E-AFFC-4377-99A3-EAE47449D709",
               "uiClass": "Bloodbank.bloodbank.web.com.view.bloodbank.RequestPUI",
               "uiType": 2,
               "url": "secure/BloodRequest/findAll",
               "requestMethodType": "GET"
          },
          "padding": 0,
          "margin": 5,
          "itemId": "mdfbjfi",
          "dockedItems": []
     }],
     "margin": 5,
     "border": true,
     "title": "Blood Request",
     "header": {
          "style": {
               "background": "#FF99CC"
          },
          "title": "Blood Request"
     },
     "itemId": "ogaaaoi",
     "dockedItems": [],
     "extend": "Ext.panel.Panel",
     "layout": "fit",
     "requires": ["Bloodbank.bloodbank.web.com.controller.bloodbank.BloodRequestForDonorController", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.BloodRequestForDonorViewModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodRequestForDonorModel", "Bloodbank.view.fw.component.ListViewBaseView"],
     "viewModel": "BloodRequestForDonorViewModel",
     "controller": "BloodRequestForDonorController"
});