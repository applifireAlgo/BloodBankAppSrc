Ext.define('Bloodbank.view.querybuildernewmodel.querystructure.QueryStructureStore', {
    extend: 'Ext.data.Store',
    requires:['Bloodbank.view.querybuildernewmodel.querystructure.QueryStructureModel'],
    autoSync: false,
    model: 'Bloodbank.view.querybuildernewmodel.querystructure.QueryStructureModel',
    filters: []
  
});
