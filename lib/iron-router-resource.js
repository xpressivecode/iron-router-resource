_.extend(IronRouter.prototype, {
    resource: function(resource){
        if(!_.isString(resource))throw new Error('resource requires a string as the first parameter');

        var capitalize = function(s){
            return s.charAt(0).toUpperCase() + s.slice(1);
        };

        var router = this;
        var base = '/' + resource;
        var single = inflection.singularize(resource);

        single = capitalize(single);

        var routes = [
            { name: resource, path: base, action: 'index' },
            { name: 'edit' + single, path: base + '/edit/:id', action: 'edit' },
            { name: 'show' + single, path: base + '/:id', action: 'show' },
            { name: 'new' + single, path: base + '/new', action: 'new' },
            { name: 'create' + single, path: base + '/create', action: 'create' },
            { name: 'delete' + single, path: base + '/delete/:id', action: 'delete' },
            { name: 'destroy' + single, path: base + '/destroy/:id', action: 'destroy' }
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