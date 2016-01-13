Ext.define('Bloodbank.bloodbank.web.com.controller.bloodbank.RegisterADonorToCampController', {
     extend: 'Bloodbank.view.fw.frameworkController.FrameworkViewController',
     alias: 'controller.RegisterADonorToCampController',
     onAddclick: function(me, e, eOpts) {
          var component = new Ext.create('Bloodbank.bloodbank.web.com.view.bloodbank.DonorVisitMain', {
               disableDB: true,
               closable: true
          });
          component.title = 'DonorVisit';
          var tabs = Ext.getCmp('appMainTabPanel');
           tabs.add(component);
 tabs.setActiveTab(component);
     },
     onResetclick: function(me, e, eOpts) {
          var form = me.up('form');
          form.reset();
     }
});
