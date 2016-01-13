Ext.define('Bloodbank.view.reportui.ReportView', {
	extend : 'Ext.panel.Panel',
	requires : [ 'Bloodbank.view.reportui.querycriteria.QueryCriteriaView',
			'Bloodbank.view.reportui.datachart.DataChartViewTab',
			'Bloodbank.view.reportui.datachart.DataChartViewPanel',
			'Bloodbank.view.reportui.ReportViewController' ,
			'Bloodbank.view.fw.MainDataPointPanel',
			'Bloodbank.view.googlemaps.map.MapPanel'
			],
	xtype : 'reportview',
	controller : 'reportviewController',
	layout : 'border',
	reportWidgets :["1","2","3","4"],
	//autoScroll : true,
	//margin : '3 0 5 0',
	height:500,
	width:"100%",
	listeners : {
		scope : 'controller',
		afterrender : 'renderReport'
	}
});
