const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);


const inputRef = useRef(null);
// Setting the ref in a JSX element
<input ref={inputRef} type="text" />

// // Changing the value of the input field
inputRef.current.value = 'New value';