let container = document.getElementById("results");
let submit = document.getElementById("submit");

fetch('data.json').then(function (res) {
    return res.json();
}).then(function (obj){

    for(let i = 0; i < obj.length; i++){ // For all entries in our JSON

        let item = document.createElement('div'); // Create item-element
        item.classList.add('item'); // Give it the 'item' class

        let color = 'red';

        if(i > 3){
            i == 0; // If the item id is bigger than 3; Reset it to 0
        }
        else if(i == 1){
            color = 'yellow'; // If the item id is 1; Make it yellow
        }
        else if(i == 2){
            color = 'green'; // If the item id is 2; Make it green
        }
        else if(i == 3){
            color = 'blue'; // And in all other cases, make it blue
        }

        item.classList.add(color); // Assign the desired color

        let titleContainer = document.createElement('div');
        titleContainer.classList.add('titlecard');
        let titleIMG = document.createElement('img');
        titleIMG.src = obj[i].icon;

        let title = document.createElement('h5');
        title.innerHTML = obj[i].category;
        titleContainer.appendChild(titleIMG);
        titleContainer.appendChild(title);

        let textBox = document.createElement('p');
        //let score = document.createElement('strong');
        //score.innerHTML = obj[i].score;
        //textBox.appendChild(score);
        textBox.innerHTML = '<strong>' + obj[i].score + '</strong> / 100';

        item.appendChild(titleContainer);
        item.appendChild(textBox);

        container.appendChild(item); // Append the col to the chart-container-Element
        container.insertBefore(item, submit);
    }

}).catch(function (error){
    console.error('Something went wrong retrieving the JSON-data.');
    console.error(error);
});