Tinytest.add('Iron Router Resource - mapping a resource should create 7 routes', function(test){
    Router.map(function(){
        this.resource('items');
    });

    test.equal(Router.routes.length, 7);
});

Tinytest.add('Iron Router Resource - mapping should correctly name routes [plural]', function(test){
    test.isTrue(Router.routes.items !== null, 'expected a route called "items"');
});

Tinytest.add('Iron Router Resource - mapping should correctly name routes [singular]', function(test){
    test.isTrue(Router.routes.newItem !== null, 'expected a route called "newItem" to exist');
    test.isTrue(Router.routes.createItem !== null, 'expected a route called "createItem" to exist');
    test.isTrue(Router.routes.editItem !== null, 'expected a route called "editItem" to exist');
    test.isTrue(Router.routes.showItem !== null, 'expected a route called "showItem" to exist');
    test.isTrue(Router.routes.deleteItem !== null, 'expected a route called "deleteItem" to exist');
    test.isTrue(Router.routes.destroyItem !== null, 'expected a route called "destroyItem" to exist');
});