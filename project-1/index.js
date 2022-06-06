
//  Module 1: fetch() with image, CSV, JSON


// proj-1.0
/*
1) call fetch(__Path___)
2) respond
3) complete data stream
4) make an <img> element with the data

1) errors
2) use async/ await instead of .then
*/

// console.log('about to fetch rainbow');

// fetch('images/rainbow.jpg')
//  .then(respond => {
//  console.log(respond)
//  return respond.blob();
// })
// .then(blob => {
//  console.log(blob);
//  document.getElementById('rainbow').src = URL.createObjectURL(blob);
// })
// .catch(error => {
//  console.log('error!')
//  console.log(error);
// });

// make this more readable below -

// async function catchRainbow() {
//  const response = await fetch('images/rainbow.jpg');
//  const blob = await response.blob();
//  document.getElementById('rainbow').src = URL.createObjectURL(blob);
// }
// catchRainbow()
// .then(response => {
//  console.log('Its a beautiful rainbow!')
// })
// .catch(error => {
//  console.log('error!')
//  console.log(error);
// });


// how to fetch an array of images -

const filenames = [
 'images/rainbow.jpg',
 'images/rainbow2.jpg',
 'images/rainbow3.jpg'
];

async function catchRainbow(filenames) {
 for(let filename of filenames) {
 const response = await fetch(filename);
 const blob = await response.blob();
 const img = document.createElement('img')
 img.src = URL.createObjectURL(blob);
 img.width = '200';
 document.body.append(img);
}
}

catchRainbow(filenames)
.then(response => {
 console.log('Its a beautiful rainbow!')
})
.catch(error => {
 console.log('error!')
 console.log(error);
});
















































