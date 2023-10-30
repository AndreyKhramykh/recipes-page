<template>
  <div></div>
</template>

<script setup></script>

<style scoped lang="scss">
div {
  width: 20px;
  height: 20px;
  background: conic-gradient(
    var(--buttonBG) 20%,
    white 20% 22%,
    var(--buttonBG) 22% 40%,
    white 40% 42%,
    var(--buttonBG) 42% 72%,
    white 72% 74%,
    var(--buttonBG) 74% 100%
  );
  border-radius: 50%;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3px;
    height: 3px;
    background-color: white;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}
</style>
