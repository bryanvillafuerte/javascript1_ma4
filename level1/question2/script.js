fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => { return res.json() })
    .then((data) => {
        var result = `<h1>TODO Cards</h1>`;
        data.forEach((user) => {
            const { userId, id, title, completed, } = user
                result +=
                    `<span>
                        <ul class="users">
                            <li> UserID : <b>${userId}</b></li>
                            <li> ID : <b>${id}</b></li>
                            <li> Title : <b>${title}</b></li>
                            <li> Completed : <b>${completed}</b></li>
                        </ul>
                    </span>`;
                        document.getElementById('todoCards').innerHTML = result;
                    });
    })