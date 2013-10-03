Package.describe({
    summary: "Resource routing module for iron-router"
});

Package.on_use(function(api){
   Npm.depends({
       "inflection": "1.2.6"
   });

   api.use([
       'iron-router',
       'underscore'
   ], ['client']);

   api.add_files([
       'license.js',
       'lib/iron-router-resource.js',
       '.npm/package/node_modules/inflection/lib/inflection.js'
   ], ['client']);
});