let result = document.querySelector(".result");

const fetchData = async () => {
    try {
        const { data } = await axios.get("/.netlify/functions/hello");
        result.textContent = data;
    } catch (error) {
        console.log(error);
        result.textContent = "Data not found"
    }
}

fetchData();