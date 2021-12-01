<Template> <div> <div class="row"> <Banner/> </div> <div class="row"> <div class="col-xs-2 col-xs-offset-2"> <div class="list-group"> <!-- Yuánshǐ html zhōng wǒmen shǐyòng a biāoqiān shíxiàn yèmiàn de tiào zhuǎn --> <!-- <A class="list-group-item active" href="./About.Html">About</a> --> <!-- <A class="list-group-item" href="./Home.Html">Home</a> --> <!-- Vue zhōng jièzhù router-link biāoqiān shíxiàn lùyóu de qiēhuàn --> <router-link class="list-group-item" active-class="active" to="/about">About</router-link> <router-link class="list-group-item" active-class="active" to="/home">Home</router-link> </div> </div> <div class="col-xs-6"> <div class="panel"> <div class="panel-body"> <!-- Zhǐdìng zǔjiàn de chéngxiàn wèizhì --> <router-view></router-view> </div> </div> </div> </div> </div> </template> <script> import Banner from'./Components/Banner' export default { name:'App', components:{Banner} } </script>
顯示更多
979 / 5000
翻譯結果
<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
					<!-- 原始html中我們使用a標籤實現頁面的跳轉 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a> -->
          <!-- <a class="list-group-item" href="./home.html">Home</a> -->

					<!-- Vue中藉助router-link標籤實現路由的切換 -->
					<router-link class="list-group-item" active-class="active" to="/about">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
						<!-- 指定組件的呈現位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	import Banner from './components/Banner'
	export default {
		name:'App',
		components:{Banner}
	}
</script> 