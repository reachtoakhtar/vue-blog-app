/**
 * Created by Akhtar on 27/04/2019.
 */

import mainRoutes from '@/pages/routes';
import postRoutes from '@/pages/posts/routes';
import adminRoutes from '@/pages/admin/routes';

export const routes = [
  ...mainRoutes,
  ...postRoutes,
  ...adminRoutes
];
