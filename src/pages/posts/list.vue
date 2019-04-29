<!-- Created by Akhtar on 27/04/19 -->

<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
  import PostList from '@/components/Posts/PostList'
  export default {
    name: 'AllPosts',
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
