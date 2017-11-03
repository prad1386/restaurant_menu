# Actions

Actions are just things that happen.
- most actions are user events (clicked a button, submitted a form, etc...)
- can also be other events such as an API call returning data

### Actions are (usually) made up of two parts


**type** - describes the action that occurred
```
BUTTON_CLICKED
```


**payload** - *(optional)* any extra data that is needed
```
{
    cat_id: 1,
    cat_name: "ABC",
    cat_desc: "lorem ipsum"
}
```

## Actions vs. Action Creators

Action creators are functions that create objects, actions are the objects that get created.

**Action creator**
```
export default function () {
    return {
       cat_id: 1,
       cat_name: "ABC",
       cat_desc: "lorem ipsum"
    }
}
```

**Action**
```
{
    cat_id: 1,
	cat_name: "ABC",
    cat_desc: "lorem ipsum"
}
```

## What happens next?

All actions are automatically sent to **all** reducers. It is the reducers job to determine how to handle that action
(can also just ignore it).

## index.js 

This action is fired when main category is clicked on the left panel.

## meal_selected.js

This action is fired when some menu item is clicked under the main category. Sub category items. 