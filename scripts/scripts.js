class FetchData{
    getResource = url => {
        const res = fetch(url);

        return res;
    }

    getPost = () =>  this.getResource('db/dataBase.json');
}

new FetchData().getPost().then( () => {
    console.log(data);
});

class Twitter {
    constructor({ listElem }) {
        this.tweets = new Posts();
        this.elements = {
            listElem: document.querySelector(listElem)
        }
    }

    renderPosts() {

    }

    showUserPost() {

    }

    showLikesPost() {

    }

    showAllPost() {

    }

    openModul() {

    }
}


class Posts {
    constructor({posts = [] } = {}) {
        this.posts = posts;

    }

    addPost(tweet) {
        this.posts.push(new Post(tweet));
    }

    deletePost(id) {

    }

    likePost(id) {

    }
}

class Post {
    constructor({ id, userName, nickname, postDate, text, img, likes = 0 }) {
        this.id = id || this.generateID();
        this.userName = userName;
        this.nickname = nickname;
        this.postDate = postDate ? new Date(postDate) : new Date() ;
        this.test = test;
        this.img = img;
        this.likes = likes;
        this.liked = false;
    }

    changeLike() {
        this.like = !this.liked;
        if(this.liked) {
            this.likes++;
        } else {
            this.likes--;
        }
    }

    generateID() {
        return Math.random().toString(32).substring(2, 9) + (+new Date).toString(32);
    }

    getDate() {
        const option = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: '2-digit',
            minutes: '2-digit',
        }
        return this.postDate.toLocaleString('ru-Ru', option);
    }
}

const twitter = new Twitter({
    listElem: '.tweet-list'
})

console.log(new FetchData().getPost());

