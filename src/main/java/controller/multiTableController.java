package controller;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import entity.MessageResult;
import entity.Role;
import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import service.RoleService;
import service.UserService;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/multiTable")
public class multiTableController {

    @Autowired
    private UserService userService;//注入
    @Autowired
    private RoleService roleService;//注入

    /**
     * 跳转多表查询主页面
     * @return
     */
    @RequestMapping("/toMultiTableIndex.do")
    public String toMutliTableIndex(HttpServletRequest request){
        List<Role> roleList = roleService.getRoleList();
        request.setAttribute("roleList",roleList);
        return "multiTableIndex";
    }

    /**
     * user和role两表关联查询列表给前台bootstrap-table
     * @param username 用户登录名
     * @param roleId 角色ID
     * @param limit 页面大小
     * @param offset 页面大小起始值
     * @return
     */
    @RequestMapping("/query2Tables.do")
    @ResponseBody
    public JSONObject query2Tables(String username, String roleId, int limit, int offset){
        //查询结果列表
        List<User> resultList = new ArrayList<User>();
        resultList = userService.queryUserRoleList(username, roleId,limit, offset);
        JSONObject json = new JSONObject();
        Integer total = userService.getUserRoleTotal(username, roleId);
        //bootstrap-table 返回格式必须包含rows和total
        json.put("rows", resultList);
        json.put("total", total);
        return json;
    }
}
