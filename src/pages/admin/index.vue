<!-- Created by Akhtar on 23/04/19 -->

<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton @click="$router.push('/admin/new-post')">Create Post</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList isAdmin :posts="loadedPosts"/>
    </section>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex'
  const { mapGetters } = createNamespacedHelpers('post')

  import PostList from '@/components/Posts/PostList'
  import AppButton from '@/components/UI/AppButton'

  export default {
//    layout: 'admin',
    name: 'Admin',
    components: {
      PostList,
      AppButton
    },
    computed: {
      ...mapGetters(['loadedPosts'])
    }
  }
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>