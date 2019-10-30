const get_random = (list, length) => list[Math.floor(Math.random() * length)];

const useRandomItemFromArray = arr => {
  const arrLength = arr.length;
  const randomItem = get_random(arr, arrLength);
  return randomItem;
};

export default useRandomItemFromArray;
