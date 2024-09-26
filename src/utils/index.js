import axios from 'axios'

async function fetchData(URL){
    const {data} = await axios.get(URL)
    return data
}

export default fetchData