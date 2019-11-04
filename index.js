const fs = require('fs')
const path = require('path');

class Textjs
{
    constructor()
    {
        this.locale = Intl.DateTimeFormat().resolvedOptions().locale.replace(`-`, `_`)
        this.directory = `locales`
        this.file = `main`

    }

    setDirectory = ( dir_name ) => this.directory = dir_name

    setFile = ( file_name ) => this.file = file_name

    setLocale = ( locale ) => this.locale = locale

    getDirectory = () => this.directory

    getFile = () => this.file

    getLocale = () => this.locale

    load = ( locale = null ) =>
    {
        let dir = path.dirname(require.main.filename);
        dir = `${dir}/${this.getDirectory()}`

        if ( !fs.existsSync(dir) )
            return console.error(`Directory '${dir}' not found  on the root of your project!`)
        dir = `${dir}/${locale || this.getLocale()}`

        if ( !fs.existsSync(dir) )
            return console.error(`Directory '${dir}' not found in your project!`)

        dir = `${dir}/${this.getFile()}.json`
        if ( !fs.existsSync(dir) )
            return console.error(`Directory no found '${dir}' in your project!`)

        return require(dir)

    }

    t = ( text, arr = {}, locale = null ) =>
    {
        const translator = this.load(locale)

        text = translator[text] || text

        for ( let key in arr )
            text = text.replace(`{${key}}`, arr[key])

        return text
    }
}

module.exports = new Textjs()