const wishListArr = ['shoes', 'after shave', 'tesla', 'after shave', 'shoes'];

// const wishListSet = Array.from(new Set(wishListArr));

// // duplicates have been removed
// wishListSet.map((listItem) => console.log(listItem));

const wishListSet = new Set(wishListArr);

wishListSet.add('diary');
wishListSet.delete('shoes');
wishListSet.has('shoes');
wishListSet.clear();

wishListSet.forEach((listItem) => console.log(listItem));
