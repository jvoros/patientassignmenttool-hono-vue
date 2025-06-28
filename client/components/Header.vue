<template>
  <header class="container">
    <div>
      <img src="/public/pat.svg" alt="Patient Assignment Tool Logo" />
      <h1>Patient Assignment Tool <span>v 1.0</span></h1>
    </div>

    <nav>
      <button>Test Update</button>
    </nav>
  </header>
</template>

<style scoped>
header {
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

div {
  display: flex;
  align-items: center;
  gap: 1rem;
}

img {
  width: 48px;
}

h1 {
  font-size: 1.5rem;
  font-weight: 700;
}

h1 span {
  font-size: 1rem;
  font-weight: normal;
}
</style>
