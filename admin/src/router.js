import Vue from "vue"
import Router from "vue-router"
import Login from "./views/login.vue"
import Admin from "./views/admin.vue"
import Welcome from "./views/admin/welcome.vue"
import Chapter from "./views/admin/chapter.vue";
import Section from "./views/admin/section.vue";
import Course from "./views/admin/course.vue"
import Category from "./views/admin/category.vue"
// import Chapter from "./views/admin/chapter.vue"
import Content from "./views/admin/content.vue"
import Teacher from "./views/admin/teacher.vue"
import File from "./views/admin/file.vue"
import User from "./views/admin/user.vue"
import Resource from "./views/admin/resource.vue"
import Role from "./views/admin/role.vue"
import Member from "./views/admin/member.vue"
import Sms from "./views/admin/sms.vue"

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
        path: "*",
        redirect: "/login",
    }, {
        path: "",
        redirect: "/login",
    }, {
        path: "/login",
        component: Login
    }, {
        path: "/",
        name: "admin",
        component: Admin,
        meta: {
            loginRequire: true
        },
        /*子路由不要加斜杠*/
        children: [{
            path: "welcome",
            name: "welcome",
            component: Welcome
        }, {
            path: "business/category",
            name: "business/category",
            component: Category,
        }, {
            path: "business/chapter",
            name: "business/chapter",
            component: Chapter,
        }, {
            path: "business/section",
            name: "business/section",
            component: Section,
        }, {
            path: "business/course",
            name: "business/course",
            component: Course,
        }, {
            path: "business/teacher",
            name: "business/teacher",
            component: Teacher,
        }, {
            path: "business/content",
            name: "business/content",
            component: Content,
        }, {
            path: "business/member",
            name: "business/member",
            component: Member,
        }, {
            path: "business/sms",
            name: "business/sms",
            component: Sms,
        }, {
            path: "file/file",
            name: "file/file",
            component: File,
        }, {
            path: "system/user",
            name: "system/user",
            component: User,
        }, {
            path: "system/resource",
            name: "system/resource",
            component: Resource,
        }, {
            path: "system/role",
            name: "system/role",
            component: Role,
        }]
    }]
})
