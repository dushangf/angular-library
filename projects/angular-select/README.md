# AngularSelect

[Live Demo](https://dushangf.github.io/angular-select-demo/)

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.0.

## Installation and Usage

`npm install @dushangf/angular-select`

Import AngularSelectModule and include it in the imports array inside the module you wish to use the component in.

`import { AngularSelectModule } from '@dushangf/angular-select`

```
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
```

The example is on **app.module.ts** this may change depending on the module you want to use this in (**your-component.module.ts**).

In your template file use the `<angular-select></angular-select>` tags.

## Props

### getData

```
(page: number, search: string) => Promise<{ label: string, value: any }>
```

This takes up the two arguments **page** and **search**. The function with the api fetch has to be defined and passed to the _getData_ prop.

```
async getData(page: number, search: string) {
    const res = await axios.get(`http://your-api.com?page=${page}&search=${search}`)

    return res.data.map(item => ({ label: item.name, value: item }))
}
```

Internally the select component will increase the page number, fetch the data and add it to the select options list every time the user scrolls to the end of the list.

Additionally everytime the user enters a string in the input the page will reset to **1** and fetch the data with the search string (_will continue to increase page on scroll end_).

### onChange

(e: { label: string, value: any }) => void

This defines what the select has to do when the user selects and option from the list.

Ideally you can have a local state variable in your component and set it to the options value on change.

```
selectedOption: any;

onChange(e: { label: string, value: any }) {
    this.selectedOption = e.value;
}
```

## Styles

At the moment, this component strictly depends on tailwindcss so its required in your project for it to work as expected.

Make sure the content array in your project's tailwind.config.js looks silimar to this.

```
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/@dushangf/angular-select/**/*.{html,ts,js,mjs}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Further improvements such as changing styles via props will be introduces soon!

### Good Luck!
