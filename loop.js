let x = 0;
do {
  x++;
  console.log(x)
  if (x%2 == 1) continue;
  console.log(x)
} while (x<=10)
