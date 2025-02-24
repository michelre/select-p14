# Custom Select

Composant personnalisé Select

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: https://img.shields.io/npm/v/hrnet-select-p14.svg?style=flat-square
[npm-url]: http://npmjs.org/package/hrnet-select-p14
[download-image]: https://img.shields.io/npm/dm/hrnet-select-p14.svg?style=flat-square
[download-url]: https://npmjs.org/package/hrnet-select-p14
[bundlephobia-url]: https://bundlephobia.com/result?p=hrnet-select-p14
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/hrnet-select-p14

## Install

[![hrnet-select-p14](https://nodei.co/npm/hrnet-select-p14.png)](https://npmjs.org/package/hrnet-select-p14)

## Development

```
npm install
npm run dev
```


## Usage

```js
import { Select } from "hrnet-select-p14";

const handleStateSelect = (state) => {
    setFormData({ ...formData, state }); 
    setSelectedState(state);
};

<Select 
    options={states}
    onChange={handleStateSelect}
    defaultValue={selectedState}
    placeholder="Select states"
    required
/>

  
/>
```

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placeholder | String |  | Placeholder du Select |
| options | String | - | Liste des options du Select. Doit être un tableau d'objets de la forme `{id: '', name: ''}`  |
| onChange | (value: String) => void | - | La fonction qui est levée au changement d'option et qui remonte l'id de la valeur sélectionnée |
|defaultValue | String | - | Valeur par défaut du Select |
| required | boolean |  true | Indique si la sélection est requise |