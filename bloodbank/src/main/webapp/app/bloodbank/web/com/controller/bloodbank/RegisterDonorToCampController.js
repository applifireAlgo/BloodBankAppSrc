Ext.define('Bloodbank.bloodbank.web.com.controller.bloodbank.RegisterDonorToCampController', {
     extend: 'Bloodbank.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.RegisterDonorToCampController',
     onSubmitclick: function(me, e, eOpts) {
          var component = new Ext.create('Bloodbank.bloodbank.web.com.view.bloodbank.DonorVisitMain', {
               disableDB: true,
               closable: true
          });
          component.title = 'DonorVisit';
          var tabs = Ext.getCmp('appMainTabPanel');
          tabs.addTab(component);
     },
     onResetclick: function(me, e, eOpts) {
          var form = me.up('form');
          form.reset();
     }
});