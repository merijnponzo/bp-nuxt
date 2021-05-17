<style lang="scss" scoped>
.darkmode {
  position: fixed;
  top: 2rem;
  left: 2rem;
  .toggle {
    display: block;
    position: relative;
    width: 62px;
    height: 32px;
    border: 4px solid black;
    border-radius: 10px;
  }
  .pal {
    transition: 1s ease all;
    position: absolute;
    top: 2px;
    left: 3px;
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 100px;
  }
  .label {
    margin-top: 3px;
    display: block;
    font-size: 10px;
    text-align: center;
  }
}

.darkmode__on {
  background: black;
  .typo {
    color: white;
  }
  .active {
    color: #8a2be2;
  }
  .toggle {
    border-color: white;
  }
  .pal {
    background: white;
    left: rfs(2rem);
  }
  color: white;
}
#poster {
  height: 100vh;
  display: flex;
  align-items: center;
  align-content: center;
  cursor: pointer;
  width: 100%;
  background: linear-gradient(45deg, #fff, #e6007e 200%);
}
#poster.darkmode__on {
  background: black;
}
@font-face {
  font-family: "Beatrice Display";
  src: url("/BeatriceDisplay-Bold.woff2") format("woff2"),
    url("/BeatriceDisplay-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}
.active {
  color: #8a2be2;
}
.typo {
  transition: 0.4s ease all;
  font-family: "Beatrice Display";
  webkit-user-select: none; /* Chrome all / Safari all */
  -moz-user-select: none; /* Firefox all */
  -ms-user-select: none; /* IE 10+ */
  user-select: none;
}
.line {
  display: flex;
  height: calc(75vh / 4);
}
#l_3 {
  height: calc(85vh / 4);
}
#l_i {
  margin-right: rfs(3rem);
}
.custom-poster {
  margin: 0 auto;
  width: 100vw;
  h1 {
    font-size: calc(100vh / 4);
  }
}
.custom-poster {
  overflow: hidden;
  padding: rfs(5rem);
}
@include min-large() {
  .custom-poster {
    overflow: visible;
    padding: 0px;
    width: 30vw;
  }
}

#background-wrap {
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 2;
  pointer-events: none;
}

/* KEYFRAMES */

@-webkit-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-moz-keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@keyframes animateBubble {
  0% {
    margin-top: 1000px;
  }
  100% {
    margin-top: -100%;
  }
}

@-webkit-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@-moz-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

/* ANIMATIONS */

.x1 {
  -webkit-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 25s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: -5%;
  top: 5%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x2 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 5%;
  top: 80%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x3 {
  -webkit-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 28s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 10%;
  top: 40%;

  -webkit-transform: scale(0.7);
  -moz-transform: scale(0.7);
  transform: scale(0.7);
}

.x4 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 20%;
  top: 0;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x5 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 30%;
  top: 50%;

  -webkit-transform: scale(0.5);
  -moz-transform: scale(0.5);
  transform: scale(0.5);
}

.x6 {
  -webkit-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 21s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 50%;
  top: 0;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
}

.x7 {
  -webkit-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 20s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 65%;
  top: 70%;

  -webkit-transform: scale(0.4);
  -moz-transform: scale(0.4);
  transform: scale(0.4);
}

.x8 {
  -webkit-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  -moz-animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;
  animation: animateBubble 22s linear infinite,
    sideWays 3s ease-in-out infinite alternate;

  left: 80%;
  top: 10%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

.x9 {
  -webkit-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  animation: animateBubble 29s linear infinite,
    sideWays 4s ease-in-out infinite alternate;

  left: 90%;
  top: 50%;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
}

.x10 {
  -webkit-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  animation: animateBubble 26s linear infinite,
    sideWays 2s ease-in-out infinite alternate;

  left: 80%;
  top: 80%;

  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  transform: scale(0.3);
}

/* OBJECTS */

.bubble {
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  -moz-box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.2),
    inset 0px 10px 30px 5px rgba(255, 255, 255, 1);

  height: 200px;
  position: absolute;
  width: 200px;
}

