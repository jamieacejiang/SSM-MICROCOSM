package controller;

import com.alibaba.fastjson.JSONObject;
import entity.MessageResult;
import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import service.UserService;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/sqlOperate")
public class sqlOperateController {
    @Autowired
    private UserService userService;//注入

    /**
     * 查询用户列表信息给前台bootstrap-table
     * @param username 用户名
     * @param password 密码
     * @param limit 页面大小
     * @param offset 页面大小起始值
     */
    @RequestMapping("/queryUsers.do")
    @ResponseBody//将messageresult返回值转成json输出
    public JSONObject queryUsers(String username, String password, int limit, int offset){
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
     * @param username
     * @param password
     * @param nickname
     * @param birth
     * @param email
     * @param personSign
     * @param registeTime
     * @param loginIp
     * @return
     */
    @RequestMapping("/updateUser.do")
    @ResponseBody//将messageresult返回值转成json输出
    public MessageResult updateUser(String id, String username, String password, String nickname, String birth, String email, String personSign, String registeTime, String loginIp){
        User user = new User();
        user.setId(id);
        user.setUsername(username);
        user.setPassword(password);
        user.setNickname(nickname);
        user.setBirth(birth);
        user.setEmail(email);
        user.setPersonSign(personSign);
        user.setRegisteTime(registeTime);
        user.setLoginIp(loginIp);
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
