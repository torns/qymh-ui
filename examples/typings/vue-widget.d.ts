import VueRouter, {Route} from "vue-router"
declare module "vue/types/vue" {
  interface Vue {
    $notice:any,
    $format:any,
    $tools:any,
    $cookie:any,
    $storage:any,
    $tree:any
  }
}