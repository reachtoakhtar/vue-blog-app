<!-- Created by Akhtar on 27/Apr/19 -->

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
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
  layout: 'admin',
  components: {
    PostList,
    AppButton
  },
  data() {
    return {
      loadedPosts: [
        {
          id: '1',
          title: 'First Post',
          previewText: 'This is our First Post',
          thumbnail: ''
        },
        {
          id: '2',
          title: 'Second Post',
          previewText: 'This is our Second Post',
          thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        },
        {
          id: '3',
          title: 'Third Post',
          previewText: 'This is our Third Post',
          thumbnail: 'https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg'
        }
      ]
    }
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
