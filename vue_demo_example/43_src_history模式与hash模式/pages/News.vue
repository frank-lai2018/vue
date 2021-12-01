<Template> <ul> <li:Style="{opacity}">huānyíng xuéxí Vue</li> <li>news001 <input type="text"></li> <li>news002 <input type="text"></li> <li>news003 <input type="text"></li> </ul> </template> <script> export default { name:'News', data() { return { opacity:1 } }, /* BeforeDestroy() { console.Log('News zǔjiàn jíjiāng bèi xiāohuǐle') clearInterval(this.Timer) }, */ /* mounted(){ this.Timer = setInterval(() => { console.Log('@') this.Opacity -= 0.01 If(this.Opacity <= 0) this.Opacity = 1 },16) }, */ activated() { console.Log('News zǔjiàn bèi jīhuóle') this.Timer = setInterval(() => { console.Log('@') this.Opacity -= 0.01 If(this.Opacity <= 0) this.Opacity = 1 },16) }, deactivated() { console.Log('News zǔjiàn shī huóle') clearInterval(this.Timer) }, } </script>
顯示更多
806 / 5000
翻譯結果
<template>
	<ul>
		<li :style="{opacity}">歡迎學習Vue</li>
		<li>news001 <input type="text"></li>
		<li>news002 <input type="text"></li>
		<li>news003 <input type="text"></li>
	</ul>
</template>

<script>
	export default {
		name:'News',
		data() {
			return {
				opacity:1
			}
		},
		/* beforeDestroy() {
			console.log('News組件即將被銷毀了')
			clearInterval(this.timer)
		}, */
		/* mounted(){
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		}, */
		activated() {
			console.log('News組件被激活了')
			this.timer = setInterval(() => {
				console.log('@')
				this.opacity -= 0.01
				if(this.opacity <= 0) this.opacity = 1
			},16)
		},
		deactivated() {
			console.log('News組件失活了')
			clearInterval(this.timer)
		},
	}
</script> 