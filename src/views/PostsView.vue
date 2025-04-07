<script setup lang="ts">
import { usePosts } from '@/composables/usePosts'

const { isLoading, isError, data: posts, error } = usePosts()
</script>

<template>
  <div>
    <h2>Posts</h2>

    <div v-if="isLoading">Loading posts...</div>

    <div v-if="isError" class="error">Error: {{ error?.message }}</div>

    <ul v-if="posts">
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>
