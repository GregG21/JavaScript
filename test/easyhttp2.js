class EasyHTTP {
    // GET REQUEST
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
        }

    post(url, data) {
        return new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
        })
        }    



}