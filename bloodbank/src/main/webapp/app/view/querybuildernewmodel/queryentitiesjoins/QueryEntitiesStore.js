Ext.define('Bloodbank.view.querybuildernewmodel.queryentitiesjoins.QueryEntitiesStore', {
    extend: 'Ext.data.Store',
   // requires:['Bloodbank.view.querybuildernewmodel.queryentitiesjoins.QueryEntitiesModel'],
    autoSync: false,
    model: 'Bloodbank.view.querybuildernewmodel.queryentitiesjoins.QueryEntitiesModel',
    data:[]
});
