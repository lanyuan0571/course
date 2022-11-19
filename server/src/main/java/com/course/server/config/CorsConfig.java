//package com.course.server.config;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.cors.CorsConfiguration;
//import org.springframework.web.servlet.config.annotation.CorsRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
///*解决跨越问题*/
//@Configuration
//public class CorsConfig implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**")
//                .allowedOrigins("*")
//                .allowCredentials(true)
//                .allowedHeaders(CorsConfiguration.ALL)
//                .allowedMethods(CorsConfiguration.ALL)
//                .maxAge(3600); //一小时内不需要再预检
//    }
//
//}