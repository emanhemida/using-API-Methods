/*for (var i = 1; i <= 4; i++) {
    console.log("* ".repeat(i));
}*/
const number= parseFloat(prompt('Enter  number: '));
for (let i=1;i<=number;i++){
    for(let j=1;j<=i;j++){
        document.write('*')
    }
    document.write('<br/>')
}