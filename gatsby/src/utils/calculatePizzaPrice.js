const sizes = {
  s: '0.75',
  m: '1',
  l: '1.25',
};

export default function calculatePizzaPrice(cents, size) {
  return cents * sizes[size.toLowerCase()];
}
