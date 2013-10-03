Package.describe({
    summary: "Resource routing module for iron-router"
});

Package.on_use(function(api){
   api.use([
       'iron-router',
       'underscore'
   ], ['client', 'server']);

   api.add_files([
       'license.js',
       'lib/iron-router-resource.js'
   ], ['client', 'server']);
});