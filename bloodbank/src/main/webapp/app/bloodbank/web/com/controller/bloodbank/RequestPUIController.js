Ext.define('Bloodbank.bloodbank.web.com.controller.bloodbank.RequestPUIController', {
     extend: 'Bloodbank.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.RequestPUIController',
     onAcceptclick: function(me, e, eOpts) {
          var jsonData = {};
          var scope = this.getView();
          Ext.Ajax.request({
               url: 'secure/BloodRequest/findById',
               method: 'POST',
               sender: scope,
               jsonData: jsonData,
               me: me,
               success: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    if (responseData.response.success) {
                         var component = new Ext.create('Bloodbank.bloodbank.web.com.view.bloodbank.RegisterADonorToCamp');
                         component.closable = true;
                         var tabs = Ext.getCmp('appMainTabPanel');
                         tabs.add(component);
                         tabs.setActiveTab(component);
                         component.controller.setData(responseData.response.data);
                    } else {
                         Ext.Msg.alert('Server Response', responseData.response.message);
                    }
               },
               failure: function(response, scope) {
                    responseData = Ext.JSON.decode(response.responseText);
                    Ext.Msg.alert('Server Response', responseData.response.message);
               }
          }, scope);
     }
});