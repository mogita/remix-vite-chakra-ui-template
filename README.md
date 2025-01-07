# Remix + Vite + Chakra UI Template

To create a new Remix project with this template:

```
npx create-remix@latest --template mogita/remix-vite-chakra-ui-template
```

What's included:

- [Remix v2](https://remix.run)
- [Vite 6](https://vitejs.dev)
- [Chakra UI v2](https://chakra-ui.com)
- [React Icons v5](https://react-icons.github.io/react-icons/)
- Auto Dark/Light theme (with white flash prevention)

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Development

Run the Vite dev server:

```shellscript
yarn dev
```

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `yarn build`

- `build/server`
- `build/client`
