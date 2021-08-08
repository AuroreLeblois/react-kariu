# react-kariu
A simple library of components for react users.

## Documentation

You can check the documentation here :
https://master--608041216ca77600211c434a.chromatic.com

## npm install

```
npm i react-kariu
```

## Import components in your project

```
import { ComponentName, OtherComponent } from 'react-kariu'
```

### Components available for now
- Avatar
- Button
- Input (most of them: style in-progress) including:
  - Checkbox
  - Radio
  - DatePicker
  - Password
- Icon (just a few: addition in-progress)
- Loading ( work-in-progress to put it in all components )
- navigation : Sidenav, NavBar and NavItem
- Portal (to make a component go out of the DOM: documentation in-progress)
- Text
- Title
- Tooltip
- Modal: Build your modal with:
  - ModalItem
  - ModalHeader
  - ModalFooter
- Map (with leaflet)
- Select
- Dropdown
- Card

## Map with LEAFLET:
This component won't replace leaflet!
You will still need to import leaflet css!
If you wish to use either the default markers or the 'default' custom markers:
```jsx
import 'leaflet/dist/leaflet.css';
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/images/marker-icon-2x.png'
import  icon from 'react-kariu/src/elements/Map/marker.png'
```
