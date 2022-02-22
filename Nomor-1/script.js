const changeWord = (selectedText, changeText, text) => {
    let ganti = text.replace(selectedText,changeText)
    return ganti;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changeWord('mencintai','membenci',kalimat1))
console.log(changeWord('bromo','semeru',kalimat2))
