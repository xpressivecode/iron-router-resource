_.extend(IronRouter.prototype, {
    mapResource: function(resource){
        var router = this;
        var routes = [
            { name: resource, path: '/' + resource, action: 'index' },
            { name: 'edit-' + resource, path: '/' + resource + '/edit/:id', action: 'edit' },
            { name: 'show-' + resource, path: '/' + resource + '/:id', action: 'show' }
        ];

        _.each(routes, function(route, index){
            router.map(function(){

                this.route(route.name, {
                    path: route.path,
                    controller: resource + 'Controller',
                    action: route.action
                });
            });
        });
    }
});