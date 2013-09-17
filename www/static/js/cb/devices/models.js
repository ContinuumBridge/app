(function($){

	window.Device = Backbone.RelationalModel.extend({

        idAttribute: 'id',

        initialize: function() {
            
            
        },

    }); 


    window.DeviceCollection = Backbone.Collection.extend({
        model: Device,
        backend: 'devices',

		initialize: function() {
			this.bindBackend();
		},
		
        parse : function(response){
            console.log('response was %s', response);
            return response.objects;
        },

        test: function() {
            console.log('Hello there');
        },

    });
    
    window.deviceList = new DeviceCollection();
    window.deviceList.fetch();

})(jQuery);
