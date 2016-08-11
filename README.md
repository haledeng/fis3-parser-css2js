### fis3-parser-css2js
fis plugin to parse css into js.

### install

```
npm i fis3-parser-css2js
```

### config

```
fis.match('**.css', {
	parser: fis.plugin('css2js')
})
```

### parse Css to a Js module
By default, fis3-parser-css2js will just parse css to a normal js file. You can use other plugin to parse it into a module, like fis3-hook-commonjs, etc.

```
fis.hook('commonjs');
fis.match(/\/([^\.]*)\.css/, {
	isMod: true,
	rExt: 'js',
	id: '$1.css',
	release: '$0.css',
	parser: fis.plugin('css2js')
});
```