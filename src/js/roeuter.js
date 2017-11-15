import VueRouter from 'vue-router'

import home from '../component/nav/home.vue'
import news from '../component/nav/news.vue'
import video from '../component/nav/video.vue'
import my from '../component/nav/my.vue'
import military from '../component/four/military.vue'
import sports from '../component/four/sports.vue'
import education from '../component/four/education.vue'
import entertainment from '../component/four/entertainment.vue'
import search from '../component/index/search.vue'



export default new VueRouter({
	routes:[
		{path:'/home',component:home},
		{path:'/news',component:news},
		{path:'/video',component:video},
		{path:'/my',component:my},
		{path:'*',redirect:'/home'},
		{path:'/military',component:military},
		{path:'/sports',component:sports},
		{path:'/education',component:education},
		{path:'/entertainment',component:entertainment},
		{path:'/search',component:search}
		
		
		
		
		
	]
})
