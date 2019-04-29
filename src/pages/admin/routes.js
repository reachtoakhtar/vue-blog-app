/**
 * Created by Akhtar on  29/04/2019.
 */

import Admin from '@/pages/admin/index'
import AdminAuthPage from '@/pages/admin/auth'
import NewPost from '@/pages/admin/new-post'
import AdminSinglePost from '@/pages/admin/post-detail'

export default [
  {path: '/admin', component: Admin},
  {path: '/admin/auth', component: AdminAuthPage},
  {path: '/admin/new-post', component: NewPost},
  {path: '/admin/posts/:id', component: AdminSinglePost}
]
