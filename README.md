# beerfyi-embed

[![npm](https://img.shields.io/npm/v/beerfyi-embed)](https://www.npmjs.com/package/beerfyi-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/beerfyi-embed)
[![Size](https://img.shields.io/badge/size-~10--16KB_gzipped-green)](https://bundlephobia.com/package/beerfyi-embed)

Embed **BeerFYI** beverage widgets — beer styles, recipes, glossary terms, and interactive tools — on any website. **11 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), and live data from the [BeerFYI](https://beerfyi.com) database.

Every widget includes a "Powered by BeerFYI" backlink directing readers to the full beverage reference.

> **Try the interactive widget builder at [widget.beerfyi.com](https://widget.beerfyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-beerfyi="recipe" data-slug="styles" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the BeerFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `recipe` | `<div data-beerfyi="recipe" data-slug="..."></div>` | Recipe/entity card — ingredients, technique, ABV, glass type |
| `compare` | `<div data-beerfyi="compare" data-slug="..."></div>` | Side-by-side comparison of beverages or styles |
| `glossary` | `<div data-beerfyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `faq` | `<div data-beerfyi="faq" data-slug="..."></div>` | FAQ accordion for common beverage questions |
| `guide` | `<div data-beerfyi="guide" data-slug="..."></div>` | Tasting, brewing, or pairing guide summary |
| `ingredient` | `<div data-beerfyi="ingredient" data-slug="..."></div>` | Ingredient/variety card — spirit, grape, hop, coffee origin |
| `pairing` | `<div data-beerfyi="pairing" data-slug="..."></div>` | Food pairing suggestions — "What goes with...?" |
| `search` | `<div data-beerfyi="search" data-slug="..."></div>` | Search box linking to the full beverage database |
| `flavor-radar` | `<div data-beerfyi="flavor-radar" data-slug="..."></div>` | SVG 5D beer flavor radar chart — malty, hoppy, bitter, fruity, roasty |
| `color-swatch` | `<div data-beerfyi="color-swatch" data-slug="..."></div>` | SRM color scale visualization — 0 to 40+ beer color |
| `abv-calculator` | `<div data-beerfyi="abv-calculator" data-slug="..."></div>` | Dilution-aware ABV/IBU calculator |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-beerfyi` | recipe, compare, glossary, faq, guide, ingredient, pairing, search, [tools] | required | Widget type |
| `data-slug` | e.g. "styles" | — | Entity slug from the BeerFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-styleVariant` | modern, classic | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Beer Styles..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-beerfyi="recipe" data-slug="styles" data-theme="light"></div>

<!-- Dark -->
<div data-beerfyi="recipe" data-slug="styles" data-theme="dark"></div>

<!-- Sepia -->
<div data-beerfyi="recipe" data-slug="styles" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-beerfyi="recipe" data-slug="styles" data-theme="auto"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<beerfyi-recipe slug="styles" theme="light"></beerfyi-recipe>
<beerfyi-compare slugs="styles,other-slug"></beerfyi-compare>
<beerfyi-search placeholder="Search Beer Styles..."></beerfyi-search>

<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Recipe Card

```html
<div data-beerfyi="recipe" data-slug="styles" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-beerfyi="compare" data-slugs="styles,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-beerfyi="search" data-placeholder="Search Beer Styles..."></div>
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-beerfyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1.1.2/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install beerfyi-embed
```

```javascript
import 'beerfyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **Geist Sans**: Body text uses Geist Sans for a clean, modern look
- **System fonts**: Fallback to system-ui — no extra font requests
- **CORS**: BeerFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Bundle size**: ~10-16KB gzipped (per-site build — only includes tools available on BeerFYI)

## Learn More About Beer Styles

Visit [beerfyi.com](https://beerfyi.com) — BeerFYI is a comprehensive beer styles reference with recipes, tasting notes, interactive tools, and beverage guides.

- **API docs**: [beerfyi.com/developers/](https://beerfyi.com/developers/)
- **Widget builder**: [widget.beerfyi.com](https://widget.beerfyi.com)
- **npm package**: [npmjs.com/package/beerfyi-embed](https://www.npmjs.com/package/beerfyi-embed)
- **GitHub**: [github.com/fyipedia/beerfyi-embed](https://github.com/fyipedia/beerfyi-embed)

## Beverage FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Beverage FYI covers world beverages — cocktails, wine, beer, whiskey, sake, tea, and coffee.

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| CocktailFYI | [cocktailfyi.com](https://cocktailfyi.com) | 636 cocktails, ABV, calories, flavor profiles, glass types | [npm](https://www.npmjs.com/package/cocktailfyi-embed) |
| VinoFYI | [vinofyi.com](https://vinofyi.com) | Wines, grapes, regions, wineries, food pairings | [npm](https://www.npmjs.com/package/vinofyi-embed) |
| **BeerFYI** | [beerfyi.com](https://beerfyi.com) | 113 beer styles, hops, malts, yeast, BJCP guide | **[npm](https://www.npmjs.com/package/beerfyi-embed)** |
| BrewFYI | [brewfyi.com](https://brewfyi.com) | 72 coffee varieties, roasting, 21 brew methods | [npm](https://www.npmjs.com/package/brewfyi-embed) |
| WhiskeyFYI | [whiskeyfyi.com](https://whiskeyfyi.com) | 2,200+ whiskey expressions, distilleries, regions | [npm](https://www.npmjs.com/package/whiskeyfyi-embed) |
| TeaFYI | [teafyi.com](https://teafyi.com) | 60+ tea varieties, teaware, brewing guides | [npm](https://www.npmjs.com/package/teafyi-embed) |
| NihonshuFYI | [nihonshufyi.com](https://nihonshufyi.com) | 80 sake, rice varieties, 50 breweries | [npm](https://www.npmjs.com/package/nihonshufyi-embed) |

## Embed Widget

Embed [BeerFYI](https://beerfyi.com) widgets on any website with [beerfyi-embed](https://widget.beerfyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/beerfyi-embed@1/dist/embed.min.js"></script>
<div data-beerfyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.beerfyi.com)

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
