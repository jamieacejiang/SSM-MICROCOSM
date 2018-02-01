package controller;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.List;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

import service.UserService;
import util.ImageUtil;
import entity.MessageResult;
import entity.User;
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
		user.setPassword(password);
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
	/**
	 * 点击China Map按钮,跳转中国地图echarts页面
	 * @return
	 */
	@RequestMapping("/toChinaMap.do")
	public String toChinaMap(){
		return "chinaMap";
	}
	/**
	 * 点击Map Study按钮,跳转地图学习echarts页面
	 * @return
	 */
	@RequestMapping("/toMapStudy.do")
	public String toMapStudy(){
		return "mapStudy";
	}
	/**
	 * 点击Line Study按钮,跳转折线图学习页面
	 * @return
	 */
	@RequestMapping("/toLineStudy.do")
	public String toLineStudy(){
		return "lineStudy";
	}
	/**
	 * 点击Bar Study按钮,跳转柱状图学习页面
	 * @return
	 */
	@RequestMapping("/toBarStudy.do")
	public String toBarStudy(){
		return "barStudy";
	}
	/**
	 * 点击Scatter Study按钮,跳转散点图学习页面
	 * @return
	 */
	@RequestMapping("/toScatterStudy.do")
	public String toScatterStudy(){
		return "scatterStudy";
	}
	/**
	 * 点击Scatter Study按钮,跳转散点图学习页面
	 * @return
	 */
	@RequestMapping("/toPieStudy.do")
	public String toPieStudy(){
		return "pieStudy";
	}
	/**
	 * 查询用户列表信息给前台bootstrap-table
	 * @param username 用户名
	 * @param password 密码
	 * @param limit 页面大小
	 * @param offset 页面大小起始值
	 */
	@RequestMapping("/queryUsers.do")
	@ResponseBody//将messageresult返回值转成json输出
	public JSONObject queryUsers(String username, String password,int limit, int offset){
		//查询结果列表
		List<User> resultList = new ArrayList<User>();
		resultList = userService.queryPagerList(username, password,limit, offset);
		JSONObject json = new JSONObject();
        Integer total = userService.getTotal(username, password);
        //bootstrap-table 返回格式必须包含rows和total
        //JSONArray ja = JSONArray.parseArray(JSONObject.toJSONString(resultList));
        //json.put("rows", ja);
        json.put("rows", resultList);
        json.put("total", total);
        return json;
    }
	/**
	 * 查询单个用户信息
	 */
	@RequestMapping("/queryBean.do")
	@ResponseBody//将messageresult返回值转成json输出
	public User queryBean(String id){
		User u = new User();
		u.setId(id);
		User user = userService.queryBean(u);
		return user;
	}
	/**
	 * 更新用户信息操作
	 * @param id
	 * @param username 用户名
	 * @param password 密码
	 * @return
	 */
	@RequestMapping("/updateUser.do")
	@ResponseBody//将messageresult返回值转成json输出
	public MessageResult updateUser(String id, String username, String password){
		User user = new User();
		user.setId(id);
		user.setUsername(username);
		user.setPassword(password);
		MessageResult result = userService.updateUser(user);
		return result;
	}
	/**
	 * 删除用户信息操作
	 * @param id
	 * @return
	 */
	@RequestMapping("/deleteUser.do")
	@ResponseBody//将messageresult返回值转成json输出
	public MessageResult deleteUser(String id){
		User user = new User();
		user.setId(id);
		MessageResult result = userService.deleteUser(user);
		return result;
	}
}
