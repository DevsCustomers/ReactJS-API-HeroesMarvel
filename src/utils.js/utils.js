import MD5 from 'crypto-js/md5'

const API_URL = process.env.REACT_API_BASE_URL;

const getHash = (ts, secretKey, PublicKey) => {
    return MD5(ts + secretKey + PublicKey).toString()
}

const fetchHeroes = async (value) => {
    let baseUrl = `${API_URL}/v1/public/characters`

    let ts = Date.now().toString()
    let apikey = process.env.REACT_API_KEY_PUBLIC
    let apiPrivateKey = process.env.REACT_API_KEY_PRIVATE
    let hash = getHash(ts, apiPrivateKey, apikey)

    let url = `${baseUrl}?ts=${ts}&apiKey=${apikey}&hash=${hash}&nameStartsWith=${value}`

    try {
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        console.error(err)
        return
    }
}

export {fetchHeroes}