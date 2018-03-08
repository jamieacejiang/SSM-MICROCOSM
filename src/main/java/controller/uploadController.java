package controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import entity.MessageResult;
import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import service.UserService;
import util.ImageCutUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.util.Date;
import java.util.Random;

@Controller
@RequestMapping("/upload")
public class uploadController {
    @Autowired
    private UserService userService;//注入

    /**
     * 上传图片
     * @param avatar_file
     */
    @RequestMapping("/uploadPhoto.do")
    @ResponseBody
    public MessageResult uploadPhoto(HttpServletRequest request, String avatar_src, String avatar_data, MultipartFile avatar_file, String id){
        //String dir = "uploadPhoto";
        //path存储路径
        //String path = request.getSession().getServletContext().getRealPath(dir);//服务器端




        //String path = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+"/images/";//带项目名和端口号的
        //String path = "/images/";
        String path = "D://SIMS//uploadPhoto//";


        //定义返回结果result
        MessageResult result = new MessageResult();

        //MultipartFile类中两个方法区别：
        //getName : 获取表单中文件组件的名字
        //getOriginalFilename : 获取上传文件的原名
        String name = avatar_file.getOriginalFilename();

        //判断文件的MIMEtype
        String type = avatar_file.getContentType();
        if(type==null || !type.toLowerCase().startsWith("image/")){
            result.setStatus(1);
            result.setMsg("不支持的文件类型，仅支持图片！");
            return result;
        }
        System.out.println("file type:"+type);
        String fileName = new Date().getTime()+""+new Random().nextInt(10000)+"_"+name.substring(name.lastIndexOf('.'));
        System.out.println("文件路径："+path+":"+fileName);

        JSONObject joData = (JSONObject) JSONObject.parse(avatar_data);
        // 用户经过剪辑后的图片的大小
        float x = joData.getFloatValue("x");
        float y = joData.getFloatValue("y");
        float w =  joData.getFloatValue("width");
        float h =  joData.getFloatValue("height");

        //开始上传
        File targetFile = new File(path, fileName);
        //保存
        try {
            if(!targetFile.exists()){
                targetFile.mkdirs();
                InputStream is = avatar_file.getInputStream();
                ImageCutUtil.cut(is, targetFile, (int)x,(int)y,(int)w,(int)h);
                is.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
            result.setStatus(2);
            result.setMsg("上传失败，出现异常："+e.getMessage());
            return result;
        }
        User user = new User();
        user.setId(id);
        user.setPhotoSrc(fileName);
        MessageResult ms = userService.updateUser(user);
        if(ms.getStatus()==0){//修改成功
            result.setStatus(0);
            result.setMsg("上传成功!");
            result.setData(fileName);
            return result;
        }
        result.setStatus(3);
        result.setMsg("上传失败!更新头像失败");
        return result;
    }

    @RequestMapping("/downloadPhoto.do")
    public void downloadPhoto(String fileName, HttpServletResponse response){
        String path = "D://SIMS//uploadPhoto//";
        File filePic = new File(path+fileName);
        if(filePic.exists()){
            OutputStream os = null;
            FileInputStream is = null;
            try {
                is = new FileInputStream(filePic);
                int i;
                response.setContentType("image/*"); // 设置返回的文件类型
                os = response.getOutputStream(); // 得到向客户端输出二进制数据的对象
                while((i=is.read())!=-1){
                    os.write(i); // 输出数据
                }
                os.flush();
            } catch (FileNotFoundException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                try {
                    is.close();
                    os.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

        }
    }
}
