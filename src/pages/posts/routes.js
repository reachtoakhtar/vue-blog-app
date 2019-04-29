/**
 * Created by Akhtar on  29/04/2019.
 */

import AllPosts from '@/pages/posts/list'
import SinglePost from '@/pages/posts/detail'

export default [
  {path: '/posts', component: AllPosts},
  {path: '/posts/:id', component: SinglePost}
]
