function Fetch() {
    let posts = document.querySelector('.UsersCard')
    console.log(posts);
    let usercard = [];
    // fetch 
    let url = 'https://jsonplaceholder.typicode.com';
    const loadCharacters = async () => {
        try {
            const res = await fetch(`${url}/users/`);
            usercard = await res.json();
            displayCharacters(usercard);
            console.log(usercard);
        } catch (err) {
            console.error(err);
        }
    };


    // display the data in browser of user
    const displayCharacters = (card) => {
        const htmlString = card
            .map((post) => {
                return `
            <div id="card">
         <div   class="UsersCard" data-id=${post.id} >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9RklvJrbE74G2zeDKVytRpGknHA-cA7i5qMtldRMG6psHgOUtE0TE3FRIIni3_KBIQc&usqp=CAU"
                alt="loading image">
            <h4 class="h4">Name:${post.name}</h4>
            <P>Email:${post.email}</P>
            <P>City:${post.address.city}</P>
            <P>Website:${post.website}</P>           
        </div>
    </div>
        `;
            })

            .join('');
        posts.innerHTML = htmlString;
        // console.log(posts);
    };
    // call the fetch function
    loadCharacters();
}

