<!-- Created by Akhtar on 27/Apr/19 -->

<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
//import {createNamespacedHelpers} from 'vuex'
//const {mapGetters} = createNamespacedHelpers('post')

import AdminPostForm from '@/components/Admin/AdminPostForm'
import http from '@/services/httpService'

export default {
//  layout: 'admin',
  name: 'AdminSinglePost',
  components: {
    AdminPostForm
  },
  mounted() {
    this.$store.dispatch('post/getPost', this.$route.params.id)
    this.loadedPost = this.$store.getters['post/loadedPost']
  },
  computed: {
    loadedPost() {
      return this.$store.getters['post/loadedPost']
    }
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('post/editPost', editedPost)
        .then(() => {
          this.$router.push('/admin')
        })
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
