(function (window) {
  const MyPlugin = {}
  MyPlugin.install = function (Vue, options) {
    // 1. 添加全局方法或屬性
    Vue.myGlobalMethod = function () {
      console.log('Vue函數對象的myGlobalMethod()')
    }

    // 2. 添加全局資源
    Vue.directive('my-directive',function (el, binding) {
      el.textContent = 'my-directive----'+binding.value
    })

    // 4. 添加實例方法
    Vue.prototype.$myMethod = function () {
      console.log('vm $myMethod()')
    }
  }
  window.MyPlugin = MyPlugin
})(window)