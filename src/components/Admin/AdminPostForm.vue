<!-- Created by Akhtar on 24/04/19 -->

<template>
  <form @submit.prevent="onSave">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.content">Content</AppControlInput>
    <AppControlInput control-type="textarea" v-model="editedPost.previewText">Preview Text</AppControlInput>

    <AppButton type="submit">Save</AppButton>
    <AppButton
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel">Cancel
    </AppButton>
  </form>
</template>

<script>
import AppButton from '@/components/UI/AppButton'
import AppControlInput from '@/components/UI/AppControlInput'

export default {
  name: 'AdminPostForm',
  components: {
    AppButton,
    AppControlInput
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
          author: '',
          title: '',
          thumbnail: '',
          content: '',
          previewText: ''
        }
    }
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  methods: {
    onSave() {
      this.$emit('submit', this.editedPost)
    },
    onCancel() {
      this.router.push('/admin')
    }
  }
}
</script>

<style scoped>

</style>
