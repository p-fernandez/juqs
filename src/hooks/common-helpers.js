const calculateCoordsInsideElement = (element, clientX, clientY) => {
  const { left, top } = element.current.getBoundingClientRect();
  const x = clientX - left;
  const y = clientY - top;

  return {
    x,
    y
  };
}

export {
  calculateCoordsInsideElement,
};
