# Custom Select

Composant personnalisé Select

[![NPM version][npm-image]][npm-url] [![npm download][download-image]][download-url] [![bundle size][bundlephobia-image]][bundlephobia-url]

[npm-image]: https://img.shields.io/npm/v/select-p14-elodie.svg?style=flat-square
[npm-url]: http://npmjs.org/package/select-p14-elodie
[download-image]: https://img.shields.io/npm/dm/select-p14-elodie.svg?style=flat-square
[download-url]: https://npmjs.org/package/select-p14-elodie
[bundlephobia-url]: https://bundlephobia.com/result?p=select-p14-elodie
[bundlephobia-image]: https://badgen.net/bundlephobia/minzip/select-p14-elodie

## Install

[![select-p14-elodie](https://nodei.co/npm/select-p14-elodie.png)](https://npmjs.org/package/select-p14-elodie)

## Development

```
npm install
npm run dev
```


## Usage

```js
import { Select } from "select-p14-elodie";

const onChangeSelect = (value) => {
    console.log(value)
}

<Select 
    placeholder="Select State"
    options={[
        {id: 'CA', name: 'California'},
        {id: 'NY', name: 'New York'},
        {id: 'TX', name: 'Texas'},
    ]}
    onChange={onChangeSelect}
/>
```

## API

### Props

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| placeholder | String |  | Placeholder du Select |
| options | String | - | Liste des options du Select. Doit être un tableau d'objets de la forme `{id: '', name: ''}`  |
| onChange | (value: String) => void | - | La fonction qui est levée au changement d'option et qui remonte l'id de la valeur sélectionnée |
