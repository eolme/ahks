export const scrollTop = /*#__NOINLINE__*/() => {
  return Math.max(
    window.pageYOffset,
    document.documentElement.scrollTop,
    document.body.scrollTop
  );
};
