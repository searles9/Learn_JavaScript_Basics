// Even and Odd Numbers

showNumbers(10);

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++)
      if (i % 2 === 0) console.log(i, 'Even'); 
      else console.log(i, 'Odd')
}

function showNumbers_2(limit) {
    for (let i = 0; i <= limit; i++) {
      const message = (i % 2 === 0) ? 'Even' : 'Odd';
      console.log(i, message)
    } 
}