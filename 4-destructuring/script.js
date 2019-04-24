//4.1 Découverte

const [a, b] = [1, 2, 3, 4]
console.log(a)
console.log(b)
// dans un tableau, on appel la position de l'élément

const {first, last, age} = {first: 'Paul', last: 'Henta', age: 35}
console.log(first)
console.log(last)
console.log(age)
//dans un objet on appel le nom de l'élément

//4.2 Application

Object.values(data).forEach(value => {
    
    console.log(value.texte + ' date de début: '+value.dateDebut +' date de fin: '+ value.dateFin);
});

