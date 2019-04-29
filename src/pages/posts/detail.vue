<!-- Created by Akhtar on 27/Apr/19 -->

<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on: {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written By: {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">Content of the post</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post.</p>
      <p>
        Send a mail to
        <a href="mail:feedback@mycompany.com">feedback@mycompany.com</a>
      </p>
    </section>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex'
const {mapGetters} = createNamespacedHelpers('post')

import http from '@/services/httpService'

export default {
  name: 'SinglePost',
  mounted() {
    this.$store.dispatch('post/getPost', this.$route.params.id)
  },
  computed: {
    ...mapGetters(['loadedPost'])
  }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
