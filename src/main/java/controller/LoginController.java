package controller;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.HttpRequestHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import service.UserService;
import util.ImageUtil;
import entity.MessageResult;
import entity.User;
import util.SIMSUtil;

@Controller
public class LoginController {
	@Autowired
	private UserService userService;//注入
	
	/**
	 * 登录操作
	 * @return
	 */
	@RequestMapping("/login.do")
	@ResponseBody//将messageresult返回值转成json输出
	public MessageResult loginExecute(String username, String password, String checkCode, HttpSession session){
		String imgCode = (String)session.getAttribute("imgCode");
		if(checkCode == null || checkCode.equals("") || !checkCode.equalsIgnoreCase(imgCode)){
			MessageResult r = new MessageResult();
			r.setStatus(3);
			r.setMsg("验证码错误！");
			return r;
		}
		User user = new User();
		user.setUsername(username);
		//将用户输入的password再加密，与数据库比对
		String md5_password = "";
		try {
			md5_password = SIMSUtil.md5(password);
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		user.setPassword(md5_password);
		MessageResult result = userService.checkLogin(user);
		//如果登陆成功
		if(result.getStatus()==0){
		    User user1 = (User)result.getData();
            session.setAttribute("user",user1);
        }
		return result;
	}

    /**
     * 注销登录
     * @return
     */
    @RequestMapping("/logout.do")
	public String logoutExecute(HttpSession session){
        session.invalidate();
	    return toIndex();
    }
	
	/**
	 * 跳转主页面
	 * @return
	 */
	@RequestMapping("/index.do")
	public String toIndex(){
		return "index";
	}

	/**
	 * 注册操作
	 * @return
	 */
	@RequestMapping("/register.do")
	@ResponseBody//将messageresult返回值转成json输出
	public MessageResult registerExecute(String username, String password){
		User user = new User();
		user.setUsername(username);
		user.setPassword(password);
		MessageResult result = userService.checkRegister(user);
		return result;
	}
	/**
	 * 生成验证码(值存session,图片给浏览器)
	 * @param request
	 * @param response
	 */
	@RequestMapping("/createImg.do")
	public void createImg(HttpServletRequest request,HttpServletResponse response){
		//生成验证码及图片
		Object[] objs = ImageUtil.createImage();
		//将验证码存入session，
		String imgCode = (String)objs[0];
		HttpSession session = request.getSession();
		session.setAttribute("imgCode", imgCode);
		//将图片输出给浏览器,
		BufferedImage img = (BufferedImage)objs[1];
		response.setContentType("image/png");
		//tomcat自动创建输出流，目标就是本次访问的那个浏览器
		OutputStream os = null;
            try {
                os = response.getOutputStream();
                ImageIO.write(img, "png", os);
            } catch (IOException e) {
                e.printStackTrace();
            }finally{
                try {
                    if(os!=null){
                        os.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
		}
	}
	/**
	 * 登陆成功后，跳转个人主页
	 * @return
	 */
	@RequestMapping("/toMyIndex.do")
	public String toMyIndex(){
		return "myIndex";
	}

	//TODO 此处echarts相关请求已迁移至echartsController

	//TODO 此处关于测试的单表和多表的查询迁移至sqlOperateController

	/**
	 * 跳转修改个人信息页面
	 * @return
	 */
	@RequestMapping("/toEditPerMess.do")
	public String toEditPerMess(HttpSession session){
		User user = (User)session.getAttribute("user");
		User u = new User();
		u.setId(user.getId());
		user = userService.queryBean(u);
		//request.setAttribute("user1",user);
		session.setAttribute("user",user);
		return "editPerMess";
	}
}
