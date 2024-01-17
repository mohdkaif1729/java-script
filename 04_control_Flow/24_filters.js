const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (num) => {
//     console.log(num);
// } )

const values = coding.forEach( (num) => {
    // console.log(num);
    return num
} )

// In forEach loop the value is undefined
// console.log(values);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filter evaluate in true or flase
// const result = myNumbers.filter( (item) => item >= 5)
const result = myNumbers.filter( (item) => {
    return item >= 5
})

// console.log(result);
// same thing we want to do using forEach loop then

const newNumbers = []
myNumbers.forEach( (item) => {
    if(item >= 5) {
        newNumbers.push(item)
    }
} )

// console.log(newNumbers);


// another example of filtes

const books = [

    {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},

    {title: 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},

    {title: 'Book three', genre: 'History', publish: 1999, edition: 2007},

    {title: 'Book four', genre: 'Non-Fiction', publish: 1989, edition: 2010},

    {title: 'Book five', genre: 'Science', publish: 2009, edition: 2014},

    {title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010},

    {title: 'Book seven', genre: 'History', publish: 1986, edition: 1996}

]

// const myBooks = books.filter( (bk) => bk.publish > 2000)
const myBooks = books.filter( (bk) => bk.genre === "History")

console.log(myBooks);

// console.log(myBooks);

