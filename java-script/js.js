fetch("../Json data files/data.json")

.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})


.then(data => {
    for (let i = 0; i <data.length;i++){
        console.log(data[i])
    }
})


.catch(error => {
console.error('Error fetching JSON:', error);
});