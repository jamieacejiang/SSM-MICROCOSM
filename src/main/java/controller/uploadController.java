package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import service.UserService;

import java.io.File;

@Controller
@RequestMapping("/upload")
public class uploadController {
    @Autowired
    private UserService userService;//注入

    public void uploadPhoto(File imgFile){

    }
}
