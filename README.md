#Iron Router Resource

Extends [Iron-Router](https://github.com/EventedMind/iron-router), allowing you to quickly add standard CRUD routes for your resources.

#Basics

Assuming you have a collection called `items` you would call:

```
Router.mapResource('items');
```

This would generate routes for index, show, edit, etc. all pointing to an `itemsController` with an action of the appropriate name.

#TODO

Singular vs. Pluralization still needs to be implemented so that your named routes are generated as expected. Right now your routes will have
the same name as the resource that you passed in.

`showitems` vs. `showItem`

