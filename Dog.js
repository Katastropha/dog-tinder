// Create the Dog class here

class Dog {
  constructor(data, rootElement, onFinish) {
    this.data = data;
    this.onFinish = onFinish;
    this.rootElement = rootElement;
  }

  _handleLike() {
    const btnGreen = this.rootElement.querySelector(".btn_green");
    const stampLike = this.rootElement.querySelector(".like");

    this.data.hasBeenLiked = true;

    btnGreen.classList.add("active_green");
    stampLike.style.display = "block";

    setTimeout(() => {
      this.onFinish();
    }, 1000);
  }

  _handleDislike() {
    const btnRed = this.rootElement.querySelector(".btn_red");
    const stampNope = this.rootElement.querySelector(".nope");

    this.data.hasBeenSwiped = true;

    btnRed.classList.add("active_red");
    stampNope.style.display = "block";

    setTimeout(() => {
      this.onFinish();
    }, 1000);
  }

  _render() {
    const { name, avatar, age, bio } = this.data;

    const result = `
            <div class="dog">
                <div class="color">
                    <img src="images/badge-like.png" class="like">
                    <img src="images/badge-nope.png" class="nope">
                </div>
                <div class="dog_img" style="background-image: url(${avatar})">
                    <div class="info">
                        <h3>${name}, ${age}</h3>
                        <p>${bio}</p>
                    </div>
                </div>
                <div class="dog_buttons">
                    <div class="btn btn_red"><img class="btn_img dog_btn_x " src="images/icon-cross.png"></div>
                    <div class="btn btn_green"><img class="btn_img dog_btn_like" src="images/icon-heart.png"></div>
                </div>
            </div>
        `;
    this.rootElement.innerHTML = result;
  }

  feedHtml() {
    const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this.data;

    this._render();

    const handleLikeCb = (e) => {
      this.rootElement.removeEventListener("click", handleLikeCb);
      const btnLike = e.target.closest(".btn_green");
      !btnLike || this._handleLike();
    };
    this.rootElement.addEventListener("click", handleLikeCb);

    const handleDislikeCb = (e) => {
      this.rootElement.removeEventListener("click", handleDislikeCb);
      const btnDislike = e.target.closest(".btn_red");
      !btnDislike || this._handleDislike();
    };
    this.rootElement.addEventListener("click", handleDislikeCb);
  }
}

export default Dog;

// TEST
