export default   fn =>
(
  maker =>
    (...args) =>
      fn(maker(maker), ...args)
)(
  maker =>
    (...args) =>
      fn(maker(maker), ...args)
);