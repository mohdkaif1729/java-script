const URL = "https://cat-fact.herokuapp.com/facts";

const asynFunction = async () => {
    const respose = await fetch(URL);
    console.log(respose);
    const data = await respose.json();
    console.log(data);
};
