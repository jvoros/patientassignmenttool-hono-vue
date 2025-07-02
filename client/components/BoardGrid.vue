<template>
  <main class="grid">
    <section class="grid-timeline">
      <slot name="timeline"></slot>
    </section>
    <section class="grid-main">
      <slot name="main"></slot>
    </section>
    <section class="grid-other">
      <slot name="other"></slot>
    </section>
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-areas:
    "main"
    "other"
    "time";
  grid-gap: 0.5rem;
  grid-template-columns: 4fr 5fr 4fr;
}

@media screen and (min-width: 700px) {
  main {
    grid-template-areas:
      "time main"
      "time other";
  }
}

@media screen and (min-width: 1200px) {
  main {
    grid-template-areas: "time main other";
    grid-gap: 0;
  }
}

.grid-timeline {
  grid-area: time;
}

.grid-main {
  grid-area: main;
}

.grid-other {
  grid-area: other;
}

section {
  border: 0px solid lightgray;
  padding: var(--padding);
}
</style>
