<template>
  <div class="max-w-2xl pt-30">
    <h1 class="text-4xl font-bold">
      Writing on software design, company building, and the aerospace industry.
    </h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
      All of my long-form thoughts on programming, leadership, product design,
      and more, collected in chronological order.
    </p>
  </div>
  <div class="mt-16 sm:mt-20">
    <div class="md:border-l md:border-zinc-100 md:pl-6">
      <div v-for="(value, index) in projectData" :key="index">
        <article class="md:grid md:grid-cols-4 md:items-baseline">
          <div class="mb-8">
            <p class="text-sm font-bold">{{ value.company }}</p>
            <em class="text-xs opacity-50">{{ value.time }}</em>
          </div>
          <div class="md:col-span-3">
            <div
              class="mb-9 lg:p-5 rounded-2xl transition cursor-pointer hover:bg-base-300 px-0 py-3"
              v-for="item in value.list"
              :key="item.project_name"
            >
              <h2
                class="text-sm border-l-2 pl-2 border-zinc-200 font-semibold mb-5"
              >
                {{ item.project_name }}
              </h2>
              <div class="mb-4">
                <div
                  class="badge badge-sm badge-soft mr-2"
                  :class="t.class"
                  v-for="t in item.tags"
                  :key="t.val"
                >
                  {{ t.val }}
                </div>
              </div>
              <p class="text-sm opacity-70 mt-2 leading-relaxed">
                When we released the first version of cosmOS last year, it was
                written in Go. Go is a wonderful programming language with a lot
                of benefits, but it’s been a while since I’ve seen an article on
                the front page of Hacker News about rewriting some important
                tool in Go and I see articles on there about rewriting things in
                Rust every single week.
              </p>
              <p
                class="text-sm mt-3 text-teal-500 text-right"
                @click="openDialog"
              >
                预览 >
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script setup>
import { projectData } from "@/utils/data.js";
</script>
