/**
 * Created by Akhtar on  25/04/2019.
 */

import http from '@/services/httpService'

export default {
  namespaced: true,
  state: {
    loadedPosts: [],
    loadedPost: {}
  },
  getters: {
    loadedPosts: state => state.loadedPosts,
    loadedPost: state => state.loadedPost
  },
  mutations: {
    setPosts(state, posts) {
      state.loadedPosts = posts
    },
    addPost(state, post) {
      state.loadedPosts.push(post)
    },
    editPost(state, editedPost) {
      const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
      state.loadedPosts[postIndex] = editedPost
    },
    setPost(state, post) {
      state.loadedPost = post
    }
  },
  actions: {
    initStore({commit}) {
      http.get('https://nuxt-blog-mah.firebaseio.com/posts.json')
        .then((response) => {
          const postArray = []
          for (const key in response.data) {
            postArray.push({...response.data[key], id: key})
          }
          commit('setPosts', postArray)
        })
        .catch(e => {
          window.console.log(e)
        })
    },
    addPost({commit}, post) {
      const createdPost = {...post, updatedDate: new Date()}
      return http.post('https://nuxt-blog-mah.firebaseio.com/posts.json', createdPost)
        .then((response) => {
          commit('addPost', {...createdPost, id: response.data.name})
        })
        .catch((error) => {
          window.console.log(error)
        })
    },
    editPost({commit}, editedPost) {
      return http.put('https://nuxt-blog-mah.firebaseio.com/posts' + editedPost.id + '.json', editedPost)
        .then(() => {
          commit('editPost', editedPost)
        })
        .catch()
    },
    getPost({commit}, id) {
      return http.get('https://nuxt-blog-mah.firebaseio.com/posts/' + id + '.json')
        .then(response => {
          commit('setPost', {...response.data, id: id})
        })
        .catch()
    }
  }
}
