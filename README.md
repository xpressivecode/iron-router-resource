#Iron Router Resource

Extends [Iron-Router](https://github.com/EventedMind/iron-router), allowing you to quickly add standard CRUD routes for your resources.

#Basics

Assumes that you provide the pluralized version of your resource, `items` not `item`.

Assuming you have a collection called `items` you would call:

```
Router.map(function(){
    this.route(...); //regular route

    this.resource('items'); //resource route which will create crud routes for you based on the resource name
});
```

This would generate routes for index, show, edit, etc. all pointing to an `itemsController` with an action of the appropriate name.

The routes currently look like the following (note the plural/single usage):

name: {resources}, path: /{resources}

name: show-{resource}, path: /{resources}/:id, action: show

name: new-{resource}, path: /{resources}/new, action: new

name: create-{resource}, path: /{resources}/create, action: create

name: edit-{resource}, path: /{resources}/edit/:id, action: edit

name: delete-{resource}, path: /{resources}/delete/:id, action: delete

name: destroy-{resource}, path: /{resources}/destroy/:id, action: destroy
