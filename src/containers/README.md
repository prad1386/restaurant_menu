# Containers

Containers fetch state data and use it to render (display) components.
- state data will become components props

Containers are similar to components. However, only containers have access to state data in Redux.
- components are sometimes called "dumb components" or "presentational components"

#category-list.js

This container fetch the state from the store and list the main categories in the left panel.

#category-details.js

This container fetch the respective sub categories from the selected main category and list the items in the right panel.

#meal-details.js 

This container will finally give the selected meal option. Used in the second view to list it.