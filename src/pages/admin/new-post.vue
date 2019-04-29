<!-- Created by Akhtar on 23/04/19 -->

<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm'
  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    methods: {
      onSubmitted(postData) {
        this.$store.dispatch('post/addPost', postData)
          .then(() => {
            this.$router.push('/admin')
          })
      }
    }
  }
</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }
</style>
