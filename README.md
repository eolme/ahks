# ahks [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/eolme/ahks/blob/master/LICENSE)

> a[ll]h[oo]ks

All-in-one high-quality and reliable React Hooks:

- [use-callback-ref](https://npm.im/use-callback-ref)
- [use-composed-ref](https://npm.im/use-composed-ref)
- [use-debounce](https://npm.im/use-debounce)
- [use-deep-compare-effect](https://npm.im/use-deep-compare-effect)
- [use-is-mounted-ref](https://npm.im/use-is-mounted-ref)
- [use-isomorphic-layout-effect](https://npm.im/use-isomorphic-layout-effect)
- [use-latest](https://npm.im/use-latest)
- [use-sync-external-store](https://npm.im/use-sync-external-store)

and own unopinionated at their best implementations:

#### Lifecycle:

- useMount — useEffect with constant dependencies list.

- useLayoutMount — useLayoutEffect with constant dependencies list.

- useUnmount — useMount but only with destructor.

- useLayoutUnmount — useLayoutMount but only with destructor.

- useRenderEffect — almost same to useEffect, but not deferred (like [useAction](https://github.com/awmleer/use-action)).

- useInsertionEffect — original [useInsertionEffect](https://reactjs.org/docs/hooks-reference.html#useinsertioneffect) with [useIsomorphicLayoutEffect](https://npm.im/use-isomorphic-layout-effect) fallback.

#### Handlers:

- useHandler — more effective alternative to useCallback with constant dependencies list.

- useStableHandler — [React RFC](https://github.com/reactjs/rfcs/pull/220) (like [useEventCallback](https://github.com/Volune/use-event-callback)).

- useScrollHandler — use scroll position.

#### Events:

- useChangeCommit — commit native change event to `<input />` (usually needed for UI libraries).

- useValueCommit — useChangeCommit but with custom value.

- useCheckCommit — useChangeCommit but with custom checked state.

- usePassiveEvent — add passive event listener (feature [not provided](https://github.com/facebook/react/issues/6436) by react).

#### Memo:

- useCreation — useMemo with constant dependencies list.

#### Promise:

- usePromise — handle promise (like [usePromise](https://github.com/bsonntag/react-use-promise)).

#### Loaders:

- useLoadImage — usePromise with image loader.

- useLoadBlob — usePromise with blob loader.

#### Refs:

- useFirstRenderRef — ref object which determines first render (like [useIsFirstRender](https://usehooks-ts.com/react-hook/use-is-first-render)).

- useStableRef — store latest value in ref object.

#### Renders:

- useRender — cast `ReactNode` to `ReactElement` without `Fragment` hack.

#### State:

- useUpdate — [forceUpdate](https://reactjs.org/docs/react-component.html#forceupdate) for functional components.

- useUpdateState — useUpdate with generation.

- useTrackState — state with dependency-tracking (idea from [useSWR](https://github.com/vercel/swr/blob/a9909668ac21a01c11c76b8e872e322db807b9df/src/utils/state.ts#L8)).

## Installation

We recommend to use [yarn](https://classic.yarnpkg.com/en/docs/install/) for dependency management:

```shell
yarn add ahks
```

## Contributing

Development of ahks happens in the open on GitHub, and we are grateful to the community for contributing bugfixes and improvements.

## License

ahks is [MIT licensed](./LICENSE).
