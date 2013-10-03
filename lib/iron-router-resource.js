_.extend(IronRouter.prototype, {
    mapResource: function(resource){
        var router = this;
        var base = '/' + resource;
        var routes = [
            { name: resource, path: base, action: 'index' },
            { name: 'edit-' + resource, path: base + '/edit/:id', action: 'edit' },
            { name: 'show-' + resource, path: base + '/:id', action: 'show' },
            { name: 'new-' + resource, path: base + '/new', action: 'new' },
            { name: 'create-' + resource, path: base + '/create', action: 'create' },
            { name: 'delete-' + resource, path: base + '/delete', action: 'delete' },
            { name: 'destroy-' + resource, path: base + '/destroy', action: 'destroy' }
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