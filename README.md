# Pedro Nascimento de Lima's Website

My personal website is a fork of the Dante Astro theme. Dante is a single-author blog and portfolio theme for Astro.js. For more Astro.js themes please check [justgoodui.com](https://justgoodui.com/).

My fork has additional features not available in the original theme, including support for publications, links between citations and talks, ordering publications by updated citation counts from dimensions, badges, etc.

## Astro.js Commands

All commands are run from the root of the project, from a terminal. You need node.js to run these.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## License

Licensed under the [GPL-3.0](https://github.com/JustGoodUI/dante-astro-theme/blob/main/LICENSE) license.

## Publication citation count cache:

```bash
npx tsx tools/update_citations_cache.ts
```