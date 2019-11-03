Text.js

Description:

It is a very simple way to translate texts


Installation:

npm i @dev-intellisoft/text.js or yarn @dev-intellisoft/text.js


Configuration:

In the root of you project you must create a folder called "locale" inside it  you must create

directory for the locales you want to use

for example
    en_US for United State English
    pt_BR for Brazilian Portuguese
    zh_CN for Chinese


inside this locale folders you can create json files with translations like bellow.

{
    "Hello World":"Olá mundo!",
    "Hello {name}!":"Oi {name}!"
}


Usage:

const { t } = require('@dev-intellisoft/text.js') // just this will be necessary



const { t, setLocale, setFile } = require('@dev-intellisoft/text.js')

setLocale(`pt_BR`)
setFile(`hello`)

console.log(t(`Hello World`))

console.log(t(`Hello World`, {}, `zh_CN`))

console.log(t(`Hello {name}!`, { name:"Wellington" }))

console.log(t(`Hello my friend!`))

Explanation:
setLocale - Change the default locale that for now will be English but soon you be you platform language

setFile - Change the translation file from main(default) to wherever file you want to be