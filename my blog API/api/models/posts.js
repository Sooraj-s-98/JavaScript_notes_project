const PATH="./data.json";
const fs=require('fs');
class post {

    add(newPost) {
        const currentPosts=this.readData();
        currentPosts.unshift(newPost);
        this.storeData(newPost);

    }

    getIndividualBlog(postId){
        const posts=this.readData();
        const foundPost=posts.find((post)=>post.id==postId);
        return foundPost;
    }

    get() {
        return this.readData();
    }

    readData() {
        let rawdta=fs.readFileSync(PATH);
        let posts=JSON.parse(rawdta);
        return posts;
    }
    storeData(){
        let data=Json.stringfy(rawdta);
        fs.writeFileSync(PATH,data)
    }
}

module.exports = post;
