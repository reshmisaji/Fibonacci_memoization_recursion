const fibonacci = function(number, cacheData = {}) {
  if (number < 2) return number;
  if (cacheData[number] !== undefined) return cacheData[number];
  cacheData[number] =
    fibonacci(number - 1, cacheData) + fibonacci(number - 2, cacheData);
  return cacheData[number];
};
