# Last Modified

A lightweight vanilla JavaScript snippet that displays the last modified date of an HTML page. Available in Czech and English versions.

## Versions

- **Czech** — `cs/last-modified.js`
- **English** — `en/last-modified.js`

## Example

Czech version output:

    24. dubna 2026, 14:30

English version output:

    April 24, 2026, 14:30

## Usage

Add a target element anywhere in your HTML with the ID `txtLMod`, then include the desired language version of the script:

```html
<p>Last modified: <span id="txtLMod"></span></p>
<script src="en/last-modified.js"></script>
```

The script automatically reads `document.lastModified`, formats it, and inserts it into the target element. It waits for the DOM to be ready and does nothing if the target element is missing.

## Features

- No dependencies — pure vanilla JavaScript
- Modern ES6+ syntax (arrow functions, `const`, template literals)
- Safe DOM access — handles missing target element gracefully
- Automatic DOM-ready detection — works even when included in `<head>`
- Isolated scope — no global variables

## Browser Compatibility

Works in all modern browsers (Chrome, Firefox, Safari, Edge). Not compatible with Internet Explorer.

## Requirements

A target HTML element with the ID `txtLMod`.

## Author

**Lukáš Elner**
- E-mail: lukas@elner.cz
- Web: [lukaselner.cz](https://www.lukaselner.cz)

## License

This project is licensed under the **GNU General Public License v3.0** — see the [LICENSE](LICENSE) file or [gnu.org/licenses/gpl-3.0](https://www.gnu.org/licenses/gpl-3.0.html) for details.
