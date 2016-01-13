Ext.define('Bloodbank.view.databrowsercalendar.DBCalendar', {
	extend : 'Bloodbank.view.databrowsercalendar.DBCalendarView',
	requires : [ 'Bloodbank.view.databrowsercalendar.DBCalendarController',
	             'Bloodbank.view.databrowsercalendar.DBCalendarView'],
	controller : 'databrowsercalendar',
	items : [ ],
	listeners : {
		afterrender : 'loadData',
		scope : "controller"
	}
});
