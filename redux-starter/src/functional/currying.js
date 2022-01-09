function add(a) {
  return function (b) {
    return a + b;
  };
}

const add2 = (a) => (b) => a + b;

add(1)(4); // add(1, 4)

/* 
F(N) => F(1);
(N) args to (1) args
*/
