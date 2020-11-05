const PATH="./data.json";
const fs=require('fs');
class post {

    add(newPost) {

    }

    get() {
        return this.readData();
    }

    readData() {
        let rawdta=fs.readFileSync(PATH);
        let posts=JSON.parse(rawdta);
        return posts;
    }

}

module.exports = post;
