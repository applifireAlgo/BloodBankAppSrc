Ext.define('Bloodbank.view.fw.DataPointPanel',{
	extend : 'Ext.panel.Panel',
	xtype: 'dataPointPanel',
	cls: 'kpi-main',
	dpData : [],
	//border:2,
	requires: ['Bloodbank.view.fw.DataPointPanelController'],
	
	controller:'dataPointPanelController',
	
	items: [{
        xtype: 'component',
        itemId:'dataPointPanelId', 
      //  cls: 'kpi-tiles',

        tpl: [
            '<div class="kpi-meta">',
                '<tpl for=".">',
                    '<span style="width:{width}px;background: {color};" >',
                        '<div >{statistic}</div> {description}',
                    '</span>',
                '</tpl>',
            '</div>'
        ],

        
	}]
});