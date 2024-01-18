import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ContactIndex from '../views/ContactIndex.vue'
import ContactDetails from '../views/ContactDetails.vue'
import ContactEdit from '../views/ContactEdit.vue'
import BitcoinChart from '../views/BitcoinChart.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactIndex
    },
    {
      path: '/contact/:contactId',
      name: 'contactDetails',
      component: ContactDetails
    },
    {
      path: '/contact/edit/:contactId?',
      name: 'contactEdit',
      component: ContactEdit
    },
    {
      path: '/statistics',
      name: 'BitcoinChart',
      component: BitcoinChart
    },
  ]
})

export default router


// path: '/about',
// name: 'about',
// route level code-splitting
// this generates a separate chunk (About.[hash].js) for this route
// which is lazy-loaded when the route is visited.
// component: () => import('../views/AboutView.vue')
