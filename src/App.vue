<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <BButtonGroup>
      <BButton to="/">Go to Home</BButton>
      <BButton to="/about">Go to About</BButton>
      <BButton to="/posts">Go to Posts</BButton>
    </BButtonGroup>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
