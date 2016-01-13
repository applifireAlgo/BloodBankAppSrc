Ext.define('Bloodbank.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsStore', {
    extend: 'Ext.data.Store',
    requires:['Bloodbank.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel'],
    autoSync: false,
    model: 'Bloodbank.view.querybuildernewmodel.queryentitiesjoins.QueryFieldsModel',
    filters: []
  
});
