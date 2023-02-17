# React template

tutorial on hooks

## useCallback vs useMemo

* `useMemo` is the more general form of `useCallback`
  * useMemo works on any value, useCallback only works on functions
* `useCallback(fn, deps)` is equal to `useMemo(() => fn, deps)`
  * if your `deps` didnt change, `useCallback` will hand you back the same function across each rerender, as opposed to rebuilding the function each rerender by default
* useCallback memoizes the function, useMemo memoizes the result of the function call

Theoretically one could just throw useCallback on any pure function but it may not be optimal if the function is computationally cheap since the process of caching also takes time.
