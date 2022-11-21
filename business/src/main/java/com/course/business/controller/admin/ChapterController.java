package com.course.business.controller.admin;

import com.course.server.domain.Chapter;
import com.course.server.dto.ChapterDto;
import com.course.server.dto.PageDto;
import com.course.server.dto.ResponseDto;
import com.course.server.service.ChapterService;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/admin/chapter")
public class ChapterController {
    @Resource
    private ChapterService chapterService;

    @RequestMapping("/list")
    public ResponseDto chapter(@RequestBody PageDto pageDto) {
//        return chapterService.list();
        ResponseDto responseDto = new ResponseDto();
        chapterService.list(pageDto);
        responseDto.setContent(pageDto);
        return responseDto;
    }

    @RequestMapping("/saveChapter")
    public ResponseDto saveChapter(@RequestBody ChapterDto chapterDto) {
//        return chapterService.list();
        ResponseDto responseDto = new ResponseDto();
        chapterService.saveChapter(chapterDto);
        responseDto.setContent(chapterDto);
        return responseDto;
    }
}
