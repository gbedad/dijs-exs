class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time} hours of ${this.title}!`;
  }
}

const matrix = new Video('Matrix', 'gbe', 3);

const friends = new Video('Friends', 'tim', 1);

console.log(matrix.watch());

let allVideos = [
  { title: 'Maverick', uploader: 'Test', time: 2 },
  { title: 'Pulp fiction', uploader: 'Tom', time: 2 },
  { title: 'Trainspotting', uploader: 'Gbe', time: 2 },
  { title: 'Orange mécanique', uploader: 'John', time: 2 },
  { title: 'La fureur de vivre', uploader: 'Gbe', time: 1 },
];
let videos = [];
allVideos.forEach((item) => {
  return videos.push(new Video(item.title, item.uploader, item.time));
});
console.log(videos);
console.log(videos[3].watch());

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

console.log(pet);
