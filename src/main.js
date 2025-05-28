/*
 * @Author: Chunguang Jin 13454759@qq.com
 * @Date: 2025-05-26 17:36:15
 * @LastEditors: Chunguang Jin 13454759@qq.com
 * @LastEditTime: 2025-05-28 17:16:27
 * @FilePath: /华东2/mydemo/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
const app = createApp(App);
app.use(ElementPlus).use(store).use(router).mount("#app");
