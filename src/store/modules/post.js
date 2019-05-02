/**
 * Created by Akhtar on  25/04/2019.
 */

import http from '@/services/httpService';

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
      state.loadedPosts = posts;
    },
    addPost(state, post) {
      state.loadedPosts.push(post);
    },
    editPost(state, editedPost) {
      const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
      state.loadedPosts[postIndex] = editedPost;
    },
    setPost(state, post) {
      state.loadedPost = post;
    }
  },
  actions: {
    async initStore({commit}) {
      try {
        const {data} = await http.get('https://nuxt-blog-mah.firebaseio.com/posts.json');
        const postArray = [];
        for (const key in data) {
          if (data)
            postArray.push({...data[key], id: key});
        }
        commit('setPosts', postArray);
      } catch (ex) {
      }
    },
    async addPost({commit}, post) {
      try {
        const createdPost = {...post, updatedDate: new Date()};
        const {data} = await http.post('https://nuxt-blog-mah.firebaseio.com/posts.json', createdPost);
        commit('addPost', {...createdPost, id: data.name});
      } catch (ex) {}
    },
    async editPost({commit}, editedPost) {
      try {
        await http.put('https://nuxt-blog-mah.firebaseio.com/posts' + editedPost.id + '.json', editedPost);
        commit('editPost', editedPost);
      } catch (ex) {}
    },
    async getPost({commit}, id) {
      try {
        const {data} = await http.get('https://nuxt-blog-mah.firebaseio.com/posts/' + id + '.json');
        commit('setPost', {...data, id});
      } catch (ex) {}
    }
  }
};
