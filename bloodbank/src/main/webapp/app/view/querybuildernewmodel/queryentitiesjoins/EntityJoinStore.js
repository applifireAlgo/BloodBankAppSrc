Ext.define('Bloodbank.view.querybuildernewmodel.queryentitiesjoins.EntityJoinStore', {
    extend: 'Ext.data.Store',
    requires:['Bloodbank.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel'],
    autoSync: false,
    model: 'Bloodbank.view.querybuildernewmodel.queryentitiesjoins.EntityJoinModel',
    data:[]
});
