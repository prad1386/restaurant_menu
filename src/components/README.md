## Containers vs. Components

Containers are very similar to components, the only difference is that containers are aware of application state. If
part of your webpage is only used for displaying data (dumb) then make it a component. If you need it to be smart and
aware of the state (whenever data changes) in the application then make it a container.

## app.js

This is the primary view in the application having main categories listed in left panel and sub categories in the right panel when clicked.

## order.js

This is the second view in the application having final order listed. Selected menu item from the category. 