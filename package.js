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
   ], 'client');

   api.add_files([
       'license.js',
       'lib/iron-router-resource.js',
       '.npm/package/node_modules/inflection/lib/inflection.js'
   ], 'client');
});

Package.on_test(function(api){
   api.use(['iron-router', 'iron-router-resource', 'tinytest', 'test-helpers'], 'client');

   api.add_files(['tests/iron-router-resource-test.js'], 'client');
});