# Adding Component
1. Add the component.tsx file in `registry/ui` and update the `registry/registry-ui.ts` file.

2. Add the example component in `registry/example` and update the `registry/registry-examples.ts` file.

3. Now regenerate the `__registry__/index.tsx` using this command.
```bash
pnpm run build:registry
```
> **Note:** If you are running this for the first time they you need to create the `__registry__` folder mannually.

4. Now create a `component.mdx` file in `content/docs/components`.

5. Now bulid the contentlayer using this command.
```bash
pnpm run bulid:docs
```
6. At last update the `config/docs.ts`. to update the sidebar.

# Adding Template
1. Create a template.mdx file in  `content/templates` folder.

2. Then rebuild the `.contentlayer` using this command-
```bash
pnpm run bulid:docs
```