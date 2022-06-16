<template>
  <div class="px-10">
    <div class="relative flex justify-center">
      <Container
        class="flex items-center justify-center sm:justify-between pt-11"
        :class="{ 'md:absolute': isTallScreen }"
      >
        <Logo size="sm" />
        <Nav />
      </Container>
    </div>
  </div>
</template>
