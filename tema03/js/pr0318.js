function generateUsername(arr){
    arr.forEach(item =>item["nickname"] =  item["name"].substr(0,1).toLowerCase() + item["apellido"].toLowerCase());
}

let array = [
    {name : "Juan",
    apellido : "Fernandez"
    }, 
    {name : "Pedro",
    apellido : "Rodriguez"
    },
    {name : "Maria",
    apellido : "Ordoñez"
    },
    {name : "Begoña",
    apellido : "Molero"
    }];

generateUsername(array);

console.log(array);
