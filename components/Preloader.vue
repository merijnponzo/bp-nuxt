<style lang="scss" scoped>
  .preloader{
    width:1rem;
    height:1rem;
    transform:translateY(2px) translateX(5px);
    background:white;
  }
 
  .oval--a{
    transform-origin:center center;
    animation: rotateA 1s ease-in-out infinite;
    //mix-blend-mode:exclusion;
  }
  .oval--b{
    transform:rotate(0deg);
    transform-origin:center center;
    animation: rotateB 1s ease-in-out infinite;
    z-index:2;
    //mix-blend-mode:exclusion;
  }
  
  @keyframes rotateA{
    0%{ transform: rotate(0deg); }
    100%{ transform: rotate(360deg); }
  }
  @keyframes rotateB{
    0%{ transform: rotate(0deg); }
    33%{ transform: scale(1.15,1.15)}
    66%{ transform: scale(1.15,1.15)rotate(180deg) }
    100%{ transform: scale(1,1)rotate(180deg) }
  }
  @include min-medium(){
    .preloader{
      width:2.5rem;
      height:2.5rem;
      transform:translateY(-5px) translateX(5px);
    }
  }

</style>
<template>
<div class="preloader">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75 75">
    <path class="oval--a" fill="black" d="M53,58.44c2.92-5.42,4.26-12.93,4.26-21.36,0-8-1.34-15.26-4.26-20.6C49.8,10.81,44.88,7.3,37.79,7.3c-7.51,0-12.59,3.59-15.85,9.43-2.83,5.34-4.17,12.43-4.17,20.35,0,8.43,1.67,15.94,4.84,21.36C26,64.19,31,67.7,37.79,67.7,44.88,67.7,49.89,64.19,53,58.44Z"/>
    <path class="oval--b" fill="black" d="M53,16.52a36.5,36.5,0,0,0-15.18-2.84,38.68,38.68,0,0,0-15.85,3.09C14.1,20.44,9.26,27.36,9.26,37.12c0,10.6,5.09,17.69,13.35,21.36a37.05,37.05,0,0,0,15.18,2.84A36.5,36.5,0,0,0,53,58.48c8.1-3.59,12.77-10.76,12.77-21.36C65.74,27,61.07,20.11,53,16.52Z"/>
  </svg>
</div>
</template>
<script>
export default {
  name: 'Preloader'
}
</script>
