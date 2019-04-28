<!-- Created by Akhtar on 27/04/19 -->

<template>
  <div class="posts-page">
    <PostList is-admin :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '@/components/posts/PostList'
  export default {
    components: {
      PostList
    },
    computed: {
      loadedPosts() {
        return this.$store.getters['post/loadedPosts']
      }
    }
  }
</script>

<style scoped>
  .post-list {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
