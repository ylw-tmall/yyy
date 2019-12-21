import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Home from "./home"
import Book from "./book"
import bookDetails from "./bookDetails"
import bookDetailsRead from "./bookDetailsRead"
import Video from "./video"
import VideoDetails from "./videoDetails"
import Img from "./img"
import ImgDetails from "./imgDetails"
import OneImgDetails from "./OneImgDetails"
import Login from "./login"
import Register from "./register"
import FindPassword from "./findPassword"
import BindPhone from "./bindPhone"
import Activity from "./activity"
import Award from "./award"
import Works from "./works"
import UserCenter from "./userCenter"
Vue.use(VueRouter)

const routes = [
  {path:"/",redirect:"/home"},
  Home,Book,
  Video, VideoDetails, Img, ImgDetails, OneImgDetails, bookDetailsRead,
  Login, Register, FindPassword, BindPhone, bookDetails,
  Activity, Award, Works,
  UserCenter


]

const router = new VueRouter({
  routes
})

export default router
