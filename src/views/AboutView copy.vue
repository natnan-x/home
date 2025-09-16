<template>
  <div class="flex w-full flex-col pt-6">
    <div class="px-25">
      <LayoutHeader />
      <main class="flex flex-col md:flex-row min-h-screen gap-12 pt-25">
        <div class="left w-full md:w-3/5 p-4 rounded-lg">
          <h1 class="text-5xl font-bold tracking-tight leading-tight">
            I’m Spencer Sharp. I live in New York City, where I design the
            future.
          </h1>
          <p class="mt-6">
            I’ve loved making things for as long as I can remember, and wrote my
            first program when I was 6 years old, just two weeks after my mom
            brought home the brand new Macintosh LC 550 that I taught myself to
            type on.
          </p>
          <p class="mt-6">
            The only thing I loved more than computers as a kid was space. When
            I was 8, I climbed the 40-foot oak tree at the back of our yard
            while wearing my older sister’s motorcycle helmet, counted down from
            three, and jumped — hoping the tree was tall enough that with just a
            bit of momentum I’d be able to get to orbit.
          </p>
          <p class="mt-6">
            I spent the next few summers indoors working on a rocket design,
            while I recovered from the multiple surgeries it took to fix my
            badly broken legs. It took nine iterations, but when I was 15 I sent
            my dad’s Blackberry into orbit and was able to transmit a photo back
            down to our family computer from space.
          </p>
          <p class="mt-6">
            Today, I’m the founder of Planetaria, where we’re working on
            civilian space suits and manned shuttle kits you can assemble at
            home so that the next generation of kids really
          </p>
        </div>
        <div class="right w-full md:flex-1 p-4 rounded-lg">右侧</div>
      </main>
    </div>
  </div>
</template>

<script setup>
import LayoutHeader from "@/components/layout/Header.vue";
</script>

<style></style>