.bubble:after {
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* FF3.6+ */
  background: -webkit-gradient(
    radial,
    center center,
    0px,
    center center,
    100%,
    color-stop(0%, rgba(255, 255, 255, 0.5)),
    color-stop(70%, rgba(255, 255, 255, 0))
  ); /* Chrome,Safari4+ */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Chrome10+,Safari5.1+ */
  background: -o-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* Opera 12+ */
  background: -ms-radial-gradient(
    center,
    ellipse cover,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* IE10+ */
  background: radial-gradient(
    ellipse at center,
    rgba(255, 255, 255, 0.5) 0%,
    rgba(255, 255, 255, 0) 70%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#80ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;

  -webkit-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  -moz-box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 20px 30px rgba(255, 255, 255, 0.3);

  content: "";
  height: 180px;
  left: 10px;
  position: absolute;
  width: 180px;
}
</style>
<template>
  <div id="poster" :class="{ darkmode__on: darkmode }">
    <div id="poster_nav">
      <div class="darkmode" @click="darkmode ? (darkmode = 0) : (darkmode = 1)">
        <span class="toggle">
          <span class="pal"></span>
        </span>
        <span class="label">darkmode</span>
      </div>
    </div>
    <div class="custom-poster" @click="shakeWords()">
      <span class="line" id="l_1">
        <h1 class="typo" id="l_i">i</h1>
        <h1 class="typo" id="l_dre">dre</h1>
        <h1 class="typo" id="l_hyphen">-</h1>
      </span>
      <span class="line" id="l_2"><h1 class="typo" id="l_am">am</h1></span>
      <span class="line" id="l_3"><h1 class="typo" id="l_on">on.</h1></span>
      <span class="line" id="l_4"
        ><h1 class="typo" id="l_slash">/</h1>
        <h1 class="typo" id="l_of">of</h1>
        <h1 class="typo" id="l_f">f</h1></span
      >
    </div>
    <div id="background-wrap">
      <div class="bubble x1"></div>
      <div class="bubble x2"></div>
      <div class="bubble x3"></div>
      <div class="bubble x4"></div>
      <div class="bubble x5"></div>
      <div class="bubble x6"></div>
      <div class="bubble x7"></div>
      <div class="bubble x8"></div>
      <div class="bubble x9"></div>
      <div class="bubble x10"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Everythingispossible",
  transition: "default",
  layout: "everything",
  components: {},
  data: function() {
    return {
      darkmode: false,
      letters: [
        "l_i",
        "l_dre",
        "l_hyphen",
        "l_am",
        "l_on",
        "l_slash",
        "l_of",
        "l_f"
      ],
      words: [
        ["l_dre", "l_hyphen", "l_am", "l_of", "l_f"],
        ["l_dre", "l_hyphen", "l_am", "l_on"],
        ["l_dre", "l_hyphen", "l_am", "l_of", "l_f"],
        ["l_i", "l_dre", "l_hyphen", "l_am", "l_of"],
        ["l_i", "l_am", "l_on"],
        ["l_i", "l_am", "l_of", "l_f"],
        ["l_i", "l_dre", "l_hyphen", "l_am"],
        ["l_i", "l_dre", "l_hyphen", "l_am", "l_on"]
      ]
    };
  },
  mounted() {
    /*
    setInterval(() => {
      this.shakeWords();
    }, 4000);
    */
  },
  methods: {
    shakeWords() {
      const combi = Math.floor(Math.random() * 8);

      const paragraphs = document.querySelectorAll(".typo");
      paragraphs.forEach(p => p.classList.remove("active"));

      const active = this.words[combi];
      for (const s in active) {
        if (document.getElementById(active[s])) {
          document.getElementById(active[s]).classList.add("active");
        } else {
          console.log(active[s], "not found");
        }
      }
    }
  }
};
</script>
